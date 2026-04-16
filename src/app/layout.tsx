import { LayoutChrome } from "@/components/layout-chrome"
import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import { constructMetadata } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "leaflet/dist/leaflet.css"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = constructMetadata({
  title: "Propdock - Intelligent verdsettelse av næringseiendom",
  description:
    "Velg riktig verdsettelsesløsning for din næringseiendom. Få tilgang til markedsdatat, yield-beregninger og DCF-analyser for presise vurderinger.",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen scroll-auto antialiased selection:bg-light-blue selection:text-warm-grey dark:bg-warm-grey dark:selection:bg-light-blue dark:selection:text-warm-grey`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutChrome>
            <Navigation />
          </LayoutChrome>
          {children}
          <LayoutChrome>
            <Footer />
          </LayoutChrome>
        </ThemeProvider>
      </body>
    </html>
  )
}
