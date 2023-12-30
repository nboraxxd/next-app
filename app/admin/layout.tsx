import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className="flex">
      <div className="bg-slate-200 p-5">Sidebar</div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
