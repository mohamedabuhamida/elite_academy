"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { navTranslations } from "@/translations/nav";
import Link from "next/link";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { key: "home", label: navTranslations[language].home, href: "#" },
    {
      key: "webnar",
      label: navTranslations[language].webnar,
      href: "#webnar",
    },
    {
      key: "courses",
      label: navTranslations[language].courses,
      href: "#courses",
    },
    { key: "about", label: navTranslations[language].about, href: "#about" },
    {
      key: "contact",
      label: navTranslations[language].contact,
      href: "#contact",
    },
  ];

  const t = navTranslations[language];

  const isRTL = language === "ar";

  return (
    <nav className="w-full bg-primary text-white fixed top-0 left-0 z-50 shadow-lg">
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Elite Academy"
            width={1000}
            height={1000}
            className="w-22 h-12"
          />
        </div>

        {/* Desktop Links */}
        <ul className={`hidden md:flex gap-8 font-medium `}>
          {navItems.map((item) => (
            <li key={item.key} className="hover:text-cream">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div
          className={`flex items-center gap-4 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="border border-cream px-3 py-1 rounded text-sm hover:bg-cream hover:text-primary transition duration-300 cursor-pointer"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary"
          >
            <ul
              className={`flex flex-col gap-6 px-6 py-6 text-lg ${
                isRTL ? "items-end text-right" : "items-start text-left"
              }`}
            >
              {navItems.map((item) => (
                <li
                  key={item.key}
                  className="hover:text-cream "
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
