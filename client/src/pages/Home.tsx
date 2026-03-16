/* ==========================================================
   Home Page – Van Weenen Dakdekkers
   Design: Modern Dutch Craftsmanship
   Sections: Hero, Stats, Services, Why Us, Review Highlight, CTA
   ========================================================== */

import { Link } from "wouter";
import { Phone, ChevronRight, Star, Shield, Clock, Award, Wrench, Home as HomeIcon, Search, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/hero-roofing-ABbh78UKDU2FsLdUGQnC4T.webp";
const ROOF_MAINTENANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/roof-maintenance-gwXjCWXDPCEJvJL7EeezFC.webp";

const services = [
  {
    icon: <HomeIcon size={28} />,
    title: "Dakinstallatie",
    desc: "Volledige installatie van hellende en platte daken met hoogwaardige materialen en vakkundige uitvoering.",
    href: "/diensten",
  },
  {
    icon: <Wrench size={28} />,
    title: "Dakreparatie",
    desc: "Snelle en duurzame reparatie van beschadigde dakpannen, dakbedekking en dakconstructies.",
    href: "/diensten",
  },
  {
    icon: <Shield size={28} />,
    title: "Dakonderhoud",
    desc: "Preventief onderhoud om uw dak in optimale conditie te houden en dure reparaties te voorkomen.",
    href: "/diensten",
  },
  {
    icon: <Search size={28} />,
    title: "Lekdetectie",
    desc: "Professionele opsporing van lekken en vochtproblemen met moderne detectiemethoden.",
    href: "/diensten",
  },
  {
    icon: <Layers size={28} />,
    title: "Plat Dak",
    desc: "Specialistische aanleg en renovatie van platte daken met EPDM, bitumen of PVC dakbedekking.",
    href: "/diensten",
  },
  {
    icon: <HomeIcon size={28} />,
    title: "Hellend Dak",
    desc: "Vakkundige verwerking van dakpannen, leien en andere materialen voor hellende daken.",
    href: "/diensten",
  },
];

const stats = [
  { value: "15+", label: "Jaar Ervaring" },
  { value: "500+", label: "Projecten Voltooid" },
  { value: "4.8★", label: "Google Rating" },
  { value: "100%", label: "Tevredenheidsgarantie" },
];

const reviews = [
  {
    name: "Peter van den Berg",
    rating: 5,
    text: "Van Weenen heeft ons dak perfect gerepareerd. Snel, netjes en voor een eerlijke prijs. Absoluut aan te raden!",
    date: "2 maanden geleden",
  },
  {
    name: "Marieke de Vries",
    rating: 5,
    text: "Uitstekend werk geleverd aan ons platte dak. Professioneel team, goede communicatie en kwaliteitswerk.",
    date: "3 maanden geleden",
  },
  {
    name: "Johan Smit",
    rating: 5,
    text: "Na een storm had ik snel hulp nodig. Van Weenen was er dezelfde dag nog. Heel tevreden met het resultaat!",
    date: "4 maanden geleden",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? "fill-[#f97316] text-[#f97316]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Van Weenen Dakdekkers – Professionele Dakdekker in Moordrecht"
        description="Van Weenen Dakdekkers is uw betrouwbare dakdekker in Moordrecht en omgeving. Dakinstallatie, dakreparatie, dakonderhoud en lekdetectie. Bel: +31 6 41107559"
        keywords="dakdekker Moordrecht, dakreparatie Moordrecht, dakinstallatie Moordrecht, dakonderhoud Moordrecht"
        canonical="/"
      />
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Van Weenen Dakdekkers aan het werk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e2329]/90 via-[#1e2329]/70 to-[#1e2329]/30" />
        </div>

        {/* Orange diagonal accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f97316]" />

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316] px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-semibold mb-6">
              <Star size={14} className="fill-[#f97316]" />
              4.8 Google Rating · Moordrecht
            </div>

            <h1 className="font-['Raleway'] font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Professionele<br />
              <span className="text-[#f97316]">Dakdekker</span><br />
              in Moordrecht
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Van Weenen Dakdekkers is uw betrouwbare partner voor alle dakwerkzaamheden in Moordrecht en omgeving. Van dakinstallatie tot lekdetectie — wij leveren vakmanschap van topkwaliteit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/30"
              >
                Offerte Aanvragen
                <ChevronRight size={18} />
              </Link>
              <a
                href="tel:+31641107559"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e2329] px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200"
              >
                <Phone size={18} />
                +31 6 41107559
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <Shield size={16} />, text: "Vakkundig & Verzekerd" },
                { icon: <Clock size={16} />, text: "Snel Ter Plaatse" },
                { icon: <Award size={16} />, text: "15+ Jaar Ervaring" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm font-['Nunito_Sans']">
                  <span className="text-[#f97316]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#f97316] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/30">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white">{stat.value}</div>
                <div className="text-white/80 text-sm font-['Nunito_Sans'] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="orange-accent-line mb-5" />
              <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-6">
                Uw Dakspecialist in<br />Moordrecht & Omgeving
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4 font-['Nunito_Sans']">
                Van Weenen Dakdekkers is al meer dan 15 jaar actief in de regio Moordrecht. Wij zijn gespecialiseerd in alle soorten dakwerkzaamheden voor zowel particulieren als bedrijven.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6 font-['Nunito_Sans']">
                Of het nu gaat om een kleine reparatie of een complete dakvervanging — wij staan voor u klaar met eerlijk advies, scherpe prijzen en vakkundige uitvoering. Uw tevredenheid is onze garantie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/over-ons"
                  className="inline-flex items-center gap-2 text-[#f97316] font-['Raleway'] font-bold hover:gap-3 transition-all duration-200"
                >
                  Meer over ons <ChevronRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1e2329] hover:bg-[#2a3040] text-white px-6 py-3 rounded font-['Raleway'] font-bold text-sm transition-all duration-200"
                >
                  Gratis Offerte
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={ROOF_MAINTENANCE_IMG}
                alt="Dakdekker werkzaamheden Moordrecht"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#f97316] text-white p-5 rounded-lg shadow-xl">
                <div className="font-['Raleway'] font-extrabold text-2xl">4.8</div>
                <div className="flex gap-0.5 my-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className={i <= 4 ? "fill-white text-white" : "fill-white/50 text-white/50"} />
                  ))}
                </div>
                <div className="text-white/80 text-xs font-['Nunito_Sans']">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Onze Dakdiensten
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto font-['Nunito_Sans']">
              Van Van Weenen Dakdekkers kunt u rekenen op een volledig pakket aan dakwerkzaamheden, uitgevoerd door ervaren vakmensen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="service-card bg-white rounded-lg p-7 border border-gray-100 hover:border-[#f97316]/30 group block"
              >
                <div className="w-14 h-14 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] mb-5 group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="font-['Raleway'] font-bold text-lg text-[#1e2329] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-['Nunito_Sans']">{service.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-[#f97316] text-sm font-['Raleway'] font-semibold">
                  Meer info <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-['Raleway'] font-bold transition-all duration-200 hover:-translate-y-0.5"
            >
              Alle Diensten Bekijken
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-[#1e2329]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="orange-accent-line mb-5" />
              <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white mb-6">
                Waarom Kiezen voor<br />Van Weenen?
              </h2>
              <div className="space-y-5">
                {[
                  { icon: <Award size={20} />, title: "Vakmanschap & Kwaliteit", desc: "Wij werken uitsluitend met hoogwaardige materialen van erkende fabrikanten en staan garant voor duurzaam werk." },
                  { icon: <Clock size={20} />, title: "Snelle Responstijd", desc: "Bij spoedreparaties zijn wij snel ter plaatse. Wij begrijpen dat dakproblemen niet kunnen wachten." },
                  { icon: <Shield size={20} />, title: "Volledig Verzekerd", desc: "Al onze werkzaamheden zijn volledig verzekerd. U heeft nooit onverwachte kosten of risico's." },
                  { icon: <Star size={20} />, title: "Lokale Specialist", desc: "Als Moordrechtse onderneming kennen wij de lokale bouwstijlen en omstandigheden als geen ander." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#f97316]/20 rounded-lg flex items-center justify-center text-[#f97316] flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-['Raleway'] font-bold text-white text-base mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed font-['Nunito_Sans']">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f97316] rounded-lg p-6 text-white">
                <div className="font-['Raleway'] font-extrabold text-4xl mb-2">15+</div>
                <div className="font-['Nunito_Sans'] text-white/80 text-sm">Jaar ervaring in de regio</div>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-white">
                <div className="font-['Raleway'] font-extrabold text-4xl mb-2">500+</div>
                <div className="font-['Nunito_Sans'] text-white/80 text-sm">Tevreden klanten</div>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-white">
                <div className="font-['Raleway'] font-extrabold text-4xl mb-2">4.8★</div>
                <div className="font-['Nunito_Sans'] text-white/80 text-sm">Gemiddelde Google score</div>
              </div>
              <div className="bg-[#f97316]/20 border border-[#f97316]/30 rounded-lg p-6 text-white">
                <div className="font-['Raleway'] font-extrabold text-4xl mb-2">100%</div>
                <div className="font-['Nunito_Sans'] text-white/80 text-sm">Tevredenheidsgarantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={22} className={i <= 4 ? "fill-[#f97316] text-[#f97316]" : "fill-[#f97316]/60 text-[#f97316]/60"} />
              ))}
              <span className="font-['Raleway'] font-extrabold text-2xl text-[#1e2329] ml-2">4.8</span>
            </div>
            <p className="text-gray-400 text-sm font-['Nunito_Sans']">Gebaseerd op 5 Google beoordelingen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-[#f8f9fa] rounded-lg p-7 border border-gray-100">
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5 font-['Nunito_Sans'] italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-['Raleway'] font-bold text-[#1e2329] text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs font-['Nunito_Sans']">{review.date}</div>
                  </div>
                  <div className="text-xs text-gray-400 font-['Nunito_Sans'] flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/beoordelingen"
              className="inline-flex items-center gap-2 text-[#f97316] font-['Raleway'] font-bold hover:gap-3 transition-all duration-200"
            >
              Alle beoordelingen bekijken <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-[#f97316]">
        <div className="container text-center">
          <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white mb-4">
            Klaar voor een Gratis Dakinspectie?
          </h2>
          <p className="text-white/85 text-lg mb-8 font-['Nunito_Sans'] max-w-xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Wij zijn snel ter plaatse in Moordrecht en omgeving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#f97316] hover:bg-gray-100 px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Offerte Aanvragen
              <ChevronRight size={18} />
            </Link>
            <a
              href="tel:+31641107559"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#f97316] px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200"
            >
              <Phone size={18} />
              +31 6 41107559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
