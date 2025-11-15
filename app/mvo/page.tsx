import Link from 'next/link'
import { Picture } from '@/components/Picture'

export const metadata = {
  title: 'MVO Beveiligingsbedrijf | Duurzaam en Sociaal Ondernemen – Decretorium',
  description:
    'Decretorium Beveiliging staat voor maatschappelijk verantwoord ondernemen. Duurzaam, eerlijk en betrokken bij mens en milieu. Veiligheid met verantwoordelijkheid.',
}

export default function MvoPage() {
  return (
    <>
      {/* Hero met merkgradient */}
      <section aria-label="Hero MVO" className="section gradient-hero">
        <div className="container py-8 md:py-10 lg:py-14">
          <h1 className="mb-3">Maatschappelijk Verantwoord Ondernemen (MVO)</h1>
          <p className="max-w-3xl text-white/90 text-sm md:text-base">
            Bij Decretorium geloven we dat echte veiligheid verder gaat dan alleen bescherming van mensen en eigendommen. Wij nemen onze
            maatschappelijke verantwoordelijkheid serieus en zetten ons actief in voor duurzaamheid, sociale betrokkenheid en ethisch
            ondernemerschap.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="max-w-3xl text-white leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
            Ons beleid voor Maatschappelijk Verantwoord Ondernemen (MVO) is verankerd in onze bedrijfsvoering en vormt een belangrijk onderdeel van
            onze identiteit.
          </p>

          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            <article className="card p-4 md:p-6 lg:p-8">
              <h2 className="mb-2 text-white">Onze visie op MVO</h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                MVO betekent voor Decretorium dat we streven naar een balans tussen mens, milieu en winst. Wij willen bijdragen aan een veilige
                samenleving, op een manier die respectvol is voor mens en planeet. Daarbij richten wij ons op duurzame bedrijfsvoering, eerlijke
                werkomstandigheden en maatschappelijke betrokkenheid.
              </p>
            </article>

            <article className="card p-4 md:p-6 lg:p-8">
              <h2 className="mb-2 text-white">Duurzaam ondernemen</h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Wij werken continu aan het verkleinen van onze ecologische voetafdruk. Onze voertuigen worden waar mogelijk vervangen door
                elektrische of hybride modellen, en wij stimuleren milieubewust gedrag onder onze medewerkers. Ook binnen onze kantoren letten we op
                energieverbruik, afvalscheiding en verantwoord inkopen. Zo dragen wij dagelijks bij aan een duurzamere toekomst.
              </p>
            </article>

            <article className="card p-4 md:p-6 lg:p-8">
              <h2 className="mb-2 text-white">Sociale verantwoordelijkheid</h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Onze medewerkers vormen het hart van onze organisatie. Wij investeren in hun ontwikkeling door middel van opleiding, coaching en
                doorgroeimogelijkheden. Daarnaast bieden wij kansen aan mensen met een afstand tot de arbeidsmarkt en streven wij naar een inclusieve
                werkomgeving. Respect, diversiteit en gelijke kansen staan centraal in onze organisatiecultuur.
              </p>
            </article>

            <article className="card p-4 md:p-6 lg:p-8">
              <h2 className="mb-2 text-white">Ethisch en transparant ondernemen</h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Integriteit en betrouwbaarheid zijn kernwaarden binnen Decretorium. Wij hanteren strikte gedragscodes en gaan transparant om met
                onze klanten, leveranciers en medewerkers. Onze dienstverlening is gebaseerd op eerlijkheid, kwaliteit en verantwoordelijkheid.
              </p>
            </article>

            <article className="card p-4 md:p-6 lg:p-8 lg:col-span-2">
              <h2 className="mb-2 text-white">Samenwerking en maatschappelijke betrokkenheid</h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                Decretorium werkt samen met lokale partners, gemeenten en maatschappelijke organisaties om bij te dragen aan sociale veiligheid en
                leefbaarheid. Wij steunen initiatieven die gericht zijn op jeugdveiligheid, buurtpreventie en maatschappelijke integratie. Zo dragen
                wij niet alleen bij aan veiligheid, maar ook aan verbinding in de samenleving.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Waarom MVO bij Decretorium */}
      <section className="section">
        <div className="container">
          <div className="card p-4 md:p-6 lg:p-8">
            <h2 className="mb-3 text-white">Waarom MVO bij Decretorium?</h2>
            <ul className="list-disc pl-5 text-white space-y-1 text-sm md:text-base">
              <li>Duurzame bedrijfsvoering en milieubewuste keuzes</li>
              <li>Investeren in mensen en maatschappelijke inclusie</li>
              <li>Eerlijke, transparante en ethische bedrijfsvoering</li>
              <li>Samenwerking met maatschappelijke organisaties</li>
              <li>Actieve bijdrage aan een veilige en leefbare samenleving</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Afsluiting + CTA */}
      <section className="section">
        <div className="container">
          <div className="prose max-w-3xl prose-headings:mt-6 md:prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5">
            <h2 className="text-white">Onze verantwoordelijkheid voor vandaag én morgen</h2>
            <p className="text-white text-sm md:text-base">
              Bij Decretorium nemen wij onze rol in de maatschappij serieus. Wij blijven investeren in duurzame oplossingen, eerlijke samenwerking
              en sociale vooruitgang. Zo bouwen wij samen met onze klanten aan een veilige én verantwoorde toekomst.
            </p>
          </div>
          <div className="mt-6 md:mt-8 card p-6 md:p-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-white text-sm md:text-base">Meer weten over ons MVO-beleid of samenwerken aan een initiatief? Neem contact op.</p>
            <Link href="/contact" className="btn whitespace-nowrap">Neem contact op</Link>
          </div>
        </div>
      </section>
    </>
  )
}
