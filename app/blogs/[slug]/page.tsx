import { notFound } from 'next/navigation'
import { getBlogBySlug, renderMarkdown } from '@/lib/content'

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return notFound()
  const html = await renderMarkdown(blog.content)

  return (
    <section className="section">
      <div className="container prose max-w-3xl prose-headings:mt-6 md:prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5">
        <h1 className="mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('nl-NL')}</p>
        <article className="mt-4 text-gray-800" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}
