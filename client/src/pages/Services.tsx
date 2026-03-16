/* ==========================================================
   Services Page – Van Weenen Dakdekkers
   Design: Modern Dutch Craftsmanship
   Sections: Hero, All Services Detail, Process, CTA
   ========================================================== */

import { Link } from "wouter";
import { Phone, ChevronRight, CheckCircle, Home as HomeIcon, Wrench, Shield, Search, Layers, Droplets } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const REPAIR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/roof-repair-4JXniqcweWVmM6Kagk3zQi.webp";
const FLAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/flat-roof-NQeU948QzzLj8cLHTd5idX.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/hero-roofing-ABbh78UKDU2FsLdUGQnC4T.webp";

const services = [
  {
    id: "dakinstallatie",
    icon: <HomeIcon size={32} />,
    title: "Dakinstallatie",
    subtitle: "Nieuwbouw & Vervanging",
    desc: "Een nieuw dak is een grote investering. Bij Van Weenen Dakdekkers zorgen wij voor een vakkundige installatie die tientallen jaren meegaat. Wij werken met hoogwaardige materialen van erkende fabrikanten en houden ons aan alle bouwnormen.",
    features: [
      "Volledig nieuwe dakconstructie",
      "Dakpannen, leien en bitumen",
      "Inclusief dakisolatie",
      "Dakgoten en afvoeren",
      "Garantie op materiaal en arbeid",
    ],
    img: HERO_IMG,
    imgAlt: "Dakinstallatie door Van Weenen",
  },
  {
    id: "dakreparatie",
    icon: <Wrench size={32} />,
    title: "Dakreparatie",
    subtitle: "Snel & Duurzaam",
    desc: "Heeft u last van lekkage, beschadigde dakpannen of andere problemen met uw dak? Van Weenen Dakdekkers repareert snel en vakkundig. Wij diagnosticeren het probleem grondig en lossen het duurzaam op, zodat u er jarenlang geen omkijken naar heeft.",
    features: [
      "Vervanging van beschadigde dakpannen",
      "Reparatie van dakbedekking",
      "Herstel van dakranden en dakgoten",
      "Noodreparaties bij storm- of hagelschade",
      "Reparatie van dakdoorvoeren",
    ],
    img: REPAIR_IMG,
    imgAlt: "Dakreparatie Moordrecht",
  },
  {
    id: "dakonderhoud",
    icon: <Shield size={32} />,
    title: "Dakonderhoud",
    subtitle: "Preventief & Planmatig",
    desc: "Regelmatig onderhoud verlengt de levensduur van uw dak aanzienlijk en voorkomt dure reparaties. Van Weenen Dakdekkers biedt uitgebreide onderhoudspakketten voor zowel particulieren als bedrijven. Wij inspecteren, reinigen en onderhouden uw dak professioneel.",
    features: [
      "Jaarlijkse dakinspectie",
      "Reiniging van dakgoten en afvoeren",
      "Verwijdering van mos en algen",
      "Controle van dakdoorvoeren",
      "Onderhoudsrapport na afloop",
    ],
    img: FLAT_IMG,
    imgAlt: "Dakonderhoud Moordrecht",
  },
  {
    id: "lekdetectie",
    icon: <Search size={32} />,
    title: "Lekdetectie",
    subtitle: "Professionele Opsporing",
    desc: "Een lekkend dak kan ernstige schade veroorzaken aan uw woning of bedrijfspand. Met moderne detectiemethoden sporen wij lekken snel en nauwkeurig op, ook als ze moeilijk zichtbaar zijn. Na de detectie geven wij een helder advies en voeren wij de reparatie vakkundig uit.",
    features: [
      "Thermografische inspectie",
      "Vochtmeting in dakconstructie",
      "Visuele inspectie met drone",
      "Gedetailleerd inspectierapport",
      "Directe reparatie mogelijk",
    ],
    img: HERO_IMG,
    imgAlt: "Lekdetectie dak Moordrecht",
  },
  {
    id: "plat-dak",
    icon: <Layers size={32} />,
    title: "Plat Dak",
    subtitle: "EPDM · Bitumen · PVC",
    desc: "Platte daken vragen om specialistische kennis en materialen. Van Weenen Dakdekkers is gespecialiseerd in de aanleg, renovatie en het onderhoud van platte daken. Wij werken met EPDM, bitumen en PVC dakbedekking en zorgen voor een waterdichte en duurzame oplossing.",
    features: [
      "EPDM dakbedekking",
      "Bitumen dakbedekking",
      "PVC dakbedekking",
      "Groendak aanleg",
      "Dakisolatie verbetering",
    ],
    img: FLAT_IMG,
    imgAlt: "Plat dak aanleg Moordrecht",
  },
  {
    id: "hellend-dak",
    icon: <Droplets size={32} />,
    title: "Hellend Dak",
    subtitle: "Pannen · Leien · Riet",
    desc: "Hellende daken zijn de meest voorkomende daksoort in Nederland. Van Weenen Dakdekkers heeft ruime ervaring met alle soorten hellende daken. Van traditionele dakpannen tot moderne leien — wij zorgen voor een vakkundige en esthetisch verantwoorde uitvoering.",
    features: [
      "Keramische en betonnen dakpannen",
      "Leien dakbedekking",
      "Dakisolatie en onderdak",
      "Nokvorsten en kilgoten",
      "Dakkapellen en dakramen",
    ],
    img: REPAIR_IMG,
    imgAlt: "Hellend dak Moordrecht",
  },
];

