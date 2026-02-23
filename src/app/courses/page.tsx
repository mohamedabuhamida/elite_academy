"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { coursesTranslations } from "@/translations/courses";

export default function CoursesPage() {
  const { language } = useLanguage();
  const t = coursesTranslations[language];
  const isRTL = language === "ar";

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-cream)] px-6"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="text-center max-w-2xl">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-cream/80 mb-10"
        >
          {t.subtitle}
        </motion.p>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-primary px-8 py-4 rounded-xl font-semibold shadow-lg"
        >
          {t.notify}
        </motion.button>
      </div>
    </section>
  );
}
