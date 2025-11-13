import { Picture } from '@/components/Picture'

export default function OverPage() {
  return (
    <>
      <section aria-label="Hero over" className="relative h-[30vh] min-h-[280px] w-full">
        <Picture imageFilename="foto_over.jpg" altOverride="Over Decretorium" className="absolute inset-0" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/70 via-primary-700/30 to-transparent" aria-hidden />
        <div className="container relative z-10 flex h-full items-end pb-8">
          <h1 className="text-white">Over Decretorium</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="max-w-3xl text-gray-700 leading-relaxed mb-8">
            Bij Decretorium Security &amp; Law draait alles om veiligheid, professionaliteit en vertrouwen. Wij beschermen mensen, bedrijven en
            eigendommen met maatwerkoplossingen, proactieve beveiliging en een mensgerichte benadering.
          </p>

          {/* Beeldband Over */}
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-lg">
            <Picture imageFilename="ik.jpeg" altOverride="Michael, oprichter van Decretorium" className="absolute inset-0" sizes="100vw" />
            <div className="absolute inset-0 bg-black/10" aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Wie wij zijn</h2>
              <p className="text-gray-700 leading-relaxed">
                Decretorium is een jong en ambitieus bedrijf, opgericht door Michael. Zijn loopbaan startte als portier in het Rotterdamse
                nachtleven, waarna hij brede ervaring opdeed binnen diverse takken van de beveiliging. Met een achtergrond in Social Work
                benadert hij beveiliging vriendelijk, daadkrachtig en respectvol.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Beveiligingsdiensten</h2>
              <p className="text-gray-700 leading-relaxed">
                We bieden onder meer objectbeveiliging, winkel- en terreinbeveiliging, mobiele surveillance, en de inzet van brandwachten en
                chauffeursdiensten. Wij geloven in voorkomen in plaats van reageren: onze beveiligers signaleren risico’s vroegtijdig, handelen
                adequaat en combineren alertheid met gastvrijheid.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Juridisch advies</h2>
              <p className="text-gray-700 leading-relaxed">
                Naast beveiliging geven we juridisch advies rondom veiligheid en bedrijfsvoering. Denk aan het op orde brengen van procedures, het
                beoordelen van afspraken en documentatie, en het meedenken over risico’s en verantwoordelijkheden. Kijk voor meer op onze
                juridische pagina.
              </p>
            </article>

            <article className="card p-6 md:p-8">
              <h2 className="mb-2">Onze aanpak</h2>
              <p className="text-gray-700 leading-relaxed">
                Onze medewerkers zijn opgeleid, gecertificeerd en hebben een hands-on mentaliteit: betrouwbaar, discreet en professioneel. Elke
                situatie is uniek. Samen ontwikkelen we oplossingen op maat die passen bij uw organisatie, omgeving en veiligheidsdoelen.
              </p>
            </article>

            <article className="card p-6 md:p-8 md:col-span-2">
              <p className="font-semibold text-gray-900">Decretorium Security &amp; Law – veiligheid met aandacht, vertrouwen en daadkracht.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
