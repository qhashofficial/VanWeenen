/* ==========================================================
   Contact Page – Van Weenen Dakdekkers
   Design: Modern Dutch Craftsmanship
   Sections: Hero, Contact Form, Map, Contact Info
   ========================================================== */

import { useState } from "react";
import { Phone, MapPin, Clock, ChevronRight, CheckCircle, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapView } from "@/components/Map";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445270080/RVSkLAhDb5f3b5uyvqcUrq/hero-roofing-ABbh78UKDU2FsLdUGQnC4T.webp";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Vul alle verplichte velden in.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Uw bericht is verzonden! Wij nemen zo snel mogelijk contact met u op.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact – Van Weenen Dakdekkers Moordrecht"
        description="Neem contact op met Van Weenen Dakdekkers. Bel +31 6 41107559 of vul het contactformulier in voor een gratis offerte. Crocusstraat 2, 2841 AJ Moordrecht."
        keywords="contact dakdekker Moordrecht, offerte dakdekker Moordrecht, Van Weenen contact"
        canonical="/contact"
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
              <Phone size={14} /> Direct Bereikbaar
            </div>
            <h1 className="font-['Raleway'] font-extrabold text-4xl md:text-5xl text-white mb-5">
              Neem <span className="text-[#f97316]">Contact</span><br />met Ons Op
            </h1>
            <p className="text-white/75 text-lg font-['Nunito_Sans'] leading-relaxed">
              Heeft u vragen of wilt u een vrijblijvende offerte? Vul het formulier in of bel ons direct. Wij reageren altijd snel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="orange-accent-line mb-5" />
              <h2 className="font-['Raleway'] font-extrabold text-2xl text-[#1e2329] mb-6">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="font-['Raleway'] font-bold text-[#1e2329] mb-1">Telefoon</div>
                    <a href="tel:+31641107559" className="text-[#f97316] font-['Nunito_Sans'] font-semibold text-lg hover:underline">
                      +31 6 41107559
                    </a>
                    <p className="text-gray-500 text-sm font-['Nunito_Sans'] mt-1">Bel ons direct voor een snelle reactie</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="font-['Raleway'] font-bold text-[#1e2329] mb-1">Adres</div>
                    <p className="text-gray-600 font-['Nunito_Sans']">Crocusstraat 2</p>
                    <p className="text-gray-600 font-['Nunito_Sans']">2841 AJ Moordrecht</p>
                    <p className="text-gray-600 font-['Nunito_Sans']">Nederland</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <div className="font-['Raleway'] font-bold text-[#1e2329] mb-1">Openingstijden</div>
                    <div className="space-y-1 font-['Nunito_Sans'] text-sm text-gray-600">
                      <div className="flex justify-between gap-6">
                        <span>Maandag - Vrijdag</span>
                        <span className="font-semibold">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Zaterdag</span>
                        <span className="text-gray-400">Gesloten</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Zondag</span>
                        <span className="text-gray-400">Gesloten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 bg-[#f8f9fa] rounded-lg p-6 border border-gray-100">
                <h3 className="font-['Raleway'] font-bold text-[#1e2329] mb-2">Spoed?</h3>
                <p className="text-gray-500 text-sm font-['Nunito_Sans'] mb-4">
                  Bij noodreparaties zijn wij snel ter plaatse. Bel ons direct voor spoedservice.
                </p>
                <a
                  href="tel:+31641107559"
                  className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white px-5 py-3 rounded font-['Raleway'] font-bold text-sm transition-all duration-200 w-full"
                >
                  <Phone size={16} />
                  Direct Bellen
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#f8f9fa] rounded-xl p-8 border border-gray-100">
                <h2 className="font-['Raleway'] font-extrabold text-2xl text-[#1e2329] mb-2">
                  Offerte Aanvragen
                </h2>
                <p className="text-gray-500 text-sm font-['Nunito_Sans'] mb-7">
                  Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een vrijblijvende offerte.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-['Raleway'] font-bold text-xl text-[#1e2329] mb-3">
                      Bericht Verzonden!
                    </h3>
                    <p className="text-gray-500 font-['Nunito_Sans'] text-sm max-w-sm">
                      Bedankt voor uw bericht. Wij nemen zo snel mogelijk, uiterlijk binnen 24 uur, contact met u op.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-6 text-[#f97316] font-['Raleway'] font-semibold text-sm hover:underline"
                    >
                      Nieuw bericht sturen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-['Nunito_Sans'] font-semibold text-[#1e2329] mb-2">
                          Naam <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Uw volledige naam"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e2329] font-['Nunito_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-['Nunito_Sans'] font-semibold text-[#1e2329] mb-2">
                          E-mailadres <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="uw@email.nl"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e2329] font-['Nunito_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-['Nunito_Sans'] font-semibold text-[#1e2329] mb-2">
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+31 6 xxxxxxxx"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e2329] font-['Nunito_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-['Nunito_Sans'] font-semibold text-[#1e2329] mb-2">
                          Gewenste Dienst
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e2329] font-['Nunito_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors"
                        >
                          <option value="geen">Selecteer een dienst</option>
                          <option value="dakinstallatie">Dakinstallatie</option>
                          <option value="dakreparatie">Dakreparatie</option>
                          <option value="dakonderhoud">Dakonderhoud</option>
                          <option value="lekdetectie">Lekdetectie</option>
                          <option value="plat-dak">Plat Dak</option>
                          <option value="hellend-dak">Hellend Dak</option>
                          <option value="anders">Anders</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-['Nunito_Sans'] font-semibold text-[#1e2329] mb-2">
                        Bericht <span className="text-[#f97316]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Beschrijf uw dakprobleem of wensen..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#1e2329] font-['Nunito_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] disabled:opacity-70 text-white px-6 py-4 rounded-lg font-['Raleway'] font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Offerte Aanvragen
                          <ChevronRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-gray-400 text-xs font-['Nunito_Sans'] text-center">
                      Uw gegevens worden vertrouwelijk behandeld en niet gedeeld met derden.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-5">
              <div className="orange-accent-line" />
            </div>
            <h2 className="font-['Raleway'] font-extrabold text-3xl text-[#1e2329] mb-3">
              Onze Locatie
            </h2>
            <p className="text-gray-500 font-['Nunito_Sans'] text-base">
              Crocusstraat 2, 2841 AJ Moordrecht
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200" style={{ height: "420px" }}>
            <MapView
              className="w-full h-full"
              initialCenter={{ lat: 51.9936, lng: 4.6714 }}
              initialZoom={15}
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://maps.google.com/?q=Crocusstraat+2,+2841+AJ+Moordrecht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f97316] font-['Raleway'] font-bold hover:gap-3 transition-all duration-200"
            >
              <MapPin size={16} />
              Routebeschrijving openen in Google Maps
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
