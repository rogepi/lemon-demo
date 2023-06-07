import * as React from 'react'

export type BaseCardProps = {
  children?: React.ReactNode
  className?: string
  aspect?: number
}

export function BaseCard({ children, className }: BaseCardProps) {
  return (
    <div
      className={`h-full w-full rounded-3xl bg-gray-50 p-6 dark:bg-zinc-800 ${
        className || ''
      }`}
    >
      {children}
    </div>
  )
}
