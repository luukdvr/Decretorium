import { Picture } from '@/components/Picture'
import Link from 'next/link'

export default function JuridischOverPage() {
  return (
    <>
      <section aria-label="Hero over juridisch" className="relative h-[30vh] min-h-[280px] w-full">
        <Picture imageFilename="foto_juridisch.jpeg" altOverride="Over Decretorium Juridisch" className="absolute inset-0" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/70 via-primary-700/30 to-transparent" aria-hidden />
        <div className="container relative z-10 flex h-full items-end pb-8">
          <h1 className="text-white">Over Decretorium Security &amp; Law</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h4 className="max-w-3xl text-white leading-relaxed mb-8">
            Welkom bij Decretorium Security &amp; Law – jouw partner in juridische duidelijkheid. Wij helpen particulieren en ondernemers met
            heldere, praktische oplossingen voor uiteenlopende juridische vraagstukken.
          </h4>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="card p-6 md:p-8">
              <h2 className="mb-2 text-white">Wie wij zijn</h2>
              <p className="text-white leading-relaxed">
                Bij Decretorium Security &amp; Law combineren we jarenlange ervaring in zowel beveiliging als juridisch advies. 
                Met kennis van zaken en persoonlijke betrokkenheid behartigen we jouw belangen met professionaliteit en toewijding.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2 text-white">Onze expertise</h2>
              <p className="text-white leading-relaxed">
                We helpen bij arbeidsrecht, huurrecht, consumentenrecht, contractenrecht en meer. Van het opstellen van contracten tot 
                begeleiding bij conflicten en procedures – we staan voor je klaar met helder en praktisch advies.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2 text-white">Onze aanpak</h2>
              <p className="text-white leading-relaxed">
                Goed advies begint met luisteren. We begrijpen jouw situatie, denken juridisch én strategisch mee en geven duidelijke, 
                toepasbare oplossingen. Geen moeilijke woorden of omwegen – wél helderheid en voorspelbaarheid.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2 text-white">Waarom Decretorium?</h2>
              <p className="text-white leading-relaxed">
                Persoonlijke en transparante begeleiding, duidelijke communicatie zonder juridisch vakjargon, oplossingsgericht en efficiënt, 
                en eerlijk over kansen, risico's en kosten. Juridische kwesties kunnen stressvol zijn, maar je staat er niet alleen voor.
              </p>
            </article>

            <article className="card p-6 md:p-8 md:col-span-2">
              <p className="font-semibold text-white mb-4">Decretorium Security &amp; Law – juridische duidelijkheid met persoonlijke aandacht.</p>
              <Link href="/contact" className="btn">Neem contact op</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
