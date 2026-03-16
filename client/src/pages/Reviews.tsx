/* ==========================================================
   Reviews Page – Van Weenen Dakdekkers
   Design: Modern Dutch Craftsmanship
   Sections: Hero, Rating Overview, All Reviews, Leave Review CTA
   ========================================================== */

import { Link } from "wouter";
import { Phone, ChevronRight, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/hero-roofing-ABbh78UKDU2FsLdUGQnC4T.webp";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Van+Weenen/@51.9889421,4.6749141,17z/data=!4m8!3m7!1s0x47c5d3fedc0a665b:0xf249ecc86a22db35!8m2!3d51.9889421!4d4.6749141!9m1!1b1!16s%2Fg%2F1twyyq_p!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    name: "JJ H",
    rating: 5,
    date: "1 maand geleden",
    text: "Echt toppers! Heb ons dak laten doen door deze partij, heldere communicatie en leveren goed werk! Ook waren de mannen erg vriendelijk en hebben alles netjes achtergelaten. AANRADER!",
  },
  {
    name: "Jeroen Visser",
    rating: 5,
    date: "1 maand geleden",
    text: "Jaren lang last gehad van een lekkage die meerdere bedrijven niet konden vinden! Maar deze man kwam er zo achter en heeft het vakkundig opgelost en voor een mooie nette prijs waar andere het dubbele vroegen. Zeker een aanrader",
  },
  {
    name: "Erik",
    rating: 5,
    date: "4 jaar geleden",
    text: "Na de recente storm zijn meerdere nokpannen van het dak gewaaid, ondanks de drukte hebben ze nog dezelfde dag nieuwe nokpannen erop gelegd. Een goede en snelle service! Bedankt Jan van Weenen!",
  },
  {
    name: "rob g",
    rating: 5,
    date: "4 jaar geleden",
    text: "Goede dakdekkers, goed geholpen door Jan en zoon",
  },
];

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? "fill-[#f97316] text-[#f97316]" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

const ratingBreakdown = [
  { stars: 5, count: 4, pct: 80 },
  { stars: 4, count: 1, pct: 20 },
  { stars: 3, count: 0, pct: 0 },
  { stars: 2, count: 0, pct: 0 },
  { stars: 1, count: 0, pct: 0 },
];

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Beoordelingen – Van Weenen Dakdekkers Moordrecht"
        description="Lees wat klanten zeggen over Van Weenen Dakdekkers. Google-beoordeling 4.8/5 op basis van 5 reviews. Betrouwbare dakdekker in Moordrecht en omgeving."
        keywords="beoordelingen Van Weenen dakdekkers, reviews dakdekker Moordrecht, Google-beoordeling dakdekker"
        canonical="/beoordelingen"
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
              <Star size={14} className="fill-[#f97316]" /> Google Beoordelingen
            </div>
            <h1 className="font-['Raleway'] font-extrabold text-4xl md:text-5xl text-white mb-5">
              Wat Onze <span className="text-[#f97316]">Klanten</span><br />over Ons Zeggen
            </h1>
            <p className="text-white/75 text-lg font-['Nunito_Sans'] leading-relaxed">
              Wij zijn trots op onze 4.8 Google-beoordeling op basis van 5 reviews. Hieronder vindt u een selectie van openbare Google-beoordelingen.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Score */}
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-['Raleway'] font-bold text-gray-600 text-lg">Google reviews</span>
                  </div>
                  <div className="font-['Raleway'] font-extrabold text-7xl text-[#1e2329] leading-none mb-3">4.8</div>
                  <StarRating rating={5} size={24} />
                  <p className="text-gray-500 text-sm mt-3 font-['Nunito_Sans']">Gebaseerd op 5 Google-beoordelingen</p>
                </div>

                {/* Breakdown */}
                <div className="space-y-2.5">
                  {ratingBreakdown.map((row) => (
                    <div key={row.stars} className="flex items-center gap-3">
                      <span className="text-sm font-['Nunito_Sans'] font-semibold text-gray-600 w-4">{row.stars}</span>
                      <Star size={14} className="fill-[#f97316] text-[#f97316] flex-shrink-0" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-[#f97316] h-full rounded-full transition-all duration-500"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="text-sm font-['Nunito_Sans'] text-gray-500 w-4">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl md:text-4xl text-[#1e2329] mb-4">
              Klantbeoordelingen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-lg p-7 border border-gray-100 service-card flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-['Raleway'] font-bold text-[#1e2329] text-base">{review.name}</div>
                    <div className="text-gray-400 text-xs font-['Nunito_Sans'] mt-0.5">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-['Nunito_Sans']">
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </div>
                </div>

                <StarRating rating={review.rating} />

                <div className="relative flex-1 mt-4">
                  <Quote size={20} className="text-[#f97316]/30 absolute -top-1 -left-1" />
                  <p className="text-gray-600 text-sm leading-relaxed font-['Nunito_Sans'] pl-4 italic">
                    {review.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-[#1e2329]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl text-white mb-4">
              Bent U Klant bij Van Weenen?
            </h2>
            <p className="text-white/70 text-base mb-8 font-['Nunito_Sans'] leading-relaxed">
              Wij waarderen uw feedback enorm. Laat een beoordeling achter op Google en help andere klanten in Moordrecht de juiste keuze te maken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e2329] hover:bg-gray-100 px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <Star size={18} className="text-[#f97316]" />
                Schrijf een Beoordeling
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200">
                Contact Opnemen <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-[#f97316]">
        <div className="container text-center">
          <h2 className="font-['Raleway'] font-extrabold text-2xl md:text-3xl text-white mb-4">
            Ook Tevreden Worden? Bel Ons Vandaag!
          </h2>
          <a
            href="tel:+31641107559"
            className="inline-flex items-center gap-2 bg-white text-[#f97316] hover:bg-gray-100 px-8 py-4 rounded font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            <Phone size={18} />
            +31 6 41107559
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
