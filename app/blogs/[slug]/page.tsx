import { notFound } from 'next/navigation'
import { getBlogBySlug } from '@/lib/content'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return notFound()

  return (
    <section className="section">
      <div className="container prose max-w-3xl prose-headings:mt-0">
        <h1 className="mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('nl-NL')}</p>
        <article className="mt-4 whitespace-pre-wrap text-gray-800">{blog.content}</article>
      </div>
    </section>
  )
}
