import type { Metadata } from 'next'
import '@/assets/styles/globals.css'
import {Navbar,Footer} from '@/components'
import {easeInOut, motion} from 'framer-motion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
