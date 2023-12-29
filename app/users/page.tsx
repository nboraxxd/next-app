import Link from 'next/link'

type User = {
  id: number
  name: string
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } })
  const users: User[] = await res.json()

  return (
    <>
      <Link href="/">Home</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-xl font-semibold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}
