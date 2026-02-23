"use client"

import { motion } from "framer-motion"
import { Stethoscope, Activity, Briefcase, Users } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Specializations() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const content =
    language === "ar"
      ? {
          sectionTitle: "مجالاتنا المتخصصة",
          items: [
            {
              icon: Stethoscope,
              title: "العلاج الطبيعي السريري",
              description: "تطوير المهارات التشخيصية والعلاجية المتقدمة",
            },
            {
              icon: Activity,
              title: "التأهيل الرياضي",
              description: "خبرة متخصصة في إعادة تأهيل الرياضيين",
            },
            {
              icon: Briefcase,
              title: "الإدارة الطبية",
              description: "قيادة وإدارة المؤسسات الصحية بكفاءة",
            },
            {
              icon: Users,
              title: "المهارات القيادية",
              description: "تطوير القدرات القيادية في المجال الطبي",
            },
          ],
        }
      : {
          sectionTitle: "Our Specialized Fields",
          items: [
            {
              icon: Stethoscope,
              title: "Clinical Physical Therapy",
              description:
                "Develop advanced diagnostic and therapeutic skills.",
            },
            {
              icon: Activity,
              title: "Sports Rehabilitation",
              description:
                "Specialized expertise in athlete recovery programs.",
            },
            {
              icon: Briefcase,
              title: "Medical Management",
              description:
                "Efficient leadership and healthcare institution management.",
            },
            {
              icon: Users,
              title: "Leadership Skills",
              description:
                "Enhancing leadership capabilities in the medical field.",
            },
          ],
        }

  return (
    <section
      id="programs"
      className="py-32 bg-linear-to-b from-[#3E0000] to-[#5a0000] relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C6A75E]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {content.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-[#C6A75E] mx-auto"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(198, 167, 94, 0.3)",
              }}
              className="bg-[#F5E9DC] rounded-2xl p-10 shadow-lg hover:border-2 hover:border-[#C6A75E] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-linear-to-br from-[#3E0000] to-[#5a0000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <spec.icon
                    className="w-10 h-10 text-[#C6A75E]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#3E0000] mb-4 text-center">
                {spec.title}
              </h3>

              <p className="text-[#3E0000]/70 text-center leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#C6A75E]/40 to-transparent"></div>
    </section>
  )
}