import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simon Ekipetot | Data Analyst & Quality Assurance",
  description: "Innovative and analytical Data Analyst, Quality Assurance and Data Scientist with over 2 years of experience in data management, analysis, and program performance monitoring.",
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LoadingScreen />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
