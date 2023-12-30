import Link from 'next/link'
import { UserTable } from '@/app/users/UserTable'

export default function UsersPage() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className="text-xl font-semibold">Users</h1>
      <UserTable />
    </>
  )
}
