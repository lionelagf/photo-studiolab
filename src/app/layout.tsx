import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import type { Metadata } from 'next'
import { Montserrat, Bebas_Neue } from 'next/font/google'

import './globals.css'
import Header from './components/header/Navbar'
import Footer from './components/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({
  subsets: ['latin-ext'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Photo StudioLab',
  description: 'Photo StudioLab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body
        className={montserrat.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
