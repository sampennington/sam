import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="min-h-screen px-8 md:px-16 lg:px-32 py-20 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Sam Pennington',
            },
          }),
        }}
      />
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
          {post.metadata.title}
        </h1>
        <p className="text-lg text-gray-500">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <p className="text-xl text-black mt-4">
          {post.metadata.summary}
        </p>
      </div>
      <article className="prose prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black
        prose-h1:text-black prose-h2:text-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-black prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-black prose-p:leading-relaxed
        prose-li:text-black prose-ul:text-black prose-ol:text-black
        prose-strong:text-black prose-strong:font-bold
        prose-em:text-black
        prose-code:bg-gray-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-black
        prose-pre:bg-gray-900 prose-pre:text-gray-100
        prose-a:text-black prose-a:underline hover:prose-a:text-gray-700">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
