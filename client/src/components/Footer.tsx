/* ==========================================================
   Footer – Van Weenen Dakdekkers
   Design: Dark charcoal footer with orange accents
   ========================================================== */

import { Link } from "wouter";
import { Phone, MapPin, Star, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2329] text-white">
      {/* Main footer content */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#f97316] rounded-sm flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 10V20H10V15H14V20H19V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-['Raleway'] font-extrabold text-lg leading-tight">Van Weenen</div>
                <div className="text-[#f97316] text-xs font-['Nunito_Sans'] font-semibold tracking-widest uppercase">Dakdekkers</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Uw betrouwbare dakdekker in Moordrecht en omgeving. Vakmanschap, kwaliteit en eerlijkheid staan bij ons centraal.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className={i <= 4 ? "fill-[#f97316] text-[#f97316]" : "fill-[#f97316]/60 text-[#f97316]/60"} />
              ))}
              <span className="text-white/80 text-sm ml-2 font-semibold">4.8 / 5</span>
            </div>
            <p className="text-white/50 text-xs">Google Beoordelingen</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-['Raleway'] font-bold text-base mb-5 text-white">Navigatie</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/diensten", label: "Onze Diensten" },
                { href: "/over-ons", label: "Over Ons" },
                { href: "/beoordelingen", label: "Beoordelingen" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-white/65 hover:text-[#f97316] text-sm transition-colors duration-200">
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Raleway'] font-bold text-base mb-5 text-white">Diensten</h3>
            <ul className="space-y-2">
              {[
                "Dakinstallatie",
                "Dakreparatie",
                "Dakonderhoud",
                "Lekdetectie",
                "Plat dak",
                "Hellend dak",
              ].map(service => (
                <li key={service}>
                  <Link href="/diensten" className="flex items-center gap-2 text-white/65 hover:text-[#f97316] text-sm transition-colors duration-200">
                    <ChevronRight size={14} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Raleway'] font-bold text-base mb-5 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+31641107559" className="flex items-start gap-3 text-white/65 hover:text-[#f97316] transition-colors group">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-[#f97316]" />
                  <div>
                    <div className="text-sm font-semibold text-white/80">Telefoon</div>
                    <div className="text-sm">+31 6 41107559</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/65">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white/80">Adres</div>
                    <div className="text-sm">Crocusstraat 2</div>
                    <div className="text-sm">2841 AJ Moordrecht</div>
                  </div>
                </div>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white px-5 py-2.5 rounded text-sm font-['Raleway'] font-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Offerte Aanvragen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {currentYear} Van Weenen Dakdekkers. Alle rechten voorbehouden.
          </p>
          <p className="text-white/30 text-xs">
            Dakdekker Moordrecht · Dakreparatie · Dakinstallatie
          </p>
        </div>
      </div>
    </footer>
  );
}
