import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundEffect } from "@/components/background-effect";
import { Navbar } from "@/components/navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suman Kumar | Full Stack Developer",
  description: "Portfolio of Suman Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio", "Web Development"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundEffect />
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-between">
             {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
