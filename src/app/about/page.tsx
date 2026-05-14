import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
        {/* Hero Philosophy */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-section-gap">
            <h1 className="font-display-lg text-on-surface mb-12 max-w-4xl">Architecture is the artifact. Discretion is the luxury.</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                <div className="md:col-span-5 md:col-start-8">
                    <p className="font-body-lg text-on-surface-variant mb-8">
                        At Infinity Views, we do not merely broker real estate. We curate architectural significance. Our approach is founded on the belief that true luxury is defined by precision, scarcity, and absolute privacy. 
                    </p>
                    <p className="font-body-lg text-on-surface-variant">
                        We serve a discerning clientele who value the quiet acquisition of Dubai's most compelling properties—those that exist off-market, preserved for the few.
                    </p>
                </div>
            </div>
        </section>

        {/* Cinematic Image Block */}
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-section-gap">
            <div className="relative w-full aspect-[21/9] overflow-hidden bg-surface-container-highest">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Cinematic architecture" className="w-full h-full object-cover opacity-70 mix-blend-luminosity" />
            </div>
        </section>

        {/* The Method (Ivory Section) */}
        <section className="ivory-bg py-section-gap px-margin-mobile md:px-margin-desktop">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-headline-xl mb-16 text-center">The Methodology</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter ivory-hairline-t pt-12">
                    <div className="md:col-span-4">
                        <span className="font-label-sm uppercase tracking-[0.1em] text-[#C9A961] mb-4 block">01 / Curation</span>
                        <h3 className="font-headline-md mb-6">Editorial Selection</h3>
                        <p className="font-body-md text-[#444748]">We approach real estate like an art gallery. Every listing must meet a rigorous standard of architectural integrity and design excellence before entering our portfolio.</p>
                    </div>
                    <div className="md:col-span-4">
                        <span className="font-label-sm uppercase tracking-[0.1em] text-[#C9A961] mb-4 block">02 / Discretion</span>
                        <h3 className="font-headline-md mb-6">Private Ledgers</h3>
                        <p className="font-body-md text-[#444748]">The majority of our transactions occur entirely off-market. We protect our clients' privacy with the same vigilance as their financial assets.</p>
                    </div>
                    <div className="md:col-span-4">
                        <span className="font-label-sm uppercase tracking-[0.1em] text-[#C9A961] mb-4 block">03 / Execution</span>
                        <h3 className="font-headline-md mb-6">Surgical Precision</h3>
                        <p className="font-body-md text-[#444748]">From initial intelligence gathering to final transfer, our advisory team executes with clinical efficiency, removing all friction from the acquisition process.</p>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
  );
}
