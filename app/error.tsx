'use client'

type Props = {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: Props) {
  console.log('🔥 ~ ErrorPage ~ error:', error)
  return <>
    <div>An unexpected error has occurred.</div>
    <button className="btn btn-outline" onClick={() => reset()}>Retry</button>
  </>
}
