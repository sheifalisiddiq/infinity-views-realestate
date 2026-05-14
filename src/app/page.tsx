import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
    {/* 1. Hero Section */}
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
            <img alt="Aerial view of Dubai" className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl fade-up">
            <h1 className="font-headline text-[56px] md:text-[80px] leading-[1.05] text-secondary mb-6 font-normal">
                Curating Dubai's Finest Real Estate
            </h1>
            <p className="font-body text-[18px] md:text-[22px] text-on-surface-variant max-w-2xl mb-12 font-light">
                Exclusive access to off-market estates, penthouses, and signature villas for the world's most discerning buyers.
            </p>
            
            {/* Search Bar Component from UI Sheet */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex items-center bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm px-4 py-3 w-full max-w-md">
                    <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
                    <input type="text" placeholder="Search communities, locations..." className="bg-transparent border-none outline-none text-secondary w-full font-label focus:ring-0 placeholder:text-[#2A2A2A]" />
                </div>
                <a className="flex items-center justify-center bg-secondary text-[#0A0A0A] px-8 py-3 rounded-sm font-label text-[14px] hover:bg-white transition-colors duration-300 whitespace-nowrap" href="/properties">
                    Search
                </a>
            </div>
            
            {/* Button Components from UI Sheet */}
            <div className="flex gap-4">
                <a className="bg-secondary text-[#0A0A0A] px-8 py-3 rounded-sm font-label text-[14px] hover:bg-white transition-colors duration-300" href="/properties">Browse Collection</a>
                <a className="border border-[#2A2A2A] text-secondary px-8 py-3 rounded-sm font-label text-[14px] hover:bg-[#2A2A2A] transition-colors duration-300" href="/contact">Contact Us</a>
            </div>
        </div>
    </section>

    {/* 2. Services / Who is it for? */}
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto fade-up">
            <div className="flex flex-col">
                <div className="w-12 h-12 rounded-sm bg-[#2A2A2A] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-tertiary">diamond</span>
                </div>
                <h3 className="font-headline text-[28px] text-secondary mb-4">Exclusive Access</h3>
                <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                    We specialize in off-market transactions, providing our clients with access to properties that never reach the public domain.
                </p>
            </div>
            <div className="flex flex-col">
                <div className="w-12 h-12 rounded-sm bg-[#2A2A2A] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-tertiary">analytics</span>
                </div>
                <h3 className="font-headline text-[28px] text-secondary mb-4">Market Intelligence</h3>
                <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                    Data-driven advisory ensuring your investments are secure, profitable, and aligned with global market trends.
                </p>
            </div>
            <div className="flex flex-col">
                <div className="w-12 h-12 rounded-sm bg-[#2A2A2A] flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-tertiary">verified_user</span>
                </div>
                <h3 className="font-headline text-[28px] text-secondary mb-4">Absolute Discretion</h3>
                <p className="font-body text-[16px] text-on-surface-variant leading-relaxed">
                    Privacy is paramount. We handle the entire acquisition process with complete confidentiality for high-net-worth individuals.
                </p>
            </div>
        </div>
    </section>

    {/* 3. Featured Properties */}
    <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-[#0A0A0A]">
        <div className="flex justify-between items-end mb-12 border-b border-[#2A2A2A] pb-6 fade-up">
            <h2 className="font-headline text-[40px] text-secondary">Featured Properties</h2>
            <a className="font-label text-[14px] text-tertiary hover:text-secondary transition-colors flex items-center gap-2" href="/properties">
                View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <a href="/property-single" className="group hover-lift block fade-up border border-[#2A2A2A] rounded-sm overflow-hidden bg-[#0A0A0A]">
                <div className="relative overflow-hidden aspect-[4/3]">
                    <img alt="The OMNIA Residence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1600607687931-cebf5748498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
                    <div className="absolute top-4 left-4 bg-secondary text-[#0A0A0A] px-3 py-1 text-[12px] font-label rounded-sm">Featured</div>
                </div>
                <div className="p-6">
                    <h3 className="font-headline text-[24px] text-secondary mb-2">The OMNIA Residence</h3>
                    <p className="font-label text-[14px] text-on-surface-variant mb-4">Palm Jumeirah</p>
                    <div className="flex justify-between items-center border-t border-[#2A2A2A] pt-4">
                        <span className="font-body text-[18px] text-tertiary">AED 45,000,000</span>
                        <div className="flex gap-4 font-label text-[14px] text-on-surface-variant">
                            <span>6 Beds</span>
                            <span>•</span>
                            <span>12,500 sqft</span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Property 2 */}
            <a href="/property-single" className="group hover-lift block fade-up border border-[#2A2A2A] rounded-sm overflow-hidden bg-[#0A0A0A]" >
                <div className="relative overflow-hidden aspect-[4/3]">
                    <img alt="Skyline Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
                </div>
                <div className="p-6">
                    <h3 className="font-headline text-[24px] text-secondary mb-2">Skyline Penthouse</h3>
                    <p className="font-label text-[14px] text-on-surface-variant mb-4">Downtown Dubai</p>
                    <div className="flex justify-between items-center border-t border-[#2A2A2A] pt-4">
                        <span className="font-body text-[18px] text-tertiary">AED 28,500,000</span>
                        <div className="flex gap-4 font-label text-[14px] text-on-surface-variant">
                            <span>4 Beds</span>
                            <span>•</span>
                            <span>6,200 sqft</span>
                        </div>
                    </div>
                </div>
            </a>

            {/* Property 3 */}
            <a href="/property-single" className="group hover-lift block fade-up border border-[#2A2A2A] rounded-sm overflow-hidden bg-[#0A0A0A]" >
                <div className="relative overflow-hidden aspect-[4/3]">
                    <img alt="Villa Vesper" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
                </div>
                <div className="p-6">
                    <h3 className="font-headline text-[24px] text-secondary mb-2">Villa Vesper</h3>
                    <p className="font-label text-[14px] text-on-surface-variant mb-4">Emirates Hills</p>
                    <div className="flex justify-between items-center border-t border-[#2A2A2A] pt-4">
                        <span className="font-body text-[18px] text-tertiary">Upon Request</span>
                        <div className="flex gap-4 font-label text-[14px] text-on-surface-variant">
                            <span>8 Beds</span>
                            <span>•</span>
                            <span>18,000 sqft</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>

    {/* 4. CTA / Tell me what to do */}
    <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-[#2A2A2A]/20 border-y border-[#2A2A2A] text-center">
        <div className="max-w-3xl mx-auto fade-up">
            <h2 className="font-headline text-[48px] text-secondary mb-6">Ready to expand your portfolio?</h2>
            <p className="font-body text-[18px] text-on-surface-variant mb-10">
                Connect with our advisory team to discuss off-market opportunities.
            </p>
            <a href="/contact" className="inline-block bg-tertiary text-[#0A0A0A] px-10 py-4 font-label text-[14px] hover:bg-secondary transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(201,169,97,0.2)]">
                Connect With Us Today
            </a>
        </div>
    </section>

    </main>
  );
}
