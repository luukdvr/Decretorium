import Link from 'next/link'
import { Picture } from '@/components/Picture'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4 py-12">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="mb-4 text-gray-800">Welkom bij Decretorium</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Kies uw dienst om verder te gaan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Beveiliging Portal */}
          <Link 
            href="/beveiliging" 
            className="group relative aspect-square rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden"
            aria-label="Ga naar Beveiliging"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <Picture imageFilename="foto_beveiliging_op_aanvraag.png" altOverride="Beveiliging" className="object-cover" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-white mb-3 md:mb-4">Beveiliging</h2>
              <p className="text-white/80 text-sm md:text-base max-w-xs">
                Professionele beveiliging voor objecten, winkels en evenementen
              </p>
              <div className="mt-6 inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                Meer info
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 ring-4 ring-accent-500/0 group-hover:ring-accent-500/50 rounded-full transition-all duration-500" />
          </Link>

          {/* Juridisch Portal */}
          <Link 
            href="/juridisch" 
            className="group relative aspect-square rounded-full bg-gradient-to-br from-accent-700 to-accent-900 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden"
            aria-label="Ga naar Juridisch"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <Picture imageFilename="foto_juridisch.jpeg" altOverride="Juridisch" className="object-cover" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h2 className="text-white mb-3 md:mb-4">Juridisch</h2>
              <p className="text-white/80 text-sm md:text-base max-w-xs">
                Helder juridisch advies, contracten en procedures
              </p>
              <div className="mt-6 inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                Meer info
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 ring-4 ring-white/0 group-hover:ring-white/30 rounded-full transition-all duration-500" />
          </Link>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Heeft u vragen of wilt u direct contact?
          </p>
          <Link href="/contact" className="btn">
            Neem contact op
          </Link>
        </div>
      </div>
    </main>
  )
}
