import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import  Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Nahom Abegaze - Data-Driven Coach",
  description: "Coach & Integrator",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
        className={`${lato.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
