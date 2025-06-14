"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import AuthApp from "@/components/auth/AuthApp"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Get the mode from URL params (login or signup)
  const mode = searchParams.get('mode') || 'signup'
  
  return <AuthApp initialMode={mode} />

}