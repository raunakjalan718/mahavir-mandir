import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahavir Mandir Patna | Shree Mahavir Sthan Nayas Samiti",
  description: "Official Portal of Mahavir Mandir Patna (Shree Mahavir Sthan Nayas Samiti, Patna, Bihar). Information on Rituals, Offerings, Daily Schedule, and Health Institutes.",
  keywords: ["Mahavir Mandir Patna", "Shree Mahavir Sthan Nayas Samiti", "Hanuman Temple Patna", "Patna Junction Mandir", "Mahavir Cancer Institute"],
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#faf7f2] text-[#2a1e17] antialiased selection:bg-[#8b1e0f] selection:text-white">
        {/*
          Google Translate anchor:
          Must NOT be display:none — GT won't initialize into a hidden element.
          We position it off-screen so it's invisible but still rendered.
        */}
        <div
          id="google_translate_element"
          style={{
            position: "fixed",
            top: "-9999px",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        {children}

        {/* Google Translate init — must run BEFORE the GT script loads */}
        <Script id="gt-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: '',
                  layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false,
                },
                'google_translate_element'
              );
            };
          `}
        </Script>
        <Script
          id="gt-widget"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
