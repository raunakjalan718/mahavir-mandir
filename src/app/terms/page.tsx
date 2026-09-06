"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideEdgeTabs from "@/components/SideEdgeTabs";

// Modals
import DonationModal from "@/components/DonationModal";
import LiveDarshanModal from "@/components/LiveDarshanModal";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function TermsPage() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const sections = [
    { id: "section-1", number: "1", title: "Terms and conditions of use" },
    { id: "section-2", number: "2", title: "License to use the website" },
    { id: "section-3", number: "3", title: "Acceptable use" },
    { id: "section-4", number: "4", title: "Registration and accounts" },
    { id: "section-5", number: "5", title: "User login details" },
    { id: "section-6", number: "6", title: "Cancellation and suspension of account" },
    { id: "section-7", number: "7", title: "Your content: license" },
    { id: "section-8", number: "8", title: "Your content: rules" },
    { id: "section-9", number: "9", title: "Limited warranties" },
    { id: "section-10", number: "10", title: "Breaches of these terms and conditions" },
    { id: "section-11", number: "11", title: "Variation" },
    { id: "section-12", number: "12", title: "Assignment" },
    { id: "section-13", number: "13", title: "Severity" },
    { id: "section-14", number: "14", title: "Third-party rights" },
    { id: "section-15", number: "15", title: "Entire agreement" },
    { id: "section-16", number: "16", title: "Law and jurisdiction" },
    { id: "section-17", number: "17", title: "Statutory and regulatory disclosures" },
    { id: "section-18", number: "18", title: "Our details" },
  ];

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2a1e17] relative">
      {/* Sideways Edge Tabs */}
      <SideEdgeTabs
        onOpenLive={() => setIsLiveOpen(true)}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Header */}
      <Header
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenLive={() => setIsLiveOpen(true)}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#5c1208] via-[#75190b] to-[#3d0903] text-white py-12 sm:py-16 px-4 border-b-4 border-[#d4af37]">
        <div className="max-w-5xl mx-auto text-center space-y-2">
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest block">
            Shree Mahavir Sthan Nayas Samiti, Patna
          </span>
          <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-white">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-amber-200 font-medium">
            Last Revised: 07/07/2025
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start h-fit bg-white rounded-2xl p-6 border border-amber-900/15 shadow-sm space-y-4">
            <h2 className="font-serif-title text-base font-bold text-[#8b1e0f] border-b border-amber-900/15 pb-2">
              Table of Contents
            </h2>
            <nav className="space-y-1.5 text-xs max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1.5 px-2.5 rounded-lg text-[#2a1e17]/85 hover:text-[#8b1e0f] hover:bg-amber-100/50 transition-colors font-medium leading-snug"
                >
                  <span className="font-bold text-[#8b1e0f] mr-1.5">{sec.number}.</span>
                  {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Legal Document Content */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-amber-900/15 shadow-sm space-y-10">
            
            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                1. Terms and conditions of use
              </h2>
              <p className="text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                These terms and conditions shall govern your use of our website.
              </p>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">1.1.</strong> By using our website, you accept these terms and conditions in full; accordingly, if you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">1.2.</strong> If you register with our website, submit any material to our website or use any of our website services, we will ask you to express agree to these terms and conditions.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">1.3.</strong> You must be at least 18 years of age to use our website; By using our website or agreeing to these terms and conditions, you warrant and represent to us that you are at least 18 years of age.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">1.4.</strong> Our website uses cookies; By using our website or agreeing to these terms and conditions, you consent to our use of cookies in accordance with the terms of our privacy and cookies policy.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                2. License to use the website
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <div>
                  <p><strong className="text-[#8b1e0f]">2.1.</strong> You may:</p>
                  <ul className="pl-6 pt-1.5 space-y-1 list-disc text-[#2a1e17]/85">
                    <li>(a) view pages from our website in a web browser;</li>
                    <li>(b) download pages from our website for caching in a web browser;</li>
                    <li>(c) print pages from our website;</li>
                    <li>(d) stream audio and video files from our website; and</li>
                    <li>(e) use our website services by means of a web browser, subject to the other provisions of these terms and conditions.</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-[#8b1e0f]">2.2.</strong> Except as expressly permitted BY THE provisions of these terms and conditions, you must not download any material from our website or save any such material to your computer.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">2.3.</strong> You may only use our website for information, offering the donation to Mahavir Mandir, submitting the fees for rituals provided by Mahavir Mandir, purchasing Prasad of Shri Hanumanji, booking for philanthropic facilities given by The Trust and you must not use our website for any other purposes.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">2.4.</strong> Except as expressly permitted by these terms and conditions, you must not edit or otherwise modify any material on our website.
                </p>
                <div>
                  <p><strong className="text-[#8b1e0f]">2.5.</strong> Unless you own or control the relevant rights in the material, you must not:</p>
                  <ul className="pl-6 pt-1.5 space-y-1 list-disc text-[#2a1e17]/85">
                    <li>(a) republish material from our website (including republication on another website);</li>
                    <li>(b) sell, rent or sub-license material from our website;</li>
                    <li>(c) show any material from our website in public;</li>
                    <li>(d) exploit material from our website for a commercial purpose; or</li>
                    <li>(e) redistribute material from our website.</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-[#8b1e0f]">2.6.</strong> We reserve the right to restrict access to areas of our website, or indeed our entire website, at our discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                3. Acceptable use
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <div>
                  <p><strong className="text-[#8b1e0f]">3.1.</strong> You must not:</p>
                  <ul className="pl-6 pt-1.5 space-y-1.5 list-disc text-[#2a1e17]/85">
                    <li>(a) use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website;</li>
                    <li>(b) use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
                    <li>(c) use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                    <li>(d) conduct any systematic or automated data collection activities (including scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
                    <li>(e) access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing;</li>
                    <li>(f) violate the directives set out in the robots.txt file for our website; or</li>
                    <li>(g) use data collected from our website for any direct marketing activity (including email marketing, SMS marketing, telemarketing and direct mailing).</li>
                  </ul>
                </div>
                <p>
                  <strong className="text-[#8b1e0f]">3.2.</strong> You must not use data collected from our website to contact individuals, companies or other persons or entities.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">3.3.</strong> You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading.
                </p>
                <div>
                  <p><strong className="text-[#8b1e0f]">3.4</strong> You are provided to do:</p>
                  <ul className="pl-6 pt-1.5 space-y-1.5 list-disc text-[#2a1e17]/85">
                    <li>(a) You may place a link or embed of any page of our website on your website, blog and social media pages, subject to the conditions being relevant to the context on your page. You may not embed the URL of our website on your page in a way that may be offensive to readers, may contain obscene or provocative material around it, or may advertise an illegal product, such as Viagra, alcohol, etc.</li>
                    <li>(b) You can put up to 100 words from our page on your website as a quote, but there you have to provide the active URL of our page.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                4. Registration and accounts
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">4.1.</strong> You may register for an account with our website by completing and submitting the account registration form on our website, and clicking on the verification link in the email that the website will send to you.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">4.2.</strong> You must not allow any other person to use your account to access the website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">4.3.</strong> You must notify us in writing immediately if you become aware of any unauthorized use of your account.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">4.4.</strong> You must not use any other person's account to access the website, unless you have that person's express permission to do so.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                5. User login details
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">5.1.</strong> If you register for an account with our website, we will provide you with a user ID and password.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">5.2.</strong> Your user ID must not be liable to mislead; you must not use your account or user ID for or in connection with the impersonation of any person.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">5.3.</strong> You must keep your password confidential.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">5.4.</strong> You must notify us in writing immediately if you become aware of any disclosure of your password.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">5.5.</strong> You are responsible for any activity on our website arising out of any failure to keep your password confidential, and may be held liable for any losses arising out of such a failure.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                6. Cancellation and suspension of account
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">6.1.</strong> We may: (a) suspend your account; (b) cancel your account; and/or (c) edit your account details, at any time in our sole discretion without notice or explanation.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">6.2.</strong> You may cancel your account on our website using your account control panel on the website.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                7. Your content: license
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">7.1.</strong> In these terms and conditions, "your content" means all works and materials (including text, graphics, images, audio material, video material, audio-visual material, scripts, software and files) that you submit to us or our website for storage or publication on, processing by, or transmission via, our website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">7.2.</strong> You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to reproduce, store and publish your content on and in relation to this website and any successor website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">7.3.</strong> You hereby waive all your moral rights in your content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your content have been waived to the maximum extent permitted by applicable law.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">7.4.</strong> You may edit your content to the extent permitted using the editing functionality made available on our website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">7.5.</strong> Without prejudice to our other rights under these terms and conditions, if you breach any provision of these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may delete, unpublish or edit any or all of your content.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                8. Your content: rules
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">8.1.</strong> You warrant and represent that your content will comply with these terms and conditions.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">8.2.</strong> Your content must not be illegal or unlawful, must not infringe any person's legal rights, and must not be capable of giving rise to legal action against any person.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">8.3.</strong> Your content must not: (a) be libelous or maliciously false; (b) be obscene or indecent; (c) infringe any copyright, moral right, database right, trade mark right, design right, right in passing off, or other intellectual property right; (d) infringe any right of confidence, right of privacy or right under data protection legislation; (e) constitute negligent advice or contain any negligent statement; (f) constitute an incitement to commit a crime; (g) be in contempt of any court, or in breach of any court order; (h) be in breach of racial or religious hatred or discrimination legislation; (i) be blasphemous; (j) be in breach of official secrets legislation; (k) be in breach of any contractual obligation owed to any person; (l) depict violence in an explicit, graphic or gratuitous manner; (m) be pornographic, lewd, suggestive or sexually explicit; (n) be untrue, false, inaccurate or misleading; (o) consist of or contain any instructions, advice or other information which may be acted upon and could, if acted upon, cause illness, injury or death, or any other loss or damage; (p) constitute spam; (q) be offensive, deceptive, fraudulent, threatening, abusive, harassing, anti-social, menacing, hateful, discriminatory or inflammatory; or (r) cause annoyance, inconvenience or unnecessary anxiety to any person.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                9. Limited warranties
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">9.1.</strong> We do not warrant or represent: (a) the completeness or accuracy of the information published on our website; (b) that the material on the website is up to date; or (c) that the website or any service on the website will remain available.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">9.2.</strong> We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in these terms and conditions, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">9.3.</strong> To the maximum extent permitted by applicable law, we exclude all representations and warranties relating to the subject matter of these terms and conditions, our website and the use of our website.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                10. Breaches of these terms and conditions
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">10.1.</strong> Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, or if we reasonably suspect that you have breached these terms and conditions in any way, we may: (a) send you one or more formal warnings; (b) temporarily suspend your access to our website; (c) permanently prohibit you from accessing our website; (d) block computers using your IP address from accessing our website; (e) contact any or all of your internet service providers and request that they block your access to our website; (f) commence legal action against you, whether for breach of contract or otherwise; and/or (g) suspend or delete your account on our website.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">10.2.</strong> Where we suspend or prohibit or block your access to our website or a part of our website, you must not take any action to circumvent such suspension or prohibition or blocking.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                11. Variation
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">11.1.</strong> We may revise these terms and conditions from time to time.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">11.2.</strong> The revised terms and conditions shall apply to the use of our website from the date of publication of the revised terms and conditions on the website, and you hereby waive any right you may otherwise have to be notified of, or to consent to, revisions of these terms and conditions.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">11.3.</strong> If you have given your express agreement to these terms and conditions, we will ask for your express agreement to any revision of these terms and conditions; and if you do not give your express agreement to the revised terms and conditions within such period as we may specify, we will disable or delete your account on the website, and you must stop using the website.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                12. Assignment
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">12.1.</strong> You hereby agree that we may assign, transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">12.2.</strong> You may not without our prior written consent assign, transfer, sub-contract or otherwise deal with any of your rights and/or obligations under these terms and conditions.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                13. Severity
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">13.1.</strong> If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">13.2.</strong> If any unlawful and/or unenforceable provision of these terms and conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                14. Third-party rights
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">14.1.</strong> A contract under these terms and conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">14.2.</strong> The exercise of the parties' rights under a contract under these terms and conditions is not subject to the consent of any third party.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                15. Entire agreement
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">15.1.</strong> The terms and conditions, together with our privacy and cookies policy, shall constitute the entire agreement between you and us in relation to your use of our website and shall supersede all previous agreements between you and us in relation to your use of our website.
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                16. Law and jurisdiction
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">16.1.</strong> These terms and conditions shall be governed by and construed in accordance with Indian Law.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">16.2.</strong> Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="scroll-mt-28 space-y-4 border-b border-amber-900/10 pb-8">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                17. Statutory and regulatory disclosures
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">17.1.</strong> We are registered in Religious Trust; you can find the online version of the register at{" "}
                  <a href="https://bsbrtrust.in/" target="_blank" rel="noreferrer" className="text-[#8b1e0f] underline font-medium">
                    https://bsbrtrust.in/
                  </a>
                  , and our registration number is 657.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">17.2.</strong> We are subject to Hindu Religious Trust, which is supervised by Bihar State Board of Religious Trusts, Vidyapati Marg, Patna-800001, Bihar (India).
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">17.3.</strong> We are registered as Shri Mahavir Sthan Nyas Samiti with Bihar State Board of Religious Trusts in Bihar (India) and are subject to By-laws of our Trust, which can be found at{" "}
                  <a href="https://mahavirmandirpatna.org/events/bye-laws/bye-laws-shri-mahavir-sthan-nyas-samiti/" target="_blank" rel="noreferrer" className="text-[#8b1e0f] underline font-medium">
                    https://mahavirmandirpatna.org/events/bye-laws/bye-laws-shri-mahavir-sthan-nyas-samiti/
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">17.5.</strong> Our GST number is 10AABTS7972G3ZE.
                </p>
              </div>
            </section>

            {/* Section 18 */}
            <section id="section-18" className="scroll-mt-28 space-y-4">
              <h2 className="font-serif-title text-xl font-bold text-[#8b1e0f]">
                18. Our details
              </h2>
              <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm text-[#2a1e17]/90 leading-relaxed font-normal">
                <p>
                  <strong className="text-[#8b1e0f]">18.1.</strong> This website is owned and operated by Shri Mahavir Sthan Nyas Samiti.
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">18.2.</strong> We are registered in Bihar, India under Bihar State Board of Religious Trusts situated at Vidyapati Marg, Patna, 800001, registration number 657, and our registered office is at Mahavir Mandir, Near Patna Railway Junction, Patna-800001, Bihar (India).
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">18.3.</strong> Our principal place of service is at Mahavir Mandir, Near Patna Railway Junction, Patna-800001, Bihar (India).
                </p>
                <p>
                  <strong className="text-[#8b1e0f]">18.4.</strong> You can contact us: (a) by post, using the postal address given above; (b) using our website contact form; (c) by telephone, on the contact number published on our website from time to time; or (d) by email, using the email address published on our website from time to time.
                </p>
              </div>
            </section>

          </article>

        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <DonationModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />

      <LiveDarshanModal
        isOpen={isLiveOpen}
        onClose={() => setIsLiveOpen(false)}
      />

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </main>
  );
}
