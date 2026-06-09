import type { Metadata } from "next";
import { Grand_Hotel } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TopNav } from "@/components/layout/top-nav";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import "./globals.css";

const instagramFont = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instagram",
});

export const metadata: Metadata = {
  title: {
    default: "Kanishk Kulshrestha (@kanishkkulshrestha) • Portfolio",
    template: "%s • Kanishk Kulshrestha",
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
    title: "Kanishk Kulshrestha (@kanishkkulshrestha)",
    description: "Software Engineer Intern @ Fiserv",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanishk Kulshrestha (@kanishkkulshrestha)",
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
      <body className={`${instagramFont.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <TopNav />
          <main className="pb-[var(--ig-bottom-nav-h)] pt-0 md:pb-0 md:pt-[var(--ig-nav-h)]">
            {children}
          </main>
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
