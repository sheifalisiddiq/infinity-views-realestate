import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
        {/* Full Bleed Hero */}
        <section className="w-full h-[80vh] relative">
            <img src="https://images.unsplash.com/photo-1600607687931-cebf5748498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" alt="The OMNIA Residence" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop pb-16">
                <p className="font-label text-[12px] uppercase tracking-[0.2em] text-tertiary mb-4">Palm Jumeirah</p>
                <h1 className="font-headline text-[72px] leading-tight font-light mb-4">The OMNIA Residence</h1>
                <p className="font-body text-[24px] text-tertiary">AED 45,000,000</p>
            </div>
        </section>

        {/* Metadata & Description */}
        <section className="px-margin-mobile md:px-margin-desktop py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/* Data List */}
                <div className="md:col-span-4">
                    <ul className="flex flex-col">
                        <li className="flex justify-between py-4 hairline-b hairline-t">
                            <span className="font-label text-[12px] uppercase tracking-[0.1em] text-on-surface-variant">Interior Space</span>
                            <span className="font-body text-[16px]">12,500 sqft</span>
                        </li>
                        <li className="flex justify-between py-4 hairline-b">
                            <span className="font-label text-[12px] uppercase tracking-[0.1em] text-on-surface-variant">Bedrooms</span>
                            <span className="font-body text-[16px]">6 Suites</span>
                        </li>
                        <li className="flex justify-between py-4 hairline-b">
                            <span className="font-label text-[12px] uppercase tracking-[0.1em] text-on-surface-variant">Architecture</span>
                            <span className="font-body text-[16px]">KSA Design Group</span>
                        </li>
                        <li className="flex justify-between py-4 hairline-b">
                            <span className="font-label text-[12px] uppercase tracking-[0.1em] text-on-surface-variant">Completion</span>
                            <span className="font-body text-[16px]">2025 (Off-Plan)</span>
                        </li>
                    </ul>
                    
                    <a href="/contact" className="mt-12 inline-block bg-tertiary text-[#131313] font-label text-[12px] uppercase tracking-[0.1em] px-8 py-4 hover:bg-white transition-colors duration-300">
                        Request Private Viewing
                    </a>
                </div>

                {/* Description */}
                <div className="md:col-span-7 md:col-start-6 pt-12 md:pt-0">
                    <p className="font-body text-[18px] text-on-surface-variant leading-relaxed mb-8">
                        The OMNIA Residence stands as a monument to contemporary minimal architecture on the fronds of Palm Jumeirah. Designed to maximize the relationship between interior volume and the Arabian Gulf, the property utilizes vast expanses of structural glass to eliminate boundaries.
                    </p>
                    <p className="font-body text-[18px] text-on-surface-variant leading-relaxed">
                        Materials include raw, board-formed concrete, brushed bronze accents, and imported Travertine floors. A true collector's piece, the residence features a submerged car gallery, private wellness facility, and a 40-meter infinity edge pool that perfectly aligns with the horizon.
                    </p>
                </div>
            </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="px-margin-mobile md:px-margin-desktop pb-32">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Interior" className="w-full aspect-[4/3] object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
                <img src="https://images.unsplash.com/photo-1613490908581-229048a1215b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Detail" className="w-full aspect-[4/3] object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" />
            </div>
        </section>
    
    </main>
  );
}
