"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { contactTranslations } from "@/translations/contact";
import Link from "next/link";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = contactTranslations[language];
  const isRTL = language === "ar";

  return (
    <section
      className="min-h-screen bg-primary text-cream py-32 px-6"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-cream/80">{t.subtitle}</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-white/10 space-y-6"
          >
            <input
              type="text"
              placeholder={t.name}
              className="w-full bg-white/10 border border-gold/30 rounded-lg px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition"
            />

            <input
              type="email"
              placeholder={t.email}
              className="w-full bg-white/10 border border-gold/30 rounded-lg px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition"
            />

            <textarea
              rows={5}
              placeholder={t.message}
              className="w-full bg-white/10 border border-gold/30 rounded-lg px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gold text-primary py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              {t.button}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold text-gold">{t.infoTitle}</h2>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <Phone className="text-gold" />
                <span>+20 127 111 3720</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-gold" />
                <Link
                  href={"mailto:theeliteacademyeg@gmail.com"}
                  className="hover:text-gold hover:underline"
                >
                  theeliteacademyeg@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-gold" />
                <span>
                  {language === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
