import Link from 'next/link'
import { getBlogs } from '@/lib/content'
import { BlogCard } from '@/components/BlogCard'

export default function JuridischBlogsPage() {
  const blogs = getBlogs('juridisch')
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-6 text-white">Blogs – Juridisch</h1>
        {blogs.length === 0 ? (
          <p className="text-white/80">Er zijn nog geen juridische blogs geplaatst.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (<BlogCard key={b.slug} blog={b} />))}
          </div>
        )}
        <div className="mt-8">
          <Link href="/juridisch" className="btn-outline">Terug naar Juridisch</Link>
        </div>
      </div>
    </section>
  )
}