const process = [
  { step: "01", title: "Contact & Intake", desc: "U neemt contact met ons op via telefoon of het contactformulier. Wij plannen een vrijblijvende inspectie in." },
  { step: "02", title: "Dakinspectie", desc: "Onze dakspecialist inspecteert uw dak grondig en stelt een gedetailleerde offerte op." },
  { step: "03", title: "Offerte & Akkoord", desc: "U ontvangt een heldere, transparante offerte zonder verborgen kosten. Na uw akkoord plannen wij de werkzaamheden." },
  { step: "04", title: "Uitvoering", desc: "Onze vakkundige dakdekkers voeren het werk netjes en efficiënt uit, met minimale overlast voor u." },
  { step: "05", title: "Oplevering", desc: "Na afronding inspecteert u het werk samen met ons. Pas als u tevreden bent, is de klus klaar." },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Dakdiensten Moordrecht – Van Weenen Dakdekkers"
        description="Alle dakdiensten in Moordrecht: dakinstallatie, dakreparatie, dakonderhoud, lekdetectie, plat dak en hellend dak. Vraag een gratis offerte aan."
        keywords="dakdiensten Moordrecht, dakinstallatie Moordrecht, dakreparatie Moordrecht, plat dak Moordrecht, lekdetectie dak"
        canonical="/diensten"
      />
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-16 md:pt-20 bg-[#1e2329] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f97316]" />
        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 text-[#f97316] px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-semibold mb-5">
              Dakdiensten Moordrecht
            </div>
            <h1 className="font-['Raleway'] font-extrabold text-4xl md:text-5xl text-white mb-5">
              Onze <span className="text-[#f97316]">Dakdiensten</span>
            </h1>
            <p className="text-white/75 text-lg font-['Nunito_Sans'] leading-relaxed mb-6">
              Van Van Weenen Dakdekkers kunt u rekenen op een volledig pakket aan dakwerkzaamheden. Van installatie tot onderhoud — wij zijn uw specialist in Moordrecht en omgeving.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded font-['Raleway'] font-bold text-sm transition-all duration-200">
                Offerte Aanvragen <ChevronRight size={16} />
              </Link>
              <a href="tel:+31641107559" className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white px-6 py-3 rounded font-['Raleway'] font-bold text-sm transition-all duration-200">
                <Phone size={16} /> Bel Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] mb-5">
                    {service.icon}
                  </div>
                  <div className="text-[#f97316] text-sm font-['Nunito_Sans'] font-semibold uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </div>
                  <h2 className="font-['Raleway'] font-extrabold text-3xl text-[#1e2329] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 font-['Nunito_Sans']">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-gray-700 font-['Nunito_Sans'] text-sm">
                        <CheckCircle size={18} className="text-[#f97316] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-6 py-3 rounded font-['Raleway'] font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Vraag een Offerte Aan
                    <ChevronRight size={16} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.img}
                    alt={service.imgAlt}
                    className="w-full h-72 md:h-96 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Hoe Werken Wij?
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto font-['Nunito_Sans']">
              Ons werkproces is transparant en klantgericht. Van eerste contact tot oplevering — u weet altijd waar u aan toe bent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#f97316]/20 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                    <span className="font-['Raleway'] font-extrabold text-white text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-['Raleway'] font-bold text-[#1e2329] text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-['Nunito_Sans']">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e2329]">
        <div className="container text-center">
          <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-white mb-4">
            Klaar om te Starten?
          </h2>
          <p className="text-white/70 text-lg mb-8 font-['Nunito_Sans'] max-w-xl mx-auto">
            Neem vandaag nog contact op voor een vrijblijvende offerte. Wij zijn snel ter plaatse in Moordrecht en omgeving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5">
              Offerte Aanvragen <ChevronRight size={18} />
            </Link>
            <a href="tel:+31641107559" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200">
              <Phone size={18} /> +31 6 41107559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
