import re

with open('about.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pages to create and their titles/headings
pages = {
    'services.html': ('Services', 'Private Client Advisory', 'Comprehensive management of your real estate portfolio.'),
    'buy.html': ('Buy', 'Acquire the Exceptional', 'Off-market properties and signature villas for the discerning buyer.'),
    'rent.html': ('Rent', 'Elite Leasing', "Short and long-term luxury rentals in Dubai's prime locations."),
    'off-plan.html': ('Off-Plan', 'Future Legacies', "Pre-market access to Dubai's most anticipated architectural projects."),
    'insights.html': ('Insights', 'Market Intelligence', 'Data-driven analysis and discrete reports for our private clients.'),
    'hot-offers.html': ('Hot Offers', 'Exclusive Opportunities', 'Distressed assets and motivated sellers providing high ROI.')
}

for filename, (title, heading, desc) in pages.items():
    new_content = re.sub(r'<title>.*?<\/title>', f'<title>{title} | Infinity Views</title>', content)
    
    # Replace main section
    main_pattern = r'<main.*?>.*?<\/main>'
    new_main = f'''<main class="flex-grow pt-[160px] px-margin-mobile md:px-margin-desktop mb-section-gap">
        <section class="max-w-7xl mx-auto text-center">
            <h1 class="font-headline text-[48px] md:text-[72px] text-on-surface mb-8 font-light">{heading}</h1>
            <p class="font-body text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-16">{desc}</p>
            <div class="p-24 border border-white/10 rounded-lg bg-surface/50 backdrop-blur-sm">
                <p class="font-label text-tertiary uppercase tracking-[0.2em]">Content in Development</p>
            </div>
        </section>
    </main>'''
    
    new_content = re.sub(main_pattern, new_main, new_content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

print('Generated new pages.')
