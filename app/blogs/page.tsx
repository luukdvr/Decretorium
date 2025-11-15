import Link from 'next/link'
import { getBlogs } from '@/lib/content'
import { BlogCard } from '@/components/BlogCard'

export default function BlogsPage() {
  const blogs = getBlogs()
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-6 text-white">Blogs</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (<BlogCard key={b.slug} blog={b} />))}
        </div>
      </div>
    </section>
  )
}
