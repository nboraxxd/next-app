'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function ProductsPage() {
  const [visible, setVisible] = useState(false)

  return (
    <main>
      <h1>This is the product page</h1>
      <button className="btn btn-secondary" onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      {visible && <HeavyComponent />}
    </main>
  )
}
