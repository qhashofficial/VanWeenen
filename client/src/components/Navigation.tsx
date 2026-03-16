/* ==========================================================
   Navigation – Van Weenen Dakdekkers
   Design: Sticky dark header with orange CTA, mobile hamburger
   ========================================================== */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/beoordelingen", label: "Beoordelingen" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1e2329] shadow-xl shadow-black/30"
            : "bg-[#1e2329]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#f97316] rounded-sm flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L12 3L21 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 10V20H10V15H14V20H19V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-['Raleway'] font-800 text-lg leading-tight font-extrabold">
                  Van Weenen
                </div>
                <div className="text-[#f97316] text-xs font-['Nunito_Sans'] font-600 tracking-widest uppercase">
                  Dakdekkers
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded text-sm font-['Nunito_Sans'] font-600 transition-colors duration-200 ${
                    location === link.href
                      ? "text-[#f97316]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+31641107559"
                className="hidden sm:flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded text-sm font-['Raleway'] font-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={15} />
                <span>Bel Nu</span>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
                aria-label="Menu openen"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1e2329] border-t border-white/10">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded text-base font-['Nunito_Sans'] font-600 transition-colors ${
                    location === link.href
                      ? "text-[#f97316] bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+31641107559"
                className="mt-2 flex items-center justify-center gap-2 bg-[#f97316] text-white px-4 py-3 rounded font-['Raleway'] font-700 text-base"
              >
                <Phone size={18} />
                +31 6 41107559
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile floating call button */}
      <a
        href="tel:+31641107559"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-5 py-3 rounded-full shadow-2xl shadow-orange-500/40 font-['Raleway'] font-700 text-sm transition-all duration-200 hover:scale-105"
        aria-label="Bel Van Weenen Dakdekkers"
      >
        <Phone size={18} />
        <span>Bel Nu</span>
      </a>
    </>
  );
}
