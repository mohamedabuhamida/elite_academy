"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { aboutTranslations } from "@/translations/about";

interface AboutProps {
  aboutImage: string;
}

export default function About({ aboutImage }: AboutProps) {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const content = aboutTranslations[language];

  return (
    <section
      id="about"
      className="py-32 bg-primary text-cream relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle decorative glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Golden Frame */}
              <div className="absolute inset-0 border-4 border-gold rounded-2xl translate-x-4 translate-y-4 -z-10"></div>

              <img
                src={aboutImage}
                alt="Elite Academy"
                className="w-full h-137.5 object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {content.title}
            </h2>

            <div className="w-24 h-1 bg-gold mb-8"></div>

            <p className="text-xl text-cream/80 leading-relaxed mb-12">
              {content.description}
            </p>

            <div className="space-y-6">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 `}
                >
                  <div className="shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center mt-1 shadow-md">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                  </div>
                  <p className="text-lg text-cream/90">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-14"
            >
              <Link
                href="/about"
                className=" bg-gold text-primary px-12 py-4 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
              >
                {content.button}
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
