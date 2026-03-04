import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Proyecto Cafe - Experiencia Inmersiva",
  description:
    "Descubre nuestro cafe a traves de una experiencia inmersiva en 3D y realidad aumentada.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
