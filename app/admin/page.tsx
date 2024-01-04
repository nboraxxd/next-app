'use client'

export default function AdminPage() {
  async function handleArrange() {
    const _ = (await import('lodash')).default

    const arr = [{ name: 'a' }, { name: 'd' }, { name: 'b' }, { name: 'c' }]
    console.log(_.orderBy(arr, ['name']))
  }

  return (
    <main>
      <h1>This is the admin page</h1>
      <button className="btn btn-primary" onClick={handleArrange}>
        Arrange
      </button>
    </main>
  )
}
