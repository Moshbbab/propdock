import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import { constructMetadata } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = constructMetadata({
  title: "Propdock - Intelligent verdsettelse av næringseiendom",
  description:
    "Avansert plattform for verdsettelse og verdivurdering av næringseiendom. Få innsikt med DCF-analyser, yield-beregninger og markedsdata for bedre investeringsbeslutninger.",
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
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
