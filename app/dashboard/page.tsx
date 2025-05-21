import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { ChatList } from "@/components/chat/chat-list"

export const metadata: Metadata = {
  title: "Dashboard - FutureJob",
  description: "Manage your projects and communications",
}

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 flex overflow-hidden">
          <ChatList />
          <div className="flex-1 flex items-center justify-center border-l">
            <div className="text-center p-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
              <p className="text-muted-foreground mb-6">Select a chat from the sidebar or start a new conversation</p>
              <Button asChild>
                <Link href="/dashboard/new-chat">Start New Chat</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
