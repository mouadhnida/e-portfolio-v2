import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingCircles from "@/components/FloatingCircles";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Mouad Hnida | E-portfolio",
  description: "Engineering student at ENSEEIHT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pacifico.variable}`}>
      <body className="font-sans text-black antialiased">
        <LanguageProvider>
          <FloatingCircles />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
