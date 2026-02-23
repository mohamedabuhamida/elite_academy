"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { navTranslations } from "@/translations/nav";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const supabase = createClient();
  const router = useRouter();

  const isRTL = language === "ar";
  const t = navTranslations[language];

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  const navItems = [
    { key: "home", label: t.home, href: "/#" },
    { key: "webinar", label: t.webinar, href: "/#webinar" },
    { key: "courses", label: t.courses, href: "/courses" },
    { key: "about", label: t.about, href: "/#about" },
    { key: "contact", label: t.contact, href: "/contact" },
  ];

  return (
    <nav className="w-full bg-primary text-white fixed top-0 left-0 z-50 shadow-lg">
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Elite Academy"
          width={1000}
          height={1000}
          className="w-22 h-12"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
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
            className="border border-cream px-3 py-1 rounded text-sm hover:bg-cream hover:text-primary transition"
          >
            {language === "en" ? "AR" : "EN"}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <div className="hidden md:flex gap-3">
              <Link
                href="/login"
                className="border border-cream px-4 py-1 rounded hover:bg-cream hover:text-primary transition"
              >
                {t.login}
              </Link>

              <Link
                href="/signup"
                className="bg-cream text-primary px-4 py-1 rounded hover:opacity-90 transition"
              >
                {t.register}
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 border border-cream px-4 py-1 rounded hover:bg-cream hover:text-primary transition"
            >
              <LogOut size={16} />
              {language === "ar" ? "تسجيل الخروج" : "Logout"}
            </button>
          )}

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
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}

              {/* Mobile Auth */}
              {!user ? (
                <>
                  <Link href="/login">{t.login}</Link>
                  <Link href="/signup">{t.register}</Link>
                </>
              ) : (
                <button onClick={handleLogout}>
                  {language === "ar" ? "تسجيل الخروج" : "Logout"}
                </button>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}