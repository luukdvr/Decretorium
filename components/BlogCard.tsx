import Link from 'next/link'
import type { Blog } from '@/lib/content'

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="card overflow-hidden">
      <div className="p-4 md:p-6">
        <h3 className="mb-2">{blog.title}</h3>
        <p className="mb-2 text-xs md:text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('nl-NL')}</p>
        <p className="mb-3 md:mb-4 text-gray-700 text-sm md:text-base">{blog.excerpt}</p>
        <Link href={`/blogs/${blog.slug}`} className="btn w-full sm:w-auto inline-block text-center" aria-label={`Lees blog: ${blog.title}`}>Lees blog</Link>
      </div>
    </article>
  )
}
