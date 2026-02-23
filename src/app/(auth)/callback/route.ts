import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/courses", req.url));
}
