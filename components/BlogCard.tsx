import Link from 'next/link'
import type { Blog } from '@/lib/content'

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="card overflow-hidden">
      <div className="p-6">
        <h3 className="mb-2">{blog.title}</h3>
        <p className="mb-2 text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('nl-NL')}</p>
        <p className="mb-4 text-gray-700">{blog.excerpt}</p>
        <Link href={`/blogs/${blog.slug}`} className="btn" aria-label={`Lees blog: ${blog.title}`}>Lees blog</Link>
      </div>
    </article>
  )
}
