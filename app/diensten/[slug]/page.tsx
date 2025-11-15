import { notFound } from 'next/navigation'
import { getServiceBySlug, renderMarkdown } from '@/lib/content'
import { Picture } from '@/components/Picture'
import Link from 'next/link'

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return notFound()
  const html = await renderMarkdown(service.content)

  return (
    <>
      <section aria-label={`Hero ${service.title}`} className="relative h-[35vh] min-h-[300px] w-full">
        <Picture imageFilename={service.image || `foto_${service.slug}.jpg`} altOverride={service.title} className="absolute inset-0" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
        <div className="container relative z-10 flex h-full items-end pb-8">
          <h1 className="text-white capitalize">{service.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container prose prose-invert max-w-3xl prose-headings:mt-6 md:prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-white prose-a:text-accent-400">
          <p className="text-lg text-white">{service.intro}</p>
          <article className="mt-6" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="mt-8">
            <Link className="btn" href="/contact">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
