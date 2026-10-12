import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/ui/InitialLoader";
import dynamic from "next/dynamic";

// Decorative SVG background: deferred load
const AmbientBackground = dynamic(() => import("@/components/ui/AmbientBackground"));

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gavra Tsany Atmaja | Portfolio",
  description: "Computer Science Undergraduate at BINUS University specializing in Software Engineering, Full Stack, and Data Analytics.",
  openGraph: {
    title: "Gavra Tsany Atmaja | Portfolio",
    description: "Computer Science Undergraduate at BINUS University.",
    url: "https://gavra.example.com", // TODO
    siteName: "Gavra Tsany Atmaja",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InitialLoader />
          {/* 1. The Global Animated Background (z-[-1]) */}
          <AmbientBackground />
          {/* 2. The Glass Navbar (z-[100]) */}
          <Navbar />
          {/* 3. The Page Content (z-[10], MUST have bg-transparent) */}
          <main className="relative z-10 bg-transparent">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
