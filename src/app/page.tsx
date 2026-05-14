import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
      {/* 1. HERO - WHAT DO WE DO? */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Aerial view of Dubai luxury district" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite]" 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl fade-up">
          <p className="font-label text-[12px] uppercase tracking-[0.3em] text-tertiary mb-6">Established 2012</p>
          <h1 className="font-headline text-[56px] md:text-[92px] leading-[1] text-secondary mb-8 font-normal">
            We Curate <br/><span className="italic">The Exceptional</span>
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-on-surface-variant max-w-2xl mb-12 font-light leading-relaxed">
            Infinity Views is a discreet boutique advisory specializing in the acquisition and management of Dubai's most significant architectural estates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="/properties" className="bg-secondary text-[#0A0A0A] px-10 py-4 rounded-sm font-label text-[14px] uppercase tracking-wider hover:bg-white transition-all duration-300 text-center">
              Explore Collection
            </a>
            <a href="/contact" className="border border-[#2A2A2A] text-secondary px-10 py-4 rounded-sm font-label text-[14px] uppercase tracking-wider hover:bg-[#2A2A2A] transition-all duration-300 text-center">
              Private Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* 2. WHO IS IT FOR? */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="fade-up">
              <h2 className="font-headline text-[40px] md:text-[56px] text-secondary mb-8 leading-tight">
                Designed for the <br/>Discerning Few
              </h2>
              <p className="font-body text-[18px] text-on-surface-variant mb-8 leading-relaxed">
                Our services are tailored exclusively for high-net-worth individuals, institutional investors, and royal families who demand absolute privacy and uncompromising standards.
              </p>
              <ul className="space-y-4 font-label text-[14px] text-secondary">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Private Wealth Offices</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Global Real Estate Portfolios</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Architectural Collectors</li>
              </ul>
            </div>
            <div className="relative aspect-[4/5] fade-up delay-200">
              <img 
                src="https://images.unsplash.com/photo-1600607687931-cebf5748498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Interior" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#2A2A2A] p-10 hidden lg:block">
                <p className="font-headline text-[24px] text-tertiary italic">"Discretion is our greatest asset."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY DOES IT MATTER? */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] border-y border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <h2 className="font-headline text-[40px] md:text-[56px] text-secondary mb-10">Beyond Mere Assets</h2>
          <p className="font-body text-[20px] text-on-surface-variant leading-relaxed mb-12">
            In a world of rapidly shifting variables, Dubai's signature real estate stands as a bastion of stability, tax efficiency, and cultural significance. We don't just sell property; we secure legacies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12">
            <div>
              <p className="font-headline text-[32px] text-tertiary mb-2">0%</p>
              <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant">Income Tax</p>
            </div>
            <div>
              <p className="font-headline text-[32px] text-tertiary mb-2">15%</p>
              <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant">Annual Growth</p>
            </div>
            <div>
              <p className="font-headline text-[32px] text-tertiary mb-2">#1</p>
              <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant">Global Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY TRUST US? (THE PROOF) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div className="order-2 md:order-1 fade-up">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full aspect-square object-cover opacity-40" alt="Dubai Property" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full aspect-square object-cover opacity-40 mt-12" alt="Dubai Property" />
             </div>
           </div>
           <div className="order-1 md:order-2 fade-up">
             <h2 className="font-headline text-[40px] md:text-[56px] text-secondary mb-8">Unrivaled Expertise</h2>
             <div className="space-y-10">
                <div>
                  <h4 className="font-headline text-[24px] text-tertiary mb-3">12+ Years of Intelligence</h4>
                  <p className="font-body text-[16px] text-on-surface-variant">Over a decade of deep integration within the Dubai Land Department and master developers.</p>
                </div>
                <div>
                  <h4 className="font-headline text-[24px] text-tertiary mb-3">$4.2B in Acquisitions</h4>
                  <p className="font-body text-[16px] text-on-surface-variant">Facilitating the city's most high-profile off-market transactions with zero public leaks.</p>
                </div>
                <div>
                  <h4 className="font-headline text-[24px] text-tertiary mb-3">Certified Advisors</h4>
                  <p className="font-body text-[16px] text-on-surface-variant">RERA certified, legal-compliant, and ethically bound to the highest standards of brokerage.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="text-center mb-20 fade-up">
          <p className="font-label text-[12px] uppercase tracking-[0.3em] text-tertiary mb-4">Our Ecosystem</p>
          <h2 className="font-headline text-[40px] md:text-[56px] text-secondary">A Full Spectrum of Care</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="p-10 border border-[#2A2A2A] hover:border-tertiary transition-all duration-500 fade-up">
            <span className="material-symbols-outlined text-[40px] text-tertiary mb-8">apartment</span>
            <h3 className="font-headline text-[28px] text-secondary mb-4">Strategic Acquisition</h3>
            <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">Finding the perfect asset through off-market channels and aggressive negotiation.</p>
          </div>
          <div className="p-10 border border-[#2A2A2A] hover:border-tertiary transition-all duration-500 fade-up delay-100">
            <span className="material-symbols-outlined text-[40px] text-tertiary mb-8">insights</span>
            <h3 className="font-headline text-[28px] text-secondary mb-4">Portfolio Analysis</h3>
            <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">In-depth audits of your current holdings to optimize yield and capital appreciation.</p>
          </div>
          <div className="p-10 border border-[#2A2A2A] hover:border-tertiary transition-all duration-500 fade-up delay-200">
            <span className="material-symbols-outlined text-[40px] text-tertiary mb-8">concierge</span>
            <h3 className="font-headline text-[28px] text-secondary mb-4">Bespoke Concierge</h3>
            <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">Property management, interior curation, and legal advisory for a seamless experience.</p>
          </div>
        </div>
      </section>

      {/* 6. FEATURED COLLECTION */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#0A0A0A]">
        <div className="flex justify-between items-end mb-12 fade-up">
          <h2 className="font-headline text-[40px] text-secondary">Signature Listings</h2>
          <a href="/properties" className="font-label text-[14px] text-tertiary border-b border-tertiary pb-1">View Full Collection</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group fade-up border border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Property" />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-[24px] text-secondary mb-2">The Emerald Palace</h3>
                  <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant mb-6">Palm Jumeirah</p>
                  <p className="font-body text-[20px] text-tertiary">AED 82,000,000</p>
                </div>
            </div>
            <div className="group fade-up border border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden mt-12">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Property" />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-[24px] text-secondary mb-2">Obsidian Penthouse</h3>
                  <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant mb-6">Downtown Dubai</p>
                  <p className="font-body text-[20px] text-tertiary">AED 45,500,000</p>
                </div>
            </div>
            <div className="group fade-up border border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Property" />
                </div>
                <div className="p-8">
                  <h3 className="font-headline text-[24px] text-secondary mb-2">Villa Seraphim</h3>
                  <p className="font-label text-[12px] uppercase tracking-widest text-on-surface-variant mb-6">Emirates Hills</p>
                  <p className="font-body text-[20px] text-tertiary">Upon Request</p>
                </div>
            </div>
        </div>
      </section>

      {/* 7. FINAL CTA - WHAT TO DO? */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="font-headline text-[48px] md:text-[64px] text-secondary mb-8">Begin Your Acquisition</h2>
          <p className="font-body text-[20px] text-on-surface-variant mb-12">
            Schedule a private briefing with our lead advisors to discuss your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="bg-tertiary text-[#0A0A0A] px-12 py-5 font-label text-[14px] uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-300 rounded-sm">
              Request Briefing
            </a>
            <a href="https://wa.me/yournumber" className="border border-[#2A2A2A] text-secondary px-12 py-5 font-label text-[14px] uppercase tracking-[0.2em] hover:bg-[#2A2A2A] transition-all duration-300 rounded-sm flex items-center justify-center gap-2">
               WhatsApp Discreetly
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
