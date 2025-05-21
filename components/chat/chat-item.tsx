import Link from "next/link"
import Image from "next/image"

interface ChatItemProps {
  chat: {
    id: string
    name: string
    role: string
    lastMessage: string
    timestamp: string
    unread: number
    avatar: string
  }
}

export function ChatItem({ chat }: ChatItemProps) {
  return (
    <Link href={`/dashboard/chat/${chat.id}`} className="block p-3 hover:bg-muted transition-colors border-b">
      <div className="flex items-start gap-3">
        <div className="relative">
          <Image
            src={chat.avatar || "/placeholder.svg"}
            alt={chat.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          {chat.unread > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {chat.unread}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium truncate">{chat.name}</h3>
            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.timestamp}</span>
          </div>

          <p className="text-xs text-muted-foreground">{chat.role}</p>
          <p className="text-sm truncate">{chat.lastMessage}</p>
        </div>
      </div>
    </Link>
  )
}
