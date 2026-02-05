import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Decretorium — Beveiliging & Juridisch',
  description: 'Decretorium biedt professionele beveiligings- en juridische diensten.',
  icons: {
    icon: '/assets/logo-decretorium(1).png',
    apple: '/assets/logo-decretorium(1).png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
