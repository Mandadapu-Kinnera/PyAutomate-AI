import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async get(name: string) {
          const cookieStore = await cookies()
          return cookieStore.get(name)?.value ?? ''
        },
        async set(name: string, value: string, options?: { path?: string; maxAge?: number; domain?: string; secure?: boolean }) {
          await fetch('/api/cookie', {
            method: 'POST',
            body: JSON.stringify({ name, value, options }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
        },
        async remove(name: string, options?: { path?: string; domain?: string; secure?: boolean }) {
          await fetch('/api/cookie', {
            method: 'DELETE',
            body: JSON.stringify({ name }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      }
    }
  )
}
