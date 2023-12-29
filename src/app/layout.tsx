import type { Metadata } from 'next'
import { fontBody, fontCode, fontHead } from './fonts'
import './css-reset.css'
import './globals.css'

export const metadata: Metadata = {
  title: process.env.SITE_TITLE,
  description: process.env.SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontCode.variable} ${fontHead.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
