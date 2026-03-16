/* ==========================================================
   About Page – Van Weenen Dakdekkers
   Design: Modern Dutch Craftsmanship
   Sections: Hero, Story, Values, Team, Service Area, CTA
   ========================================================== */

import { Link } from "wouter";
import { Phone, ChevronRight, MapPin, Award, Users, Heart, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/about-team-86ujkXKyUSxVoAVbdNrvRk.webp";
const MAINTENANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/roof-maintenance-gwXjCWXDPCEJvJL7EeezFC.webp";

const values = [
  {
    icon: <Award size={28} />,
    title: "Vakmanschap",
    desc: "Wij leveren altijd werk van de hoogste kwaliteit. Onze dakdekkers zijn vakkundig opgeleid en werken met de beste materialen.",
  },
  {
    icon: <Heart size={28} />,
    title: "Betrouwbaarheid",
    desc: "Afspraak is afspraak. Wij komen onze beloftes na en communiceren transparant over planning en kosten.",
  },
  {
    icon: <Users size={28} />,
    title: "Klantgerichtheid",
    desc: "Uw tevredenheid staat centraal. Wij luisteren naar uw wensen en geven eerlijk advies, ook als dat betekent dat u elders beter af bent.",
  },
  {
    icon: <Wrench size={28} />,
    title: "Duurzaamheid",
    desc: "Wij werken met duurzame materialen en methoden die de levensduur van uw dak maximaliseren en het milieu respecteren.",
  },
];

const serviceAreas = [
  "Moordrecht", "Gouda", "Waddinxveen", "Nieuwerkerk aan den IJssel",
  "Capelle aan den IJssel", "Zevenhuizen", "Bergschenhoek", "Bleiswijk",
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Over Ons – Van Weenen Dakdekkers Moordrecht"
        description="Van Weenen Dakdekkers: meer dan 15 jaar ervaring als dakspecialist in Moordrecht. Lokale experts met vakmanschap, betrouwbaarheid en kwaliteitsgarantie."
        keywords="over Van Weenen dakdekkers, dakspecialist Moordrecht, dakdekker Moordrecht ervaring"
        canonical="/over-ons"
      />
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-16 md:pt-20 bg-[#1e2329] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={ABOUT_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f97316]" />
        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316] px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-semibold mb-5">
              <MapPin size={14} /> Gevestigd in Moordrecht
            </div>
            <h1 className="font-['Raleway'] font-extrabold text-4xl md:text-5xl text-white mb-5">
              Over <span className="text-[#f97316]">Van Weenen</span><br />Dakdekkers
            </h1>
            <p className="text-white/75 text-lg font-['Nunito_Sans'] leading-relaxed">
              Meer dan 15 jaar ervaring als dakspecialist in Moordrecht en de regio. Wij zijn trots op ons vakmanschap, onze betrouwbaarheid en de langdurige relaties met onze klanten.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="orange-accent-line mb-5" />
              <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-6">
                Ons Verhaal
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-5 font-['Nunito_Sans']">
                Van Weenen Dakdekkers is een familiebedrijf dat al meer dan 15 jaar actief is in Moordrecht en de omliggende gemeenten. Het bedrijf is opgericht vanuit een passie voor het vak en een streven naar kwaliteit en betrouwbaarheid.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-5 font-['Nunito_Sans']">
                Wij zijn gevestigd aan de Crocusstraat 2 in Moordrecht en bedienen klanten in een ruime regio rondom Gouda. Ons team bestaat uit ervaren dakdekkers die met trots hun vak uitoefenen.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 font-['Nunito_Sans']">
                Wat ons onderscheidt is onze persoonlijke aanpak. Wij zijn geen groot anoniem bedrijf, maar een lokale specialist die u bij naam kent en altijd bereikbaar is voor vragen en advies. Uw dak is in goede handen bij Van Weenen.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f8f9fa] rounded-lg p-5 text-center">
                  <div className="font-['Raleway'] font-extrabold text-3xl text-[#f97316] mb-1">15+</div>
                  <div className="text-gray-600 text-sm font-['Nunito_Sans']">Jaar ervaring</div>
                </div>
                <div className="bg-[#f8f9fa] rounded-lg p-5 text-center">
                  <div className="font-['Raleway'] font-extrabold text-3xl text-[#f97316] mb-1">500+</div>
                  <div className="text-gray-600 text-sm font-['Nunito_Sans']">Tevreden klanten</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Van Weenen Dakdekker Moordrecht"
                className="w-full h-[480px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#1e2329] text-white p-5 rounded-lg shadow-xl border border-white/10">
                <div className="font-['Raleway'] font-extrabold text-xl mb-1">Crocusstraat 2</div>
                <div className="text-white/60 text-sm font-['Nunito_Sans']">2841 AJ Moordrecht</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Onze Kernwaarden
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto font-['Nunito_Sans']">
              Deze waarden vormen de basis van alles wat wij doen. Ze zijn niet alleen woorden, maar worden dagelijks in de praktijk gebracht.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-lg p-7 border border-gray-100 service-card">
                <div className="w-14 h-14 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] mb-5">
                  {value.icon}
                </div>
                <h3 className="font-['Raleway'] font-bold text-lg text-[#1e2329] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-['Nunito_Sans']">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-[#1e2329]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src={MAINTENANCE_IMG}
                alt="Dakwerkzaamheden Moordrecht"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="orange-accent-line mb-5" />
              <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white mb-6">
                Onze Toewijding aan Kwaliteit
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-5 font-['Nunito_Sans']">
                Bij Van Weenen Dakdekkers staat kwaliteit altijd voorop. Wij gebruiken uitsluitend materialen van erkende fabrikanten en werken volgens de geldende normen en richtlijnen.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 font-['Nunito_Sans']">
                Onze dakdekkers volgen regelmatig bijscholing om op de hoogte te blijven van de nieuwste technieken en materialen. Zo garanderen wij dat u altijd het beste krijgt wat de markt te bieden heeft.
              </p>
              <div className="space-y-3">
                {[
                  "Gecertificeerde dakdekkers",
                  "Hoogwaardige A-merk materialen",
                  "Volledig verzekerd",
                  "Garantie op alle werkzaamheden",
                  "Transparante prijsstelling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80 font-['Nunito_Sans'] text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={12} className="text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Ons Werkgebied
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto font-['Nunito_Sans']">
              Wij zijn actief in Moordrecht en de omliggende gemeenten. Woont u in een van onderstaande plaatsen? Dan kunt u op ons rekenen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-[#f8f9fa] border border-gray-200 text-[#1e2329] px-5 py-2.5 rounded-full text-sm font-['Nunito_Sans'] font-semibold"
              >
                <MapPin size={14} className="text-[#f97316]" />
                {area}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-6 font-['Nunito_Sans']">
            Staat uw gemeente er niet bij? Neem contact op — wij kijken graag of wij u kunnen helpen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f97316]">
        <div className="container text-center">
          <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white mb-4">
            Maak Kennis met Van Weenen
          </h2>
          <p className="text-white/85 text-lg mb-8 font-['Nunito_Sans'] max-w-xl mx-auto">
            Bel ons voor een vrijblijvend gesprek of vraag direct een offerte aan. Wij staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#f97316] hover:bg-gray-100 px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
              Offerte Aanvragen <ChevronRight size={18} />
            </Link>
            <a href="tel:+31641107559" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#f97316] px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200">
              <Phone size={18} /> +31 6 41107559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
