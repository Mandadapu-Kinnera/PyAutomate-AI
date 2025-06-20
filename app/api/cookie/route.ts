import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, value, options } = await request.json()
  
  if (!name) {
    return NextResponse.json({ error: 'Cookie name is required' }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name,
    value,
    ...options
  })
  
  return response
}

export async function DELETE(request: Request) {
  const { name } = await request.json()
  
  if (!name) {
    return NextResponse.json({ error: 'Cookie name is required' }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name,
    value: '',
    maxAge: 0
  })
  
  return response
} 