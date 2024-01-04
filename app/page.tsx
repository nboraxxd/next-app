import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { ProductCart } from '@/components/ProductCart'
import _coffee from '@/public/images/coffee.jpg'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className='relative h-screen'>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
      <Image
        priority
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="object-cover"
      />
    </main>
  )
}
