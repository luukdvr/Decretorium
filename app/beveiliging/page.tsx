import Link from 'next/link'
import { Picture } from '@/components/Picture'
import { getServices, getBlogs } from '@/lib/content'
import { ServiceCard } from '@/components/ServiceCard'
import { BlogCard } from '@/components/BlogCard'

export const dynamic = 'force-static'

export default function BeveiligingPage() {
  const services = getServices()
  const blogs = getBlogs('beveiliging').slice(0, 3)

  return (
    <>
      <section aria-label="Hero beveiliging" className="relative h-[40vh] min-h-[320px] w-full">
        <Picture imageFilename="foto_beveiliging_op_aanvraag.png" altOverride="Beveiliging" className="absolute inset-0" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/70 via-primary-700/30 to-transparent" aria-hidden />
        <div className="container relative z-10 flex h-full items-end pb-8">
          <h1 className="text-white">Beveiliging</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="mb-4">Onze beveiliging</h2>
          <p className="max-w-3xl text-gray-700">
            Wij beveiligen objecten, winkels, evenementen en projecten met zichtbare en proactieve inzet. Onze beveiligers handelen klantvriendelijk,
            communiceren duidelijk en werken nauw samen met uw team en partners. Zo verminderen we risico’s en verhogen we veiligheid en beleving.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="card p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2">MVO</h2>
              <p className="max-w-3xl text-gray-700">
                We handelen maatschappelijk verantwoord: respectvol naar mensen en omgeving, aandacht voor inclusie en opleiding, en oog voor duurzame
                keuzes in middelen en planning. Veiligheid gaat bij ons hand in hand met zorg voor mens en maatschappij.
              </p>
            </div>
            <Link href="/mvo" className="btn self-start md:self-auto" aria-label="Lees meer over MVO">Meer info</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mb-6 flex items-end justify-between">
            <h2>Diensten</h2>
            <Link href="/diensten" className="btn-outline">Alle diensten</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (<ServiceCard key={s.slug} service={s} />))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="mb-6 flex items-end justify-between">
            <h2>Laatste blogs</h2>
            <Link href="/blogs" className="btn-outline">Alle blogs</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (<BlogCard key={b.slug} blog={b} />))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card p-8 text-center">
            <h2 className="mb-4">Klaar om samen te werken?</h2>
            <p className="mb-6 text-gray-700">Neem contact op voor een vrijblijvende kennismaking.</p>
            <Link href="/contact" className="btn">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
