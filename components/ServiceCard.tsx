import Link from 'next/link'
import { Picture } from '@/components/Picture'
import type { Service } from '@/lib/content'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-[16/10]">
        {service.image ? (
          <Picture imageFilename={service.image} altOverride={service.title} />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 capitalize">{service.title}</h3>
        <p className="mb-4 text-gray-700">{service.intro}</p>
        <Link href={`/diensten/${service.slug}`} className="btn" aria-label={`Lees meer over ${service.title}`}>
          Lees meer
        </Link>
      </div>
    </article>
  )
}
