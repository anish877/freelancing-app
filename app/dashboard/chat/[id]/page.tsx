import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { ChatList } from "@/components/chat/chat-list"
import { ChatWindow } from "@/components/chat/chat-window"

export const metadata: Metadata = {
  title: "Chat - FutureJob",
  description: "Chat with your freelancers and clients",
}

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 flex overflow-hidden">
          <ChatList />
          <ChatWindow chatId={params.id} />
        </div>
      </div>
    </div>
  )
}
