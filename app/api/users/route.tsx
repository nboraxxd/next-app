import { NextRequest, NextResponse } from 'next/server'

export function GET(_request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ])
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 })

  return NextResponse.json({ id: 1, name: body.name }, {status: 201})
}
