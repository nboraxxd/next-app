'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const { status, data: session } = useSession()

  return (
    <nav className="flex space-x-2.5">
      <Link href="/" className="px-5 py-2.5">
        Next.js
      </Link>
      <Link href="/users" className="px-5 py-2.5 font-poppins">
        Users
      </Link>
      <Link href="/admin" className="px-5 py-2.5">
        Admin
      </Link>

      {status === 'loading' && <div className="px-5 py-2.5">Loading...</div>}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin" className="px-5 py-2.5">
          Sign in
        </Link>
      )}
      {status === 'authenticated' && (
        <div className="px-5 py-2.5">
          {session.user!.name}
          <Link href="api/auth/signout" className="ml-3">
            Sign out
          </Link>
        </div>
      )}
    </nav>
  )
}
