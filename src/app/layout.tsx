import type { Metadata } from "next";
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
        {/* Google Translate */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async />
      </head>
      <body className="bg-[#faf7f2] text-[#2a1e17] antialiased selection:bg-[#8b1e0f] selection:text-white">
        {/* Hidden Google Translate anchor */}
        <div id="google_translate_element" style={{ display: "none" }} />
        {children}
      </body>
    </html>
  );
}
