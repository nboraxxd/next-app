import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

import AuthProvider from '@/app/auth/Provider'
import { Navbar } from '@/components/Navbar'
import GoogleAnalyticsScript from '@/app/GoogleAnalyticsScript'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

const poppins = localFont({ src: '../public/fonts/poppins-regular-webfont.woff2', variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="cupcake">
      <GoogleAnalyticsScript />
      <body className={poppins.variable}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
