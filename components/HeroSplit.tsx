import Link from 'next/link'
import { Picture } from '@/components/Picture'

export function HeroSplit() {
  return (
    <section className="section gradient-hero">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Beveiliging */}
          <article className="card group focus-within:ring-2 focus-within:ring-primary/60">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Picture imageFilename="foto_beveiliging_op_aanvraag.png" altOverride="Beveiliging" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" aria-hidden />
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-gray-900">Beveiliging</h2>
              <p className="mb-6 text-gray-700">Professionele object-, winkel- en evenementbeveiliging. Zichtbaar, proactief en klantvriendelijk.</p>
              <Link href="/beveiliging" className="btn" aria-label="Ga naar Beveiliging">Ontdek Beveiliging</Link>
            </div>
          </article>

          {/* Juridisch */}
          <article className="card group focus-within:ring-2 focus-within:ring-primary/60">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Picture imageFilename="foto_juridisch.jpeg" altOverride="Juridisch" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" aria-hidden />
            </div>
            <div className="p-6">
              <h2 className="mb-3 text-gray-900">Juridisch</h2>
              <p className="mb-6 text-gray-700">Praktisch juridisch advies, contracten en procedures. Duidelijk, toepasbaar en snel.</p>
              <Link href="/juridisch" className="btn" aria-label="Ga naar Juridisch">Ontdek Juridisch</Link>
            </div>
          </article>
        </div>
        {/* Tekst onder de twee hero vakken */}
        <p className="mt-6 text-center text-white/80">
          We adviseren graag welk traject het beste past bij uw situatie. Bekijk onze <Link href="/diensten" className="underline">diensten </Link>
          
          of <Link href="/contact" className="underline">neem direct contact op</Link>.
        </p>
      </div>
    </section>
  )
}
