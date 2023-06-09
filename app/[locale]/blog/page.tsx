import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <div>
      <h1 className="text-3xl font-semibold">Blog</h1>
      {posts.map((item) => (
        <Link href={`/blog/${item.url}`} key={item._id}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}
