import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { getMessages } from '@/lib/i18n/server'

function PostCard({ post, locale }: { post: Post; locale: LocaleType }) {
  const Content = getMDXComponent(post.body.code)
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`${locale === 'en' ? '' : `/${locale}`}/blog${post.url}`}
          className="text-lg font-semibold"
        >
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

export default async function BlogPage({
  params: { locale },
}: {
  params: { locale: LocaleType }
}) {
  const messages = await getMessages(locale)
  const posts = allPosts
    .filter((post) => post.locale === locale)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      <h1 className="text-3xl font-semibold">{messages.Nav.blog}</h1>
      <section className="mt-10">
        {posts.map((item) => (
          <PostCard post={item} locale={locale} key={item._id} />
        ))}
      </section>
    </>
  )
}
