import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ProductCart } from "@/components/ProductCart";


export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  )
}
