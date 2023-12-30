type Props = {
  params: {
    id: string
  }
}

export default function UserDetailPage({ params: { id } }: Props) {
  return <div>{id}</div>
}
