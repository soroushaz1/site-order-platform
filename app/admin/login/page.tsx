import Link from "next/link";
import { AdminLoginForm } from "@/components/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
              ف
            </span>
            <span className="text-2xl font-black text-slate-950">
              فروشگاه‌ساز
            </span>
          </Link>

          <h1 className="mt-8 text-3xl font-black text-slate-950">
            ورود ادمین
          </h1>
          <p className="mt-3 leading-8 text-slate-600">
            برای مشاهده و مدیریت درخواست‌های طراحی سایت وارد شوید.
          </p>
        </div>

        <AdminLoginForm />
      </div>
    </main>
  );
}