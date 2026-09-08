import type { Metadata } from "next";
import "./globals.css";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";

export const metadata: Metadata = {
  title: "Mahavir Mandir Patna | Shree Mahavir Sthan Nayas Samiti",
  description:
    "Official Portal of Mahavir Mandir Patna (Shree Mahavir Sthan Nayas Samiti, Patna, Bihar). Information on Rituals, Offerings, Daily Schedule, and Health Institutes.",
  keywords: [
    "Mahavir Mandir Patna",
    "Shree Mahavir Sthan Nayas Samiti",
    "Hanuman Temple Patna",
    "Patna Junction Mandir",
    "Mahavir Cancer Institute",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#faf7f2] text-[#2a1e17] antialiased selection:bg-[#8b1e0f] selection:text-white">
        {/*
          GoogleTranslateLoader is a Client Component that:
          1. Renders the #google_translate_element anchor div (off-screen, not hidden)
          2. Defines window.googleTranslateElementInit on mount
          3. Injects the GT script imperatively (guaranteed order)
        */}
        <GoogleTranslateLoader />
        {children}
      </body>
    </html>
  );
}
