import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex space-x-2.5">
      <Link href="/" className="px-5 py-2.5">Next.js</Link>
      <Link href="/users" className="px-5 py-2.5">Users</Link>
      <Link href="/admin" className="px-5 py-2.5">Admin</Link>

      <Link href="/api/auth/signin" className="px-5 py-2.5">Sign in</Link>
    </nav>
  )
}
