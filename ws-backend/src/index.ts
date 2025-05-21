import { WebSocketServer, WebSocket } from "ws";
import prisma from "./lib/prisma";

const wss = new WebSocketServer({ port: 8080 });

interface Message {
  id: string;
  sender: string;
  content: string;
  roomId: string;
  createdAt: Date
}

interface ClientInfo {
  ws: WebSocket;  
  userId: string;
  roomId: string;
  userType: "freelancer" | "client"
}

interface MessageObject {
  type: string;
  userId?: string;
  userType?: "freelancer" | "client";
  message?: Message | null;
  timestamp?: string;
}

interface IncomingChatMessage {
  type: string;
  content: string;
}

const clients = new Map<WebSocket, ClientInfo>();

// Handle new WebSocket connections
wss.on("connection", async (ws: WebSocket, request) => {
  console.log("New client connected");
  
  // Parse connection URL to get query parameters
  const url = new URL(request.url || "", "http://localhost:8080");
  const userId = url.searchParams.get("userId");
  const roomId = url.searchParams.get("roomId");
  
  // Validate connection parameters
  if (!userId || !roomId) {
    ws.send(JSON.stringify({ 
      type: "error", 
      message: "Missing userId or roomId parameters" 
    }));
    ws.close();
    return;
  }

  try {
    // Verify room exists and user is authorized (either client or freelancer)
    const room = await prisma.room.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      ws.send(JSON.stringify({ 
        type: "error", 
        message: "Room not found" 
      }));
      ws.close();
      return;
    }

    // Check if user is either the client or freelancer for this room
    if (room.clientId !== userId && room.freelancerId !== userId) {
      ws.send(JSON.stringify({ 
        type: "error", 
        message: "Unauthorized: You are not a member of this room" 
      }));
      ws.close();
      return;
    }

    // Store client connection with metadata
    const clientInfo: ClientInfo = {
      ws,
      userId,
      roomId,
      userType: userId === room.clientId ? "client" : "freelancer"
    };
    
    clients.set(ws, clientInfo);
    
    // Send connection confirmation
    ws.send(JSON.stringify({ 
      type: "connected", 
      roomId,
      userId,
      userType: clientInfo.userType
    }));

    // Load and send message history
    try {
      const messages = await prisma.message.findMany({
        where: { roomId },
        orderBy: { createdAt: 'asc' }
      });
      
      ws.send(JSON.stringify({
        type: "history",
        messages
      }));
    } catch (error) {
      console.error("Failed to load message history:", error);
      ws.send(JSON.stringify({
        type: "error",
        message: "Failed to load message history"
      }));
    }

    // Notify others in the room that the user has joined
    broadcastToRoom(roomId, {
      type: "userJoined",
      userId,
      userType: clientInfo.userType,
      timestamp: new Date().toISOString()
    }, ws); // Exclude the user who just joined

    // Handle incoming messages
    ws.on("message", async (data) => {
      try {
        const message = JSON.parse(data.toString());
        
        // Handle chat messages
        if (message.type === "chat") {
          await handleChatMessage(clientInfo, message);
        } else {
          console.log("Unknown message type:", message.type);
        }
      } catch (error) {
        console.error("Error processing message:", error);
        ws.send(JSON.stringify({
          type: "error",
          message: "Failed to process message"
        }));
      }
    });

    // Handle disconnection
    ws.on("close", () => {
      console.log(`Client disconnected: ${userId} from room ${roomId}`);
      
      // Notify others that user has left
      broadcastToRoom(roomId, {
        type: "user_left",
        userId,
        userType: clientInfo.userType,
        timestamp: new Date().toISOString()
      });
      
      // Remove from clients map
      clients.delete(ws);
    });

  } catch (error) {
    console.error("Error during connection setup:", error);
    ws.send(JSON.stringify({ 
      type: "error", 
      message: "Server error during connection setup" 
    }));
    ws.close();
  }

  // Handle connection errors
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
    clients.delete(ws);
  });
});

// Handle chat messages
async function handleChatMessage(clientInfo: ClientInfo, message: IncomingChatMessage) {
  const { ws, userId, roomId } = clientInfo;
  
  if (!message.content || message.content.trim() === "") {
    ws.send(JSON.stringify({
      type: "error",
      message: "Message content cannot be empty"
    }));
    return;
  }

  try {
    // Save message to database
    const savedMessage = await prisma.message.create({
      data: {
        roomId,
        sender: userId,
        content: message.content,
      }
    });

    // Broadcast message to all clients in the room
    const broadcastMessage: MessageObject = {
      type: "chat",
      message: {
        id: savedMessage.id,
        roomId,
        sender: userId,
        content: savedMessage.content,
        createdAt: savedMessage.createdAt
      }
    };
    
    broadcastToRoom(roomId, broadcastMessage);
    
  } catch (error) {
    console.error("Failed to save message:", error);
    ws.send(JSON.stringify({
      type: "error",
      message: "Failed to save message"
    }));
  }
}

// Broadcast message to all clients in a room
function broadcastToRoom(roomId: string, message: MessageObject, excludeWs: WebSocket | null = null) {
  for (const [ws, clientInfo] of clients.entries()) {
    if (clientInfo.roomId === roomId && ws !== excludeWs && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }
}

// API endpoints for room management
// These would typically be in a separate file/router in your application
// But included here for completeness

// Create a new chat room
export async function createRoom(freelancerId: string, clientId: string) {
  try {
    const room = await prisma.room.create({
      data: {
        freelancerId: freelancerId,
        clientId: clientId
      }
    });
    return room;
  } catch (error) {
    console.error("Failed to create room:", error);
    throw error;
  }
}

// Get rooms for a user (either as freelancer or client)
export async function getRoomsForUser(userId: string) {
  try {
    const rooms = await prisma.room.findMany({
      where: {
        OR: [
          { freelancerId: userId },
          { clientId: userId }
        ]
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });
    return rooms;
  } catch (error) {
    console.error("Failed to fetch rooms for user:", error);
    throw error;
  }
}

console.log("Chat WebSocket server running at ws://localhost:8080");