import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
        <div className="flex justify-between items-end mb-16 hairline-b pb-4">
            <h1 className="font-headline text-[48px] font-light">The Archive</h1>
            <div className="flex gap-6 font-label text-[12px] uppercase tracking-[0.1em]">
                <button className="text-tertiary">All</button>
                <button className="text-on-surface-variant hover:text-on-surface">Villas</button>
                <button className="text-on-surface-variant hover:text-on-surface">Penthouses</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter gap-y-24">
            
            {/* Item 1 */}
            <a href="/property-single" className="md:col-span-8 group block">
                <div className="relative overflow-hidden mb-6 aspect-[16/9] bg-surface-container-lowest">
                    <img src="https://images.unsplash.com/photo-1600607687931-cebf5748498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Villa" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex justify-between items-start hairline-t pt-4">
                    <div>
                        <h3 className="font-headline text-[24px] mb-2">The OMNIA Residence</h3>
                        <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-[0.1em]">Palm Jumeirah</p>
                    </div>
                    <p className="font-body text-[18px] text-tertiary">AED 45,000,000</p>
                </div>
            </a>

            {/* Item 2 */}
            <a href="/property-single" className="md:col-span-4 md:mt-32 group block">
                <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-surface-container-lowest">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Penthouse" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex justify-between items-start hairline-t pt-4">
                    <div>
                        <h3 className="font-headline text-[24px] mb-2">Skyline Penthouse</h3>
                        <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-[0.1em]">Downtown</p>
                    </div>
                </div>
            </a>

            {/* Item 3 */}
            <a href="/property-single" className="md:col-span-6 group block">
                <div className="relative overflow-hidden mb-6 aspect-square bg-surface-container-lowest">
                    <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Mansion" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex justify-between items-start hairline-t pt-4">
                    <div>
                        <h3 className="font-headline text-[24px] mb-2">Villa Vesper</h3>
                        <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-[0.1em]">Emirates Hills</p>
                    </div>
                    <p className="font-body text-[18px] text-tertiary">Upon Request</p>
                </div>
            </a>

            {/* Item 4 */}
            <a href="/property-single" className="md:col-span-6 md:mt-24 group block">
                <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-surface-container-lowest">
                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Estate" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="flex justify-between items-start hairline-t pt-4">
                    <div>
                        <h3 className="font-headline text-[24px] mb-2">The Glass Pavilion</h3>
                        <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-[0.1em]">District One</p>
                    </div>
                    <p className="font-body text-[18px] text-tertiary">AED 32,000,000</p>
                </div>
            </a>

        </div>
    
    </main>
  );
}
