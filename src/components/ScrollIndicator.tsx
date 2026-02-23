"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollIndicator() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <motion.div
      className={`absolute bottom-30 transform left-1/2 -translate-x-1/2`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-8 h-12 border-2 border-[#C6A75E] rounded-full flex items-start justify-center p-2"
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
