import Link from 'next/link'
import { UserTable } from '@/app/users/UserTable'

type Props = {
  searchParams: {
    sortOrder: string
  }
}

export default function UsersPage({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1 className="text-xl font-semibold">Users</h1>
      <Link href="/users/new" className='btn btn-primary'>New User</Link>
      <UserTable sortOrder={sortOrder} />
    </>
  )
}
