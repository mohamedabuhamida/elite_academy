"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, X } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useLanguage } from "@/context/LanguageContext"

interface Testimonial {
  id: string
  name: string
  role: string
  text: string
}

export function Testimonials() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const supabase = createClient()

  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const [form, setForm] = useState({
    name: "",
    role: "",
    text: "",
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  async function fetchTestimonials() {
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })

    if (data) setTestimonials(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!form.name || !form.role || !form.text) return

    await supabase.from("testimonials").insert([form])

    setForm({ name: "", role: "", text: "" })
    setIsOpen(false)
    fetchTestimonials()
  }

  return (
    <section
      className="py-32 bg-gradient-to-b from-[#3E0000] to-[#5a0000]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white text-center mb-12">
          {language === "ar" ? "آراء خريجينا" : "Testimonials"}
        </h2>

        {/* Add Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#C6A75E] text-[#3E0000] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
          >
            {language === "ar" ? "أضف رأيك" : "Add Testimonial"}
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/20"
            >
              <div className="absolute top-8 right-8 w-14 h-14 bg-[#C6A75E]/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#C6A75E]" />
              </div>

              <p className="text-white/90 text-lg mt-12 mb-6">
                {item.text}
              </p>

              <div className="border-t border-[#C6A75E]/30 pt-4">
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-[#C6A75E]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#3E0000] p-10 rounded-2xl w-full max-w-lg relative border border-[#C6A75E]/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X />
              </button>

              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                {language === "ar" ? "أضف رأيك" : "Add Testimonial"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder={language === "ar" ? "الاسم" : "Name"}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white"
                />

                <input
                  type="text"
                  placeholder={language === "ar" ? "الوظيفة" : "Role"}
                  value={form.role}
                  onChange={(e) =>
                    setForm({ ...form, role: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white"
                />

                <textarea
                  rows={4}
                  placeholder={language === "ar" ? "رأيك" : "Your Feedback"}
                  value={form.text}
                  onChange={(e) =>
                    setForm({ ...form, text: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white"
                />

                <button className="w-full bg-[#C6A75E] py-3 rounded-lg text-[#3E0000] font-semibold cursor-pointer">
                  {language === "ar" ? "إرسال" : "Submit"}
                </button>

              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}