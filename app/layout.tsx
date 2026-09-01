import type React from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-serif', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mura.ae'),
  title: 'Mura LLC — Interior Design Studio, Dubai',
  description: 'Mura LLC is a Dubai interior design and fit-out studio creating residential, hospitality and commercial interiors.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Mura LLC — Interior Design Studio, Dubai', description: 'Interior design and fit-out across residential, hospitality and commercial spaces.', type: 'website', siteName: 'Mura LLC' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#efece4' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}><body className="font-sans antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
