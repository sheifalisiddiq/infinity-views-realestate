export default function Page() {
  return (
    <main className="flex-grow pt-[96px]">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Aerial view of Dubai luxury district"
            fetchPriority="high"
            className="w-full h-full object-cover opacity-55 scale-105 animate-[pulse_22s_ease-in-out_infinite]"
          />
          {/* Multi-stop gradient for a controlled vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-[#0A0A0A]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl fade-up">
          <span className="inline-flex items-center font-label text-[10px] uppercase tracking-[0.3em] text-tertiary border border-tertiary/30 rounded-full px-4 py-1.5 mb-8">
            Established 2012
          </span>
          <h1 className="font-headline text-[58px] md:text-[96px] leading-[0.95] text-secondary mb-8 font-normal">
            We Curate<br />
            <span className="italic">The Exceptional</span>
          </h1>
          <p className="font-body text-[17px] md:text-[20px] text-on-surface-variant max-w-xl mb-14 font-light leading-relaxed">
            Infinity Views is a discreet boutique advisory specializing in the acquisition and management of Dubai's most significant architectural estates.
          </p>

          {/* Button-in-button CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/properties"
              className="group inline-flex items-center gap-3 bg-secondary text-[#0A0A0A] pl-7 pr-2 py-2 rounded-full font-label text-[12px] uppercase tracking-widest hover:bg-white active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] w-fit"
            >
              Explore Collection
              <span className="w-9 h-9 rounded-full bg-[#0A0A0A]/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px shrink-0">
                <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
              </span>
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 border border-[#3A3A3A] text-secondary pl-7 pr-2 py-2 rounded-full font-label text-[12px] uppercase tracking-widest hover:border-secondary/60 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] w-fit"
            >
              Private Inquiry
              <span className="w-9 h-9 rounded-full border border-[#3A3A3A] group-hover:border-secondary/50 flex items-center justify-center transition-all duration-500 shrink-0">
                <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. WHO IS IT FOR ── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="fade-up md:pt-8">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-8">Who We Serve</p>
              <h2 className="font-headline text-[40px] md:text-[54px] text-secondary mb-8 leading-[1.05]">
                Designed for the<br />Discerning Few
              </h2>
              <p className="font-body text-[17px] text-on-surface-variant mb-10 leading-relaxed">
                Our services are tailored exclusively for high-net-worth individuals, institutional investors, and royal families who demand absolute privacy and uncompromising standards.
              </p>
              <ul className="space-y-5">
                {["Private Wealth Offices", "Global Real Estate Portfolios", "Architectural Collectors"].map((item) => (
                  <li key={item} className="flex items-center gap-4 font-label text-[13px] text-secondary">
                    <span className="w-px h-5 bg-tertiary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative fade-up delay-200">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687931-cebf5748498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury interior"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-75 grayscale hover:grayscale-0 hover:opacity-95 transition-all duration-1000"
                />
              </div>
              {/* Quote card — overlaps from below */}
              <div className="hidden lg:block bg-[#111111] border border-[#2A2A2A] p-8 max-w-xs ml-8 -mt-10 relative z-10">
                <p className="font-headline text-[19px] text-tertiary italic leading-snug">
                  "Discretion is our greatest asset."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY IT MATTERS — editorial, no hero-metric template ── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop border-y border-[#1E1E1E]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 fade-up">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-8">The Case for Dubai</p>
              <h2 className="font-headline text-[40px] md:text-[56px] text-secondary leading-[1.05]">
                Beyond<br />Mere Assets
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
                Dubai's signature real estate stands as a bastion of stability, tax efficiency, and cultural permanence. We don't just sell property; we secure legacies.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-[#1E1E1E] grid grid-cols-1 sm:grid-cols-3 gap-0 fade-up">
            <div className="sm:border-r border-b sm:border-b-0 border-[#1E1E1E] pr-10 pb-10 sm:pb-0">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-4">Tax Jurisdiction</p>
              <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">
                Zero personal income tax, enabling full capital retention on rental yields and resale gains.
              </p>
            </div>
            <div className="sm:border-r border-b sm:border-b-0 border-[#1E1E1E] sm:px-10 py-10 sm:py-0">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-4">Market Performance</p>
              <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">
                Consistently ranked among the world's top residential markets for yield and capital growth.
              </p>
            </div>
            <div className="sm:pl-10 pt-10 sm:pt-0">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-4">Global Safety</p>
              <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">
                Ranked the world's safest city, underpinning long-term asset stability and tenant confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY TRUST US ── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 fade-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-65 hover:opacity-85 transition-opacity duration-700"
                  alt="Dubai property"
                />
              </div>
              <div className="relative aspect-square overflow-hidden mt-12">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-65 hover:opacity-85 transition-opacity duration-700"
                  alt="Dubai property"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 fade-up">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-8">Our Track Record</p>
            <h2 className="font-headline text-[40px] md:text-[52px] text-secondary mb-12 leading-[1.05]">
              Unrivaled<br />Expertise
            </h2>
            <div className="space-y-10">
              {[
                {
                  title: "12+ Years of Intelligence",
                  body: "Over a decade of deep integration within the Dubai Land Department and master developers.",
                },
                {
                  title: "$4.2B in Acquisitions",
                  body: "Facilitating the city's most high-profile off-market transactions with zero public leaks.",
                },
                {
                  title: "RERA Certified Advisors",
                  body: "Legal-compliant and ethically bound to the highest standards of real estate brokerage.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 pb-10 border-b border-[#1A1A1A] last:border-0 last:pb-0">
                  <span className="w-px h-full bg-tertiary/30 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-headline text-[22px] text-secondary mb-2">{item.title}</h4>
                    <p className="font-body text-[15px] text-on-surface-variant leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES — numbered editorial list ── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop border-t border-[#1E1E1E]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-20">
            <div className="md:w-5/12 fade-up">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-6">Our Ecosystem</p>
              <h2 className="font-headline text-[40px] md:text-[52px] text-secondary leading-tight">
                A Full Spectrum<br />of Care
              </h2>
            </div>
            <div className="md:w-7/12 flex flex-col justify-end fade-up delay-100">
              <p className="font-body text-[17px] text-on-surface-variant leading-relaxed">
                Three disciplines. One mandate: protect and grow what you've built, with absolute discretion at every step.
              </p>
            </div>
          </div>

          <div className="fade-up delay-200">
            {[
              {
                num: "01",
                title: "Strategic Acquisition",
                desc: "Finding the perfect asset through off-market channels, private networks, and aggressive negotiation on your behalf.",
              },
              {
                num: "02",
                title: "Portfolio Analysis",
                desc: "In-depth audits of your current holdings to optimize yield, mitigate exposure, and accelerate capital appreciation.",
              },
              {
                num: "03",
                title: "Bespoke Concierge",
                desc: "Property management, interior curation, legal advisory, and residency guidance for a seamless ownership experience.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-10 border-t border-[#1E1E1E] last:border-b last:border-b-[#1E1E1E] transition-colors duration-500 hover:border-tertiary/30 cursor-default"
              >
                <span className="font-label text-[11px] text-tertiary shrink-0 w-8 pt-1">{s.num}</span>
                <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 flex-1">
                  <h3 className="font-headline text-[24px] md:text-[28px] text-secondary sm:w-56 shrink-0 mb-2 sm:mb-0">
                    {s.title}
                  </h3>
                  <p className="font-body text-[15px] text-on-surface-variant leading-relaxed max-w-lg group-hover:text-secondary/60 transition-colors duration-500">
                    {s.desc}
                  </p>
                </div>
                <span className="hidden sm:block material-symbols-outlined text-[18px] text-on-surface-variant/30 group-hover:text-tertiary transition-colors duration-500 pt-1 shrink-0">
                  arrow_outward
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. SIGNATURE LISTINGS ── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-16 fade-up">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary mb-4">Curated Selection</p>
            <h2 className="font-headline text-[40px] md:text-[52px] text-secondary">Signature Listings</h2>
          </div>
          <a
            href="/properties"
            className="group hidden sm:flex items-center gap-3 font-label text-[12px] uppercase tracking-widest text-tertiary"
          >
            <span>View All</span>
            <span className="w-7 h-7 rounded-full border border-tertiary/40 flex items-center justify-center group-hover:border-tertiary group-hover:bg-tertiary/10 transition-all duration-500">
              <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Card 1 */}
          <div className="group fade-up overflow-hidden border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#2A2A2A] transition-colors duration-700">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                alt="The Emerald Palace, Palm Jumeirah"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <span className="font-label text-[11px] uppercase tracking-widest text-secondary">View Details</span>
              </div>
              <span className="absolute top-4 left-4 font-label text-[9px] uppercase tracking-[0.2em] text-[#0A0A0A] bg-tertiary px-3 py-1">
                Featured
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-[22px] text-secondary mb-1">The Emerald Palace</h3>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-5">Palm Jumeirah</p>
              <p className="font-headline text-[20px] text-tertiary italic">AED 82,000,000</p>
            </div>
          </div>

          {/* Card 2 — raised */}
          <div className="group fade-up delay-100 overflow-hidden border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#2A2A2A] transition-colors duration-700 md:mt-14">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                alt="Obsidian Penthouse, Downtown Dubai"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <span className="font-label text-[11px] uppercase tracking-widest text-secondary">View Details</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-[22px] text-secondary mb-1">Obsidian Penthouse</h3>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-5">Downtown Dubai</p>
              <p className="font-headline text-[20px] text-tertiary italic">AED 45,500,000</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group fade-up delay-200 overflow-hidden border border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#2A2A2A] transition-colors duration-700">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                alt="Villa Seraphim, Emirates Hills"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <span className="font-label text-[11px] uppercase tracking-widest text-secondary">View Details</span>
              </div>
              <span className="absolute top-4 left-4 font-label text-[9px] uppercase tracking-[0.2em] text-secondary border border-secondary/40 px-3 py-1">
                Exclusive
              </span>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-[22px] text-secondary mb-1">Villa Seraphim</h3>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-5">Emirates Hills</p>
              <p className="font-headline text-[20px] text-tertiary italic">Upon Request</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop border-t border-[#1E1E1E] text-center">
        <div className="max-w-3xl mx-auto fade-up">
          <span className="inline-flex items-center font-label text-[10px] uppercase tracking-[0.3em] text-tertiary border border-tertiary/30 rounded-full px-4 py-1.5 mb-10">
            Begin Your Journey
          </span>
          <h2 className="font-headline text-[46px] md:text-[64px] text-secondary mb-8 leading-[1.05]">
            Begin Your<br />
            <span className="italic">Acquisition</span>
          </h2>
          <p className="font-body text-[18px] text-on-surface-variant mb-14 leading-relaxed">
            Schedule a private briefing with our lead advisors to discuss your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-tertiary text-[#0A0A0A] pl-8 pr-2 py-2.5 rounded-full font-label text-[12px] uppercase tracking-widest hover:bg-secondary active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] justify-center sm:w-fit"
            >
              Request Briefing
              <span className="w-9 h-9 rounded-full bg-[#0A0A0A]/15 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-px shrink-0">
                <span className="material-symbols-outlined text-[17px]">arrow_outward</span>
              </span>
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 border border-[#2A2A2A] text-secondary pl-8 pr-2 py-2.5 rounded-full font-label text-[12px] uppercase tracking-widest hover:border-secondary/50 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] justify-center sm:w-fit"
            >
              WhatsApp Discreetly
              <span className="w-9 h-9 rounded-full border border-[#2A2A2A] group-hover:border-secondary/40 flex items-center justify-center transition-all duration-500 shrink-0">
                <span className="material-symbols-outlined text-[17px]">chat</span>
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
