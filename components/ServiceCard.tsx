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
      <div className="p-4 md:p-6">
        <h3 className="mb-2 capitalize text-white">{service.title}</h3>
        <p className="mb-3 md:mb-4 text-white text-sm md:text-base">{service.intro}</p>
        <Link href={`/diensten/${service.slug}`} className="btn w-full sm:w-auto inline-block text-center" aria-label={`Lees meer over ${service.title}`}>
          Lees meer
        </Link>
      </div>
    </article>
  )
}
