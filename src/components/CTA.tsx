"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function CTA() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const content =
    language === "ar"
      ? {
          title: "هل أنت مستعد لتكون من النخبة؟",
          subtitle:
            "انضم إلى آلاف المتخصصين الذين طوروا مهاراتهم وحققوا أحلامهم المهنية معنا",
          button: "قدّم الآن",
          note: "لا تحتاج بطاقة ائتمان • استشارة مجانية • دعم متواصل",
        }
      : {
          title: "Are You Ready to Be Elite?",
          subtitle:
            "Join thousands of professionals who developed their skills and achieved their career goals with us.",
          button: "Apply Now",
          note: "No credit card required • Free consultation • Continuous support",
        }

  return (
    <section
      className="py-32 bg-[var(--color-primary)] relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {content.title}
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(198, 167, 94, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[var(--color-gold)] text-[var(--color-primary)] px-14 py-6 rounded-lg text-2xl font-semibold shadow-2xl hover:opacity-90 transition-all duration-300 inline-flex items-center gap-3"
          >
            {content.button}

            {/* Dynamic Arrow Direction */}
            {isRTL ? (
              <ArrowLeft className="w-6 h-6" />
            ) : (
              <ArrowRight className="w-6 h-6" />
            )}
          </motion.button>

          <p className="text-white/60 mt-8 text-lg">
            {content.note}
          </p>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"></div>
    </section>
  )
}