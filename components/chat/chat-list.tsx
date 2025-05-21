"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ChatItem } from "@/components/chat/chat-item"

// Mock data for chat rooms
const mockChats = [
  {
    id: "1",
    name: "John Doe",
    role: "Frontend Developer",
    lastMessage: "I've completed the homepage design",
    timestamp: "10:30 AM",
    unread: 2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "UI/UX Designer",
    lastMessage: "Can we discuss the color palette?",
    timestamp: "Yesterday",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Backend Developer",
    lastMessage: "API integration is done",
    timestamp: "Yesterday",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Sarah Williams",
    role: "Project Manager",
    lastMessage: "Let's schedule a meeting tomorrow",
    timestamp: "Monday",
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function ChatList() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = mockChats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-80 border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search conversations..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
        ) : (
          <div className="p-4 text-center text-muted-foreground">No conversations found</div>
        )}
      </div>
    </div>
  )
}
