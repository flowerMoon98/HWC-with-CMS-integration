import 'src/app/global.css'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Financial Services',
  description: 'Your trusted partner in financial services',
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 