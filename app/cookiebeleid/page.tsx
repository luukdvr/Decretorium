export const metadata = {
  title: 'Cookiebeleid – Decretorium',
  description: 'Cookiebeleid van Decretorium Security & Law: uitleg over cookies, welke we gebruiken en hoe u voorkeuren beheert.',
}

export default function CookiebeleidPage() {
  return (
    <>
      <section className="section gradient-hero">
        <div className="container">
          <h1 className="mb-3">Cookiebeleid</h1>
          <p className="max-w-3xl text-white/90">We leggen uit wat cookies zijn, welke cookies wij gebruiken en hoe u uw voorkeuren kunt beheren.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose max-w-3xl prose-headings:mt-0">
          <h2>Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die bij een bezoek aan een website op uw apparaat worden geplaatst. Ze helpen de website goed functioneren en geven inzicht in het gebruik ervan.</p>

          <h2>Soorten cookies</h2>
          <ul>
            <li>Noodzakelijke cookies: voor basisfunctionaliteit van de site.</li>
            <li>Voorkeurscookies: onthouden instellingen zoals taal.</li>
            <li>Statistische cookies: helpen ons de website te verbeteren.</li>
            <li>Marketingcookies: worden gebruikt om content en advertenties te personaliseren (indien toegepast).</li>
          </ul>

          <h2>Welke cookies gebruiken wij?</h2>
          <p>We gebruiken voornamelijk noodzakelijke en mogelijk statistische cookies om de site te verbeteren. We plaatsen alleen marketingcookies als u daarvoor toestemming geeft.</p>

          <h2>Cookievoorkeuren beheren</h2>
          <p>U kunt cookies beheren en verwijderen via uw browserinstellingen. Houd er rekening mee dat sommige functies van de site mogelijk niet goed werken als u noodzakelijke cookies blokkeert.</p>

          <h2>Wijzigingen</h2>
          <p>We kunnen dit cookiebeleid aanpassen als onze dienstverlening of wetgeving verandert. Controleer daarom regelmatig deze pagina.</p>

          <p><em>Let op: deze tekst is een algemeen voorbeeld en vervangt geen juridisch advies. Laat uw cookiebeleid waar nodig juridisch toetsen.</em></p>
        </div>
      </section>
    </>
  )
}
