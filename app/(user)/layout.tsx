import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'
import {Navbar,Footer} from '@/components'


export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Mustafa Masoud ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
