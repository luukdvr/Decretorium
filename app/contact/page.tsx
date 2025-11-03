import { Picture } from '@/components/Picture'

export default function ContactPage() {
  return (
    <section className="section gradient-hero">
      <div className="container">
        <h1 className="mb-4 md:mb-6">Contact</h1>
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-white/15 bg-white/5 p-4 md:p-6 shadow-sm">
            <h2 className="mb-2 text-white">Contact beveiliging</h2>
            <p className="text-white/90 text-sm md:text-base">Michael</p>
            <p className="mt-1 text-sm md:text-base">
              <a className="hover:underline text-white" href="tel:+31647652247" aria-label="Bel Michael op 06 47 65 22 47">06 47 65 22 47</a>
            </p>
            <p className="mt-1 text-sm md:text-base">
              <a className="hover:underline text-white" href="mailto:info@decretorium.nl">info@decretorium.nl</a>
            </p>
          </article>

          <article className="rounded-lg border border-white/15 bg-white/5 p-4 md:p-6 shadow-sm">
            <h2 className="mb-2 text-white">Contact juridisch</h2>
            <p className="text-white/90 text-sm md:text-base">Suviënka</p>
            <p className="mt-1 text-sm md:text-base">
              <a className="hover:underline text-white" href="tel:+31645082682" aria-label="Bel Suviënka op 06 45 08 26 82">06 45 08 26 82</a>
            </p>
            <p className="mt-1 text-sm md:text-base">
              <a className="hover:underline text-white" href="mailto:juridisch@decretorium.nl">juridisch@decretorium.nl</a>
            </p>
          </article>
        </div>

        <p className="mt-4 md:mt-6 text-xs md:text-sm text-white/80">Bellen of mailen werkt het snelst. We reageren doorgaans dezelfde werkdag.</p>

        {/* Foto onder de toelichtende tekst */}
        <div className="relative mt-4 md:mt-6 aspect-[16/9] md:aspect-[16/7] overflow-hidden rounded-lg">
          <Picture imageFilename="foto_beveiliging_op_aanvraag.png" altOverride="Contact" className="absolute inset-0" sizes="100vw" />
          <div className="absolute inset-0 bg-black/10" aria-hidden />
        </div>
      </div>
      
    </section>
  )
}
