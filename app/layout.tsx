import type React from "react"
import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "$COPPER - Based Copper Shiba | Meme Token on Base",
  description:
    "Meet Based Copper, the sleepiest Shiba in crypto. Join the pack with $COPPER meme token on Base Network.",
  icons: {
    icon: "/images/copper-dog-mascot.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space_grotesk.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
