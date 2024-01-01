import { NextRequest, NextResponse } from 'next/server'

type Props = {
  params: { id: number }
}

export function GET(_request: NextRequest, { params: { id } }: Props) {
  // Fetch data from a database
  // If not found, return 404 error
  // Else return the data
  if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ id, name: 'John Doe' })
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  // If invalid, return 400 error
  // Else fetch user with the given id
  // If doesn't exist, return 404 error
  // Else update the user
  // Return the updated user
  const body: { name: string } = await request.json()
  if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 })

  if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ id, name: body.name })
}
