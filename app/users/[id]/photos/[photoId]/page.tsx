type Props = {
  params: {
    photoId: string
  }
}

export default function PhotoDetailPage({ params: { photoId } }: Props) {
  return <div>{photoId}</div>
}
