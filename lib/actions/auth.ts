'use server'

import { cookies } from 'next/headers'

export async function setCookie(name: string, value: string, options?: { path?: string; maxAge?: number; domain?: string; secure?: boolean }) {
  const cookieStore = await cookies()
  return cookieStore.set({
    name,
    value,
    ...options
  })
}

export async function removeCookie(name: string, options?: { path?: string; domain?: string; secure?: boolean }) {
  const cookieStore = await cookies()
  return cookieStore.set({
    name,
    value: '',
    maxAge: 0,
    ...options
  })
}

export async function getCookie(name: string) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(name)
  return cookie?.value ?? ''
} 