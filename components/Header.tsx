'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isJuridisch = pathname?.startsWith('/juridisch')
  const isBeveiliging = pathname?.startsWith('/beveiliging') || pathname?.startsWith('/diensten') || pathname?.startsWith('/blogs')
  const isMVO = pathname?.startsWith('/mvo')
  return (
    <header className="sticky top-0 z-50 border-b border-primary-600 bg-primary-800/95 backdrop-blur supports-[backdrop-filter]:bg-primary-800/90">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded">
            {/* If logo exists in public/assets, this will show; else the fallback text is read */}
            <Image
              src="/assets/logo-decretorium(1).png"
              alt="Logo Decretorium"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 48px, 56px"
              priority
            />
          </div>
          <span className="font-bold text-white">Decretorium</span>
        </Link>
        <nav aria-label="Hoofdnavigatie" className="">
          {isHome ? (
            <ul className="flex items-center gap-2 text-sm md:text-base md:gap-6 text-white">
              <li><Link className="btn text-xs px-3 py-2 md:text-sm md:px-4 md:py-2.5" href="/contact">Contact</Link></li>
            </ul>
          ) : (
            <ul className="flex items-center gap-2 text-sm md:text-base md:gap-6 text-white">
              <li className="hidden sm:block"><Link className="hover:text-gray-300 transition-colors" href="/beveiliging">Beveiliging</Link></li>
              <li className="hidden sm:block"><Link className="hover:text-gray-300 transition-colors" href="/juridisch">Juridisch</Link></li>
              <li className="hidden sm:block">
                <Link className="hover:text-gray-300 transition-colors" href={isJuridisch || isMVO ? "/juridisch#diensten" : "/diensten"}>Diensten</Link>
              </li>
              <li className="hidden md:block"><Link className="hover:text-gray-300 transition-colors" href="/mvo">MVO</Link></li>
              <li className="hidden md:block">
                <Link className="hover:text-gray-300 transition-colors" href={isJuridisch || isMVO ? "/juridisch/blogs" : "/blogs"}>Blogs</Link>
              </li>
              <li className="hidden lg:block">
                <Link className="hover:text-gray-300 transition-colors" href={isJuridisch ? "/juridisch/over" : isBeveiliging ? "/beveiliging/over" : "/over"}>Over</Link>
              </li>
              <li><Link className="btn text-xs px-3 py-2 md:text-sm md:px-4 md:py-2.5" href="/contact">Contact</Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  )
}
