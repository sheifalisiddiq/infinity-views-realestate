import Link from "next/link";

export default function Page() {
  return (
    <main className="flex-grow pt-[80px]">
      
        {/* Header Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-20">
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Concierge</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Connect with our dedicated advisory team. Whether acquiring, divesting, or seeking discrete market intelligence, our private client services are tailored to your specific objectives.
            </p>
        </section>

        {/* Contact Form & Info */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-section-gap">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                
                {/* Left: Form */}
                <div className="md:col-span-7 pr-0 md:pr-12">
                    <form className="flex flex-col gap-10">
                        {/* Type Selection */}
                        <div>
                            <p className="font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-4">I Want To:</p>
                            <div className="flex gap-4 sm:gap-8 font-label-sm text-label-sm uppercase tracking-[0.1em]">
                                <button type="button" className="text-tertiary">Buy</button>
                                <span className="text-on-surface-variant">/</span>
                                <button type="button" className="text-on-surface-variant hover:text-on-surface transition-colors">Rent</button>
                                <span className="text-on-surface-variant">/</span>
                                <button type="button" className="text-on-surface-variant hover:text-on-surface transition-colors">Sell</button>
                                <span className="text-on-surface-variant">/</span>
                                <button type="button" className="text-on-surface-variant hover:text-on-surface transition-colors">Invest</button>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="relative">
                            <label className="block font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Full Name</label>
                            <input type="text" className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-on-surface focus:ring-0 px-0 py-2 transition-colors" placeholder="" />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="relative">
                                <label className="block font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Email Address</label>
                                <input type="email" className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-on-surface focus:ring-0 px-0 py-2 transition-colors" placeholder="" />
                            </div>
                            <div className="relative">
                                <label className="block font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Phone Number</label>
                                <input type="tel" className="w-full bg-transparent border-0 border-b border-[#2A2A2A] text-on-surface focus:ring-0 px-0 py-2 transition-colors" placeholder="" />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <label className="block font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-2">Message (Optional)</label>
                            <textarea rows={3} className="w-full bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 py-3 text-on-surface focus:ring-0 focus:border-tertiary transition-colors" placeholder="How can we assist you?"></textarea>
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <button type="submit" className="bg-tertiary text-[#131313] font-label-sm text-label-sm uppercase tracking-[0.1em] px-8 py-4 hover:bg-white transition-colors duration-300">
                                Submit Inquiry
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right: Information */}
                <div className="md:col-span-5 md:pl-12 hairline-l border-[#2A2A2A] pt-12 md:pt-0 mt-12 md:mt-0">
                    <div className="flex flex-col gap-12 h-full justify-between">
                        <div>
                            <h4 className="font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-4">Global Headquarters</h4>
                            <p className="font-body-md text-body-md text-on-surface">
                                One World Trade Center<br />
                                Suite 8500<br />
                                New York, NY 10007<br />
                                United States
                            </p>
                        </div>

                        <div>
                            <h4 className="font-label-sm text-label-sm uppercase tracking-[0.1em] text-on-surface-variant mb-4">Direct Contact</h4>
                            <p className="font-body-md text-body-md text-on-surface mb-1">
                                +1 (212) 555-0198
                            </p>
                            <p className="font-body-md text-body-md text-on-surface">
                                advisory@infinityviews.com
                            </p>
                        </div>

                        <div>
                            <a href="#" className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-[0.1em] text-tertiary hover:text-white transition-colors">
                                Secure Chat via WhatsApp
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[500px] bg-[#0A0A0A] relative overflow-hidden border-t border-b border-[#2A2A2A]">
            {/* Subtle abstract map grid representing a dark map */}
            <div className="absolute inset-0 opacity-20" ></div>
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Location Pin */}
                <div className="relative flex flex-col items-center">
                    <span className="material-symbols-outlined text-tertiary text-4xl drop-shadow-[0_0_15px_rgba(228,194,120,0.4)]">location_on</span>
                    {/* Ripple effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-tertiary/30 rounded-full animate-ping opacity-50"></div>
                </div>
            </div>
        </section>
    
    </main>
  );
}
