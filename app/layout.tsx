import "./globals.css";
import type { Metadata } from "next";
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: "Cyberlok | Cybersecurity Services & Solutions",
    template: "%s | Cyberlok",
  },
  description:
    "Cyberlok provides cybersecurity services, solutions, awareness and training for individuals, SMEs, corporates, enterprises and government initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
