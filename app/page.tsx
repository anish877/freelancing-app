import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, BarChart2, ImageIcon, Code, Lightbulb, FileText, MoreHorizontal } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            futurejob
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Help">
              <span className="rounded-full border w-6 h-6 flex items-center justify-center">?</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-medium mb-12">
            Who do you want to hire or what task needs to be done?
          </h1>

          <div className="relative mb-8">
            <Input type="text" placeholder="Ask anything" className="pr-12 py-6 text-lg shadow-lg rounded-full" />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
              aria-label="Search"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" className="rounded-full">
              <BarChart2 className="mr-2 h-4 w-4" />
              Analyze data
            </Button>
            <Button variant="outline" className="rounded-full">
              <ImageIcon className="mr-2 h-4 w-4" />
              Analyze images
            </Button>
            <Button variant="outline" className="rounded-full">
              <Code className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button variant="outline" className="rounded-full">
              <Lightbulb className="mr-2 h-4 w-4" />
              Make a plan
            </Button>
            <Button variant="outline" className="rounded-full">
              <FileText className="mr-2 h-4 w-4" />
              Summarize text
            </Button>
            <Button variant="outline" className="rounded-full">
              <MoreHorizontal className="mr-2 h-4 w-4" />
              More
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
