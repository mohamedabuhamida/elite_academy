"use client"

import { motion } from "framer-motion"
import { Users, Award, TrendingUp, Building } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { statsTranslations } from "@/translations/stats"
export default function StatsSection() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const stats = statsTranslations[language]
    

  return (
    <section
      className="py-32 bg-[#F5E9DC] relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C6A75E]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-[#3E0000] to-[#5a0000] rounded-2xl flex items-center justify-center shadow-lg">
                  <stat.icon
                    className="w-10 h-10 text-[#C6A75E]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3 className="text-5xl font-bold text-[#3E0000] mb-3">
                {stat.value}
              </h3>

              <p className="text-xl text-[#3E0000]/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C6A75E]/30 to-transparent"></div>
    </section>
  )
}