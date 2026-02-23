"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { webinarTranslations } from "@/translations/webinars";

interface Webinar {
  title: { en: string; ar: string };
  doctor: { en: string; ar: string };
  datetime: string;
  image: string;
}

export function WebinarCard({ title, doctor, datetime, image }: Webinar) {
  const { language } = useLanguage();
  const t = webinarTranslations[language];
  const isRTL = language === "ar";

  const eventDate = new Date(datetime);
  const now = new Date();

  const isFuture = eventDate > now;

  const formattedDate = new Intl.DateTimeFormat(
    language === "ar" ? "ar-EG" : "en-US",
    {
      dateStyle: "long",
    },
  ).format(eventDate);

  const formattedTime = new Intl.DateTimeFormat(
    language === "ar" ? "ar-EG" : "en-US",
    {
      timeStyle: "short",
    },
  ).format(eventDate);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-black/5"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title[language]}
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          {title[language]}
        </h3>

        <div className="space-y-2 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User size={16} />
            {doctor[language]}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {formattedDate}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {formattedTime}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-xl transition-all duration-300 cursor-pointer ${
            isFuture
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gold text-white hover:opacity-90"
          }`}
        >
          {isFuture ? t.register : t.watch}
        </motion.button>
      </div>
    </motion.div>
  );
}
