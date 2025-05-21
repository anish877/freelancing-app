import { formatDistanceToNow } from "date-fns"

interface Message {
  id: string
  sender: string
  content: string
  roomId: string
  createdAt: Date
}

interface ChatMessageProps {
  message: Message
  isOwn: boolean
}

export function ChatMessage({ message, isOwn }: ChatMessageProps) {
  // Format the timestamp
  const timestamp = typeof message.createdAt === "string" ? new Date(message.createdAt) : message.createdAt

  const formattedTime = formatDistanceToNow(timestamp, { addSuffix: true })

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isOwn ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        }`}
      >
        <p className="break-words">{message.content}</p>
        <p className={`text-xs mt-1 ${isOwn ? "text-primary-foreground/70" : "text-secondary-foreground/70"}`}>
          {formattedTime}
        </p>
      </div>
    </div>
  )
}
