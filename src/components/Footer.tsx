"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { footerTranslations } from "@/translations/footer";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language];
  const isRTL = language === "ar";

  return (
    <footer
      className="bg-primary text-white py-20 border-t border-gold/20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">
              {t.aboutTitle}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">{t.aboutText}</p>

            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Elite Academy"
                width={1000}
                height={1000}
                className="w-14 h-8"
              />
              <div>
                <h4 className="text-white font-bold">The Elite Academy</h4>
                <p className="text-gold text-sm">{t.tagline}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {t.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gold transition-colors duration-300 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">{t.contact}</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-white/70">+201271113720</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <p className="text-white/70">theeliteacademyeg@gmail.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <p className="text-white/70">{t.address}</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gold">
              {t.newsletter}
            </h3>

            <p className="text-white/70 mb-6 leading-relaxed">
              {t.newsletterText}
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="bg-white/10 border border-gold/30 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors duration-300"
              >
                {t.subscribe}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61586024638556&mibextid=ZbWKwL",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/the_elite_academy_eg?igsh=NXkzdmcxc2FsMmQ",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/the-elite-academy-eg/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <p className="text-white/60 text-center">
              © 2026 The Elite Academy. {t.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
