import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from '@/app/provider/sessionProvider'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Workout Progress',
  description: 'Acompanhe seu progresso nos treinos.',
}

export const viewport: Viewport = {
  maximumScale: 1,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextAuthSessionProvider>
          <div className="antialiased">{children}</div>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
