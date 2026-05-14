import os
import re

nav_html = '''<!-- TopNavBar -->
<nav class="bg-surface/40 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] fixed top-0 w-full flex flex-col px-margin-mobile md:px-margin-desktop py-5 z-50 transition-all">
    <div class="flex justify-between items-center w-full">
        <a class="font-headline text-[24px] text-tertiary italic tracking-tight" href="index.html">Infinity Views</a>
        
        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-6">
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="about.html">About</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="services.html">Services</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="properties.html">Properties</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="buy.html">Buy</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="rent.html">Rent</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="off-plan.html">Off-Plan</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="insights.html">Insights</a>
            <a class="font-label text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-white transition-colors" href="contact.html">Contact</a>
            
            <a href="hot-offers.html" class="font-label text-[11px] uppercase tracking-[0.15em] text-[#131313] bg-tertiary hover:bg-white px-5 py-2.5 transition-all duration-300 shadow-[0_0_15px_rgba(228,194,120,0.2)]">
                Hot Offers
            </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button id="menu-btn" class="lg:hidden text-tertiary focus:outline-none">
            <span class="material-symbols-outlined text-3xl">menu</span>
        </button>
    </div>

    <!-- Mobile Menu Content -->
    <div id="mobile-menu" class="lg:hidden flex flex-col gap-5 pt-6 mt-4 border-t border-white/10" style="transition: max-height 0.4s ease-in-out, opacity 0.3s ease; max-height: 0; overflow: hidden; opacity: 0;">
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="about.html">About</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="services.html">Services</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="properties.html">Properties</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="buy.html">Buy</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="rent.html">Rent</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="off-plan.html">Off-Plan</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="insights.html">Insights</a>
        <a class="font-label text-[12px] uppercase tracking-[0.15em] text-on-surface-variant" href="contact.html">Contact</a>
        <a href="hot-offers.html" class="inline-block mt-2 font-label text-[12px] uppercase tracking-[0.15em] text-[#131313] bg-tertiary text-center px-6 py-3">Hot Offers</a>
    </div>
</nav>'''

js_html = '''
<script>
    // Mobile Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            if (mobileMenu.style.maxHeight === '0px' || mobileMenu.style.maxHeight === '') {
                mobileMenu.style.maxHeight = '500px';
                mobileMenu.style.opacity = '1';
                menuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">close</span>';
            } else {
                mobileMenu.style.maxHeight = '0px';
                mobileMenu.style.opacity = '0';
                menuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            }
        });
    }
</script>
</body>'''

files = ['about.html', 'properties.html', 'contact.html', 'property-single.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace nav
    content = re.sub(r'<!-- TopNavBar -->.*?<\/nav>', nav_html, content, flags=re.DOTALL)
    
    # Ensure JS is there if not already
    if 'Mobile Menu Logic' not in content:
        content = re.sub(r'<\/body>', js_html, content)
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Updated all navs.')
