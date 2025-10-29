import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      <div className="container py-10">
        {/* Contact blokken + link kolommen */}
        <div className="grid gap-8 md:grid-cols-3">
          <section aria-label="Contact beveiliging">
            <h2 className="text-base font-semibold">Contact beveiliging</h2>
            <p className="mt-1">Michael</p>
            <p className="mt-1">
              <a className="hover:underline" href="tel:+31647652247" aria-label="Bel Michael op 06 47 65 22 47">06 47 65 22 47</a>
            </p>
            <p className="mt-1">
              <a className="hover:underline" href="mailto:info@decretorium.nl">info@decretorium.nl</a>
            </p>
          </section>

          <section aria-label="Contact juridisch">
            <h2 className="text-base font-semibold">Contact juridisch</h2>
            <p className="mt-1">Suviënka</p>
            <p className="mt-1">
              <a className="hover:underline" href="tel:+31645082682" aria-label="Bel Suviënka op 06 45 08 26 82">06 45 08 26 82</a>
            </p>
            <p className="mt-1">
              <a className="hover:underline" href="mailto:juridisch@decretorium.nl">juridisch@decretorium.nl</a>
            </p>
          </section>

          <nav aria-label="Footer links" className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h2 className="text-base font-semibold mb-2">Snel naar</h2>
              <ul className="space-y-2 text-white/90">
                <li><Link className="hover:underline" href="/over">Over</Link></li>
                <li><Link className="hover:underline" href="/mvo">MVO</Link></li>
                <li><Link className="hover:underline" href="/diensten">Diensten</Link></li>
                <li><Link className="hover:underline" href="/blogs">Blogs</Link></li>
                <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-2">Juridisch</h2>
              <ul className="space-y-2 text-white/90">
                <li><Link className="hover:underline" href="/privacybeleid">Privacybeleid</Link></li>
                <li><Link className="hover:underline" href="/algemene-voorwaarden">Algemene voorwaarden</Link></li>
                <li><Link className="hover:underline" href="/cookiebeleid">Cookiebeleid</Link></li>
                <li><Link className="hover:underline" href="/disclaimer">Disclaimer</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Onderbalk */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Decretorium. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4" aria-label="Social links">
            {/* Optioneel: social links */}
          </div>
        </div>
      </div>
    </footer>
  )
}
