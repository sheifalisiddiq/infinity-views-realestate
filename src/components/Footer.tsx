import Link from "next/link";

const explore = [
  { href: "/buy",        label: "Buy"        },
  { href: "/rent",       label: "Rent"       },
  { href: "/off-plan",   label: "Off-Plan"   },
  { href: "/hot-offers", label: "Hot Offers" },
  { href: "/properties", label: "Collection" },
];

const company = [
  { href: "/about",    label: "About"    },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/contact",  label: "Contact"  },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms",   label: "Terms of Use"   },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] px-margin-mobile md:px-margin-desktop py-20 md:py-24">
      <div className="max-w-7xl mx-auto">

        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 pb-16 border-b border-[#1A1A1A]">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-headline text-[26px] text-secondary tracking-tight block mb-4 italic">
              Infinity Views
            </Link>
            <p className="font-body text-[14px] text-on-surface-variant leading-relaxed max-w-[220px]">
              Dubai's foremost boutique authority on architectural real estate and discreet acquisitions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-6">Explore</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-label text-[13px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-6">Company</p>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-label text-[13px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-6">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@infinityviews.ae"
                  className="font-label text-[13px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
                >
                  hello@infinityviews.ae
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-label text-[13px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
                >
                  Private Inquiry Form
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-label text-[13px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary mb-4">Location</p>
              <p className="font-body text-[13px] text-on-surface-variant leading-relaxed">
                DIFC, Gate Avenue<br />
                Dubai, UAE
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="font-label text-[12px] text-on-surface-variant">
            © 2026 Infinity Views. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-label text-[12px] text-on-surface-variant hover:text-secondary transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
