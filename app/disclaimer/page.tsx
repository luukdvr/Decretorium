export const metadata = {
  title: 'Disclaimer – Decretorium',
  description: 'Disclaimer van Decretorium Security & Law: informatie op deze website, aansprakelijkheid en rechten.',
}

export default function DisclaimerPage() {
  return (
    <>
      <section className="section gradient-hero">
        <div className="container">
          <h1 className="mb-3">Disclaimer</h1>
          <p className="max-w-3xl text-white/90">Lees hier de beperkingen en voorwaarden met betrekking tot het gebruik van deze website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose max-w-3xl prose-headings:mt-0">
          <h2>Algemeen</h2>
          <p>De informatie op deze website is met zorg samengesteld. Toch kan Decretorium niet instaan voor volledigheid, juistheid en actualiteit.</p>

          <h2>Geen advies</h2>
          <p>De inhoud van deze website is informatief van aard en vormt geen juridisch of professioneel advies. Neem voor advies contact met ons op.</p>

          <h2>Links naar derden</h2>
          <p>Deze website kan links bevatten naar externe websites. Decretorium is niet verantwoordelijk voor de inhoud of werking van deze websites.</p>

          <h2>Aansprakelijkheid</h2>
          <p>Decretorium aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit het gebruik van deze website, tenzij sprake is van opzet of bewuste roekeloosheid van Decretorium.</p>

          <h2>Intellectuele eigendom</h2>
          <p>Alle rechten met betrekking tot teksten, beelden en andere content op deze website berusten bij Decretorium of haar licentiegevers, tenzij anders vermeld.</p>

          <h2>Wijzigingen</h2>
          <p>We kunnen deze disclaimer wijzigen zonder voorafgaande aankondiging. De meest recente versie vindt u altijd op deze pagina.</p>

          <p><em>Let op: deze tekst is een algemeen voorbeeld en vervangt geen juridisch advies.</em></p>
        </div>
      </section>
    </>
  )
}
