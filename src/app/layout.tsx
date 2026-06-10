import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kanishk Kulshrestha | Portfolio",
    template: "%s | Kanishk Kulshrestha",
  },
  description:
    "Software Engineer Intern @ Fiserv. Competitive programmer, full-stack developer, and systems enthusiast.",
  keywords: [
    "Kanishk Kulshrestha",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "Competitive Programming",
    "Fiserv",
  ],
  authors: [{ name: "Kanishk Kulshrestha" }],
  openGraph: {
    title: "Kanishk Kulshrestha",
    description: "Software Engineer Intern @ Fiserv",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishk Kulshrestha",
    description: "Software Engineer Intern @ Fiserv",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <main className="px-4 py-8 md:px-0 md:py-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

