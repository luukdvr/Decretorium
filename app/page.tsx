import { HeroSplit } from '@/components/HeroSplit'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <section className="section">
        <div className="container">
          <h2 className="mb-4">Welkom bij Decretorium</h2>
          <p className="text-gray-700 max-w-3xl text-sm md:text-base">
            Decretorium is uw partner voor professionele beveiliging en helder juridisch advies. Van object- en winkelbeveiliging tot mobiele
            surveillance, brandwachten, verkeersregelaars en chauffeursdiensten: ons team werkt zichtbaar, proactief en klantvriendelijk zodat u
            met een gerust hart kunt ondernemen en organiseren.
          </p>
          <p className="text-gray-700 max-w-3xl mt-3 text-sm md:text-base">
            Naast fysieke inzet denken we juridisch met u mee. We helpen met duidelijke contracten, procedures en advies bij incidenten, zodat u
            aantoonbaar voldoet aan wet- en regelgeving. Eén aanspreekpunt, korte lijnen en waar nodig 24/7 inzetbaar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/diensten" className="btn" aria-label="Bekijk onze diensten">Ontdek onze diensten</Link>
            <Link href="/contact" className="btn" aria-label="Neem contact op">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
