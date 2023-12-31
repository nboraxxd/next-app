import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default function UserDetailPage({ params: { id } }: Props) {
  if (+id > 10) notFound()

  return <div>{id}</div>
}
