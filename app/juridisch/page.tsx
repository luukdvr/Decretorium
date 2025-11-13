import Link from 'next/link'
import { Picture } from '@/components/Picture'
import { getBlogs } from '@/lib/content'
import { BlogCard } from '@/components/BlogCard'

export const dynamic = 'force-static'

export default function JuridischPage() {
  const blogs = getBlogs('juridisch').slice(0, 3)

  return (
    <>
      <section aria-label="Hero juridisch" className="relative h-[35vh] min-h-[280px] md:h-[40vh] md:min-h-[320px] w-full">
        <Picture imageFilename="foto_juridisch.jpg" altOverride="Juridisch" className="absolute inset-0" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/70 via-primary-700/30 to-transparent" aria-hidden />
        <div className="container relative z-10 flex h-full items-end pb-6 md:pb-8">
          <h1 className="text-white">Juridisch</h1>
        </div>
      </section>

      {/* Intro as cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Over ons</h2>
              <p className="text-gray-700 leading-relaxed">
                Welkom bij Decretorium Security &amp; Law – jouw partner in juridische duidelijkheid. Wij helpen particulieren en ondernemers met
                heldere, praktische oplossingen voor uiteenlopende juridische vraagstukken. Met jaren ervaring behartigen we jouw belangen met
                kennis, ervaring en persoonlijke betrokkenheid.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Onze aanpak</h2>
              <p className="text-gray-700 leading-relaxed">
                Goed advies begint met luisteren. We begrijpen jouw situatie, denken juridisch én strategisch mee en geven duidelijke, toepasbare
                oplossingen. Geen moeilijke woorden of omwegen – wél helderheid en voorspelbaarheid.
              </p>
            </article>

            <article className="card p-6 md:p-8 md:col-span-2">
              <h2 className="mb-2">Waarom kiezen voor Decretorium Security &amp; Law?</h2>
              <ul className="list-disc pl-5 text-gray-800">
                <li>Persoonlijke en transparante begeleiding</li>
                <li>Duidelijke communicatie, zonder juridisch vakjargon</li>
                <li>Oplossingsgericht en efficiënt</li>
                <li>Eerlijk over kansen, risico’s en kosten</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Juridische kwesties kunnen stressvol zijn, maar je staat er niet alleen voor. Wij helpen je om weer overzicht en grip te krijgen –
                eerlijk en begrijpelijk.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="card p-6 md:p-8 max-w-3xl">
            <h2 className="mb-2">Onze diensten</h2>
            <div className="text-gray-700 leading-relaxed">
              <p>
                Bij Decretorium Security &amp; Law begrijpen we dat juridische kwesties vaak meer zijn dan alleen papierwerk of regels. Achter elk
                dossier zit jouw verhaal. Daarom kijken we verder dan standaardoplossingen en bieden we ondersteuning die echt past bij jouw situatie.
              </p>
              <p className="mt-3">
                Of je nu te maken hebt met een arbeidsconflict, een ingewikkeld contract, een bestuursrechtelijke beslissing of gewoon behoefte hebt
                aan helder juridisch advies — wij zorgen voor duidelijkheid en rust.
              </p>
              <p className="mt-3">
                We helpen bij het opstellen, beoordelen en aanpassen van overeenkomsten, begeleiden bij conflicten en geschillen, en geven praktisch
                advies om problemen te voorkomen voordat ze ontstaan.
              </p>
              <p className="mt-3">
                Wat ons onderscheidt, is onze persoonlijke aanpak én het sterke netwerk waar we op kunnen bouwen. We werken samen met een vaste kring
                van advocaten, collega-juristen en andere specialisten, zodat je altijd kunt rekenen op de juiste expertise. Zo kunnen we – waar nodig
                – snel schakelen en jou de best mogelijke ondersteuning bieden.
              </p>
              <p className="mt-3">
                Bovenal maken we het recht begrijpelijk en werkbaar. Geen ingewikkelde taal of afstandelijke aanpak – maar eerlijke, praktische
                oplossingen waar je echt iets aan hebt.
              </p>
            </div>
          </article>
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
            <h2 className="mb-4">Contact</h2>
            <p className="mb-6 text-gray-700">Stel uw juridische vraag, we helpen u graag.</p>
            <Link href="/contact" className="btn">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
