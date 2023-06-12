import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { useLocale } from 'next-intl'

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code)

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={`/blog/${post.url}`} className="text-lg font-semibold">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <Content />
    </div>
  )
}

export default function BlogPage() {
  const locale = useLocale()
  const posts = allPosts
    .filter((post) => post.locale === locale)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div>
      <h1 className="text-3xl font-semibold">Blog</h1>
      <section className="mt-10">
        {posts.map((item) => (
          <PostCard {...item} key={item._id} />
        ))}
      </section>
    </div>
  )
}
