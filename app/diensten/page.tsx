import Link from 'next/link'
import { getServices } from '@/lib/content'
import { ServiceCard } from '@/components/ServiceCard'
 

export default function DienstenPage() {
  const services = getServices()

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-4 md:mb-6">Diensten</h1>
        <div className="mb-8 md:mb-10">
          <h2 className="mb-2">Beveiliging</h2>
          <p className="mb-4 md:mb-6 text-gray-700 text-sm md:text-base">Overzicht van onze beveiligingsdiensten.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {services.map((s) => (<ServiceCard key={s.slug} service={s} />))}
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="mb-2">Juridisch</h2>
          <p className="text-gray-700 max-w-3xl text-sm md:text-base">
            Voor juridische vragen bieden wij helder en praktisch advies: van het opstellen en beoordelen van contracten tot begeleiding bij
            arbeids- en bestuursrechtelijke kwesties, procedures en geschillen. Duidelijke uitleg, snelle terugkoppeling en maatwerk voor
            particulieren en ondernemers.
          </p>
          <div className="mt-4">
            <Link className="btn-outline" href="/juridisch">Lees meer over Juridisch</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
