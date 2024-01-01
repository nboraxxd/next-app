import { NextRequest, NextResponse } from 'next/server'
import schema from '@/app/api/users/schema'
import prisma from '@/prisma/client'

type Props = {
  params: { id: string }
}

export async function GET(_request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({ where: { id: +id } })

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  // Validate the request body
  // If invalid, return 400 error
  // Else fetch user with the given id
  // If doesn't exist, return 404 error
  // Else update the user
  // Return the updated user
  const body: { name: string; email: string } = await request.json()

  const validation = schema.safeParse(body)
  if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({ where: { id: +id } })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { name: body.name, email: body.email },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({ error: 'Update user failed' }, { status: 500 })
  }

}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // Fetch user from database
  // If not found, return 404 error
  // Else delete the user
  // Return 204 status code
  const user = await prisma.user.findUnique({ where: { id: +id } })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  await prisma.user.delete({ where: { id: user.id } })

  return NextResponse.json({ message: 'Delete user success' }, { status: 200 })
}
