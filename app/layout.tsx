import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr. Léon Durand | Dentiste à Casablanca",
  description: "Prenez rendez-vous avec Dr. Léon Durand, dentiste expérimenté à [Ville]. Soins dentaires de qualité, prévention, blanchiment, implants et plus pour un sourire en santé.",
  keywords: "dentiste, soins dentaires, Dr Léon Durand, dentiste Casablanca, implants dentaires, blanchiment des dents, prévention dentaire, rendez-vous dentaire",
  openGraph: {
    title: "Dr. Léon Durand | Dentiste à Casablanca",
    description: "Confiez votre santé dentaire à Dr. Léon Durand, spécialiste en soins dentaires, implants, et blanchiment. Prenez rendez-vous dès aujourd'hui pour un sourire éclatant.",
    type: "website",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Léon Durand | Dentiste à Casablanca",
    description: "Obtenez les meilleurs soins dentaires avec Dr. Léon Durand. Implant dentaire, blanchiment, soins préventifs et plus. Prenez rendez-vous en ligne.",
    images: ["https://leondurand.com/twitter-image.jpg"], 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
