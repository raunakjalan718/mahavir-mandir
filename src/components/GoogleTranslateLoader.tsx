"use client";

import { useEffect } from "react";

/**
 * GoogleTranslateLoader
 *
 * Correct pattern for Google Translate in Next.js 14 App Router:
 * - Must be a Client Component (useEffect only runs on client)
 * - Define window.googleTranslateElementInit BEFORE injecting the script
 * - Inject the script imperatively so order is guaranteed
 * - The anchor div #google_translate_element must be in the DOM (not display:none)
 *   when the init callback fires
 */
export default function GoogleTranslateLoader() {
  useEffect(() => {
    // Don't re-initialize if already done
    if ((window as any).__gtInitialized) return;
    (window as any).__gtInitialized = true;

    // 1. Define the callback FIRST — before the script loads
    (window as any).googleTranslateElementInit = function () {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          // Empty string = all languages
          includedLanguages: "",
        },
        "google_translate_element"
      );
    };

    // 2. Inject the script tag imperatively — order is now guaranteed
    const script = document.createElement("script");
    script.id = "gt-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      console.warn("[GT] Failed to load Google Translate script.");
      (window as any).__gtInitialized = false;
    };

    if (!document.getElementById("gt-script")) {
      document.head.appendChild(script);
    }

    // 3. Inject style to suppress Google's auto-injected UI chrome
    if (!document.getElementById("gt-suppress")) {
      const style = document.createElement("style");
      style.id = "gt-suppress";
      style.innerHTML = `
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        .goog-te-gadget { font-size: 0 !important; }
        .goog-te-gadget img { display: none !important; }
        #goog-gt-tt { display: none !important; }
        .goog-te-balloon-frame { display: none !important; }
        body { top: 0px !important; }
        font { background-color: transparent !important; box-shadow: none !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    /*
      The GT anchor div — must be rendered (not display:none) for GT to
      inject its select element. We position it off-screen.
    */
    <div
      id="google_translate_element"
      aria-hidden="true"
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
  );
}
