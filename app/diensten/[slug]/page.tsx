import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/content'
import { Picture } from '@/components/Picture'
import Link from 'next/link'

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return notFound()

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
        <div className="container prose max-w-3xl prose-headings:mt-0">
          <p className="text-lg text-gray-700">{service.intro}</p>
          <article className="mt-6 whitespace-pre-wrap text-gray-800">{service.content}</article>
          <div className="mt-8">
            <Link className="btn" href="/contact">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
