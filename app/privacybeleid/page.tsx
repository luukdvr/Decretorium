export const metadata = {
  title: 'Privacybeleid – Decretorium',
  description: 'Privacybeleid van Decretorium Security & Law: welke persoonsgegevens we verwerken, voor welke doeleinden en uw rechten.',
}

export default function PrivacybeleidPage() {
  return (
    <>
      <section className="section gradient-hero">
        <div className="container">
          <h1 className="mb-3">Privacybeleid</h1>
          <p className="max-w-3xl text-white/90">In dit privacybeleid leest u welke persoonsgegevens wij verwerken, waarom we dat doen en welke rechten u heeft.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose max-w-3xl prose-headings:mt-6 md:prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5">
          <h2>Wie zijn wij</h2>
          <p>Dit privacybeleid is van toepassing op Decretorium Security & Law (hierna: “Decretorium”). Bij vragen kunt u contact opnemen via <a href="mailto:info@decretorium.nl">info@decretorium.nl</a>.</p>

          <h2>Welke gegevens verwerken wij</h2>
          <ul>
            <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
            <li>Correspondentie en dossierinformatie (indien u klant bent)</li>
            <li>Factuur- en betalingsgegevens</li>
            <li>Bezoekgegevens website (zoals IP-adres en apparaat-informatie)</li>
          </ul>

          <h2>Doeleinden en grondslagen</h2>
          <ul>
            <li>Het uitvoeren van opdrachten en dienstverlening (overeenkomst)</li>
            <li>Communicatie en klantenservice (gerechtvaardigd belang)</li>
            <li>Administratie, facturatie en wettelijke verplichtingen (wettelijke plicht)</li>
            <li>Verbetering van onze website en diensten (gerechtvaardigd belang)</li>
          </ul>

          <h2>Bewaartermijnen</h2>
          <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld of zolang als wettelijk verplicht.</p>

          <h2>Delen met derden</h2>
          <p>Wij delen uw gegevens niet met derden, tenzij dit nodig is voor de uitvoering van de overeenkomst, om te voldoen aan een wettelijke verplichting of met uw toestemming. Met verwerkers sluiten wij verwerkersovereenkomsten.</p>

          <h2>Beveiliging</h2>
          <p>Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen tegen verlies of onrechtmatige verwerking.</p>

          <h2>Uw rechten</h2>
          <p>U heeft recht op inzage, rectificatie, verwijdering, beperking van verwerking, overdraagbaarheid en bezwaar. Neem hiervoor contact op via <a href="mailto:info@decretorium.nl">info@decretorium.nl</a>.</p>

          <h2>Wijzigingen</h2>
          <p>We kunnen dit privacybeleid van tijd tot tijd wijzigen. Bovenaan deze pagina vermelden we de datum van de laatste wijziging.</p>

          <p><em>Let op: deze tekst is een algemeen voorbeeld en vervangt geen juridisch advies. Laat uw privacybeleid waar nodig juridisch toetsen.</em></p>
        </div>
      </section>
    </>
  )
}
