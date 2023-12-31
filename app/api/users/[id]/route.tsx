import { NextRequest, NextResponse } from 'next/server'

type Props = {
  params: { id: number }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  // Fetch data from a database
  // If not found, return 404 error
  // Else return the data
  if (id > 10) return NextResponse.json({error: 'User not found'}, {status: 404})

  return NextResponse.json({id, name: 'John Doe'})

}
