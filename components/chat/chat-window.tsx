"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Send, Paperclip, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "@/components/chat/chat-message"
import { useWebSocket } from "@/hooks/use-websocket"

// Mock data for the current chat
const mockCurrentChat = {
  id: "1",
  name: "John Doe",
  role: "Frontend Developer",
  avatar: "/placeholder.svg?height=40&width=40",
  status: "online",
}

interface Message {
  id: string
  sender: string
  content: string
  roomId: string
  createdAt: Date
}

export function ChatWindow({ chatId }: { chatId: string }) {
  const [inputMessage, setInputMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock user ID - in a real app, this would come from authentication
  const currentUserId = "client123"

  const { connected, sendMessage, lastMessage } = useWebSocket({
    userId: currentUserId,
    roomId: chatId,
  })

  // Handle incoming messages
  useEffect(() => {
    if (lastMessage) {
      try {
        const data = JSON.parse(lastMessage)

        if (data.type === "chat" && data.message) {
          setMessages((prev) => [...prev, data.message])
        } else if (data.type === "history" && Array.isArray(data.messages)) {
          setMessages(data.messages)
        }
      } catch (error) {
        console.error("Failed to parse message:", error)
      }
    }
  }, [lastMessage])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputMessage.trim() || !connected) return

    // Send message via WebSocket
    sendMessage(
      JSON.stringify({
        type: "chat",
        content: inputMessage,
      }),
    )

    setInputMessage("")
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={mockCurrentChat.avatar || "/placeholder.svg"}
              alt={mockCurrentChat.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h2 className="font-medium">{mockCurrentChat.name}</h2>
            <p className="text-xs text-muted-foreground">{mockCurrentChat.role}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} isOwn={message.sender === currentUserId} />
          ))
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">
              {connected ? "No messages yet. Start the conversation!" : "Connecting..."}
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-3">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Button type="button" variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={!connected}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!connected || !inputMessage.trim()} className="shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
