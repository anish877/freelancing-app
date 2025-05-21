"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, MessageSquare, Users, Briefcase, Settings, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DashboardSidebar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(true)

  return (
    <div className="w-64 border-r h-full flex flex-col bg-background">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full pl-8" />
        </div>
      </div>

      <nav className="flex-1 overflow-auto p-2">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/messages">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/freelancers">
              <Users className="mr-2 h-4 w-4" />
              Freelancers
            </Link>
          </Button>
        </div>

        <div className="mt-6">
          <button
            className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          >
            <span>Projects</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
          </button>

          {isProjectsOpen && (
            <div className="mt-1 pl-2 space-y-1">
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/dashboard/projects/website-redesign">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Website Redesign
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm" asChild>
                <Link href="/dashboard/projects/mobile-app">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Mobile App
                </Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  )
}
