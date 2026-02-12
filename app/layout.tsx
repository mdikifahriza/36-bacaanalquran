import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '36++ Bacaan Al-Quran - Qari Terbaik Dunia | Offline & Sekali Bayar',
  description: 'Koleksi digital 36++ bacaan Al-Quran dari qari internasional & nasional. Full 30 Juz + Juz Amma. Offline, update mingguan, sekali bayar selamanya. Hanya Rp 55.000!',
  keywords: ['Al-Quran', 'Murattal', 'Qari', 'Bacaan Quran', 'Full 30 Juz', 'Juz Amma', 'Offline', 'Digital'],
  authors: [{ name: 'Al-Quran Digital' }],
  openGraph: {
    title: '36++ Bacaan Al-Quran - Qari Terbaik Dunia',
    description: 'Full 30 Juz + Juz Amma | Offline | Update Mingguan | Sekali Bayar Selamanya',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}