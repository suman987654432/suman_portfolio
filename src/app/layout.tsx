import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundEffect } from "@/components/background-effect";
import { Navbar } from "@/components/navbar";

// Use only one font to reduce bundle size
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Only load needed weights
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suman-portfolio-xi.vercel.app/"), // Replace with your actual domain
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
      <body className={`${inter.variable} font-sans antialiased text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <BackgroundEffect />
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
