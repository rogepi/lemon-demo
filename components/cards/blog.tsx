import Link from 'next/link'

import { IconOutWard } from '../icons'
import { BaseCard, type BaseCardProps } from './base'

export type BlogCardProps = BaseCardProps & {
  blog: CardBlogType
}

type CardBlogType = {
  title: string
  content: string
  date: string
  link: string
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <BaseCard className="flex flex-col justify-between">
      <div>
        <header className="font-extrabold">{blog.title}</header>
        <div className="text-sm">{blog.content}</div>
      </div>
      <footer className="flex items-center justify-between">
        <Link href={blog.link}>
          <button className="flex items-center justify-center rounded-full border p-1 px-2 text-xs font-semibold">
            <IconOutWard />
            Read more
          </button>
        </Link>
        <div className="text-xs text-gray-500">{blog.date}</div>
      </footer>
    </BaseCard>
  )
}
