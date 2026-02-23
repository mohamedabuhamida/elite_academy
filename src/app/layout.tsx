import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    default: "The Elite Academy | Physical Therapy Excellence",
    template: "%s | The Elite Academy",
  },
  description:
    "The Elite Academy is a leading educational platform for physical therapists. Develop your clinical skills with expert-led training and real practical experience.",

  keywords: [
    "Elite Academy",
    "Physical Therapy Courses",
    "Physiotherapy Training Egypt",
    "Clinical Skills",
    "Medical Education",
  ],

  authors: [{ name: "The Elite Academy Team" }],

  openGraph: {
    title: "The Elite Academy | Upgrade Your Future",
    description:
      "Develop your clinical skills with elite experts and gain real practical experience.",
    url: "https://yourdomain.com",
    siteName: "The Elite Academy",
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
