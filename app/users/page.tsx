import Link from 'next/link'

type User = {
  id: number
  name: string
  email: string
}

export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } })
  const users: User[] = await res.json()

  return (
    <>
      <Link href="/">Home</Link>
      <h1 className="text-xl font-semibold">Users</h1>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
