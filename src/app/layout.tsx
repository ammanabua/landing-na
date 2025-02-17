import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import  Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";


const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

// const montserrat = Montserrat({
//   variable: "--font-montserrat-sans",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Nahom Abegaze - Data-Driven Coach",
  description: "Coach & Integrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
