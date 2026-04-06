import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    default: "Cyberlok | Cybersecurity Services & Solutions",
    template: "%s | Cyberlok",
  },
  description:
    "Cyberlok provides cybersecurity services, solutions, awareness and training for individuals, SMEs, corporates, enterprises and government initiatives.",
  keywords: ["cybersecurity", "penetration testing", "SOC", "MDR", "security services", "India"],
  authors: [{ name: "Cyberlok" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Cyberlok",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
