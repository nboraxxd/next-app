import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/users/schema'

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

  const validation = schema.safeParse(body)

  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ id, name: body.name })
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch user from database
  // If not found, return 404 error
  // Else delete the user
  // Return 204 status code
  if (id > 10) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ message: 'Delete user success' }, { status: 200 })
}
