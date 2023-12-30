import type { Metadata } from 'next'
import { fontBody, fontCode, fontHead } from './fonts'
// import './styles/css-reset.css'
import './styles/globals.css'
import './styles/hero.css'
import PageNav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Separator } from '@/components/ui/separator'

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
    <html lang="en" suppressHydrationWarning className={`${fontBody.variable} ${fontCode.variable} ${fontHead.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="float-right d-inline">
            <PageNav/>
          </header>
          {children}
          <footer className="pt-3 pb-20 text-xs flex justify-between align-center">
            <div className="container my-4">
              <Separator />
              <div className="p-4 float-right">
                <p>© {new Date().getFullYear()} WDPJ / {process.env.SITE_TITLE}</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
