import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'

// eslint-disable-next-line @typescript-eslint/require-await
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title }
}

type PostParams = { locale: LocaleType; slug: string }
const PostLayout = ({ params: { locale, slug } }: { params: PostParams }) => {
  const post = allPosts
    .filter((post) => post.locale === locale)
    .find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="md:prose-lg prose dark:prose-invert mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1>{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
        <Content />
    </article>
  )
}

export default PostLayout
