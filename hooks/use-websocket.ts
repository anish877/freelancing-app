"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface UseWebSocketProps {
  userId: string
  roomId: string
  url?: string
}

export function useWebSocket({ userId, roomId, url = "ws://localhost:5050" }: UseWebSocketProps) {
  const [connected, setConnected] = useState(false)
  const [lastMessage, setLastMessage] = useState<string | null>(null)
  const socketRef = useRef<WebSocket | null>(null)

  // Connect to WebSocket
  useEffect(() => {
    // Create WebSocket connection with query parameters
    const wsUrl = `${url}?userId=${userId}&roomId=${roomId}`
    const socket = new WebSocket(wsUrl)

    socket.onopen = () => {
      console.log("WebSocket connected")
      setConnected(true)
    }

    socket.onmessage = (event) => {
      console.log("Message received:", event.data)
      setLastMessage(event.data)
    }

    socket.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    socket.onclose = () => {
      console.log("WebSocket disconnected")
      setConnected(false)
    }

    socketRef.current = socket

    // Clean up on unmount
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close()
      }
    }
  }, [userId, roomId, url])

  // Send message function
  const sendMessage = useCallback((message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message)
      return true
    }
    return false
  }, [])

  return {
    connected,
    sendMessage,
    lastMessage,
  }
}
