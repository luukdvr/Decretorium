import { notFound } from 'next/navigation'
import { getBlogBySlug, renderMarkdown } from '@/lib/content'

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return notFound()
  const html = await renderMarkdown(blog.content)

  return (
    <section className="section">
      <div className="container prose prose-invert max-w-3xl prose-headings:mt-6 md:prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white prose-a:text-accent-400">
        <h1 className="mb-2 text-white">{blog.title}</h1>
        <p className="text-sm text-white/70">{new Date(blog.date).toLocaleDateString('nl-NL')}</p>
        <article className="mt-4" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  )
}
