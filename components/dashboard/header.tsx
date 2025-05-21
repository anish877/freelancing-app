"use client"

import Link from "next/link"
import { Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="border-b py-2 px-4">
      <div className="flex justify-between items-center">
        <Link href="/dashboard" className="text-xl font-bold">
          futurejob
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
