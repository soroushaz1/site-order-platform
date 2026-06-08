import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    const adminEmail = String(process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const adminPassword = String(process.env.ADMIN_PASSWORD || "");

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { message: "اطلاعات ادمین در env تنظیم نشده است." },
        { status: 500 }
      );
    }

    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { message: "ایمیل یا رمز عبور اشتباه است." },
        { status: 401 }
      );
    }

    const token = await createAdminToken(email);

    const response = NextResponse.json({
      message: "ورود با موفقیت انجام شد.",
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.COOKIE_SECURE === "true",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("ADMIN_LOGIN_ERROR", error);

    return NextResponse.json(
      { message: "خطا در ورود ادمین." },
      { status: 500 }
    );
  }
}