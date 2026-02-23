"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const t =
    language === "ar"
      ? {
          title: "تسجيل الدخول",
          subtitle: "سجل دخولك وابدأ التعلم الآن",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          button: "تسجيل الدخول",
          noAccount: "ليس لديك حساب؟",
          create: "إنشاء حساب",
          or: "أو سجل باستخدام",
        }
      : {
          title: "Login",
          subtitle: "Sign in and start learning",
          email: "Email",
          password: "Password",
          button: "Sign In",
          noAccount: "Don't have an account?",
          create: "Create Account",
          or: "Or continue with",
        };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) router.push("/courses");

    setLoading(false);
  }

  async function signInWithProvider(provider: "google" | "facebook") {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  return (
    <div className="min-h-screen flex py-28 bg-primary">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2  items-center justify-center text-white p-16 relative overflow-hidden">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            {language === "ar"
              ? "ابدأ رحلتك نحو التميز"
              : "Start Your Journey to Excellence"}
          </h1>
          <p className="text-xl text-white/80">{t.subtitle}</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-primary p-8 rounded-r-3xl shadow-[0_-15px_25px_-5px_rgba(0,0,0,0.3)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <h2 className="text-3xl font-bold text-[#3E0000] mb-2 text-center">
            {t.title}
          </h2>

          <p className="text-center text-gray-500 mb-8">{t.subtitle}</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute top-4 left-4 text-gray-400" size={18} />
              <input
                type="email"
                placeholder={t.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute top-4 left-4 text-gray-400" size={18} />
              <input
                type="password"
                placeholder={t.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg"
              />
            </div>

            {/* Button */}
            <button
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#C6A75E] to-[#9a8348] shadow-md hover:opacity-90 transition"
            >
              {loading ? "..." : t.button}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-400">{t.or}</div>

          {/* Providers */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => signInWithProvider("google")}
              className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              Google
            </button>

            <button
              onClick={() => signInWithProvider("facebook")}
              className="flex-1 border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              Facebook
            </button>
          </div>

          <p className="text-center text-sm">
            {t.noAccount}{" "}
            <a href="/signup" className="text-[#3E0000] font-semibold">
              {t.create}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
