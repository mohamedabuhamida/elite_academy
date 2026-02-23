"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { heroTranslations } from "@/translations/hero";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const { language } = useLanguage();
  const t = heroTranslations[language];
  const isRTL = language === "ar";

  return (
    <section className="relative  min-h-screen flex items-center justify-center bg-primary text-cream px-6 w-full">
      <div className={`max-w-4xl text-center ${isRTL ? "rtl" : "ltr"}`}>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl ${isRTL ? "md:text-8xl" : "md:text-7xl"} font-extrabold leading-tight mb-6`}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-2xl text-cream/80 mb-10"
        >
          {t.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center relative ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          {/* Explore Programs */}
          <button className="px-8 py-4 bg-gold text-primary rounded-xl font-semibold hover:opacity-90 transition-all duration-300">
            {t.explore}
          </button>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
