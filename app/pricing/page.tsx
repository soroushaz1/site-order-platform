import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plans = [
  {
    title: "اقتصادی",
    desc: "مناسب برای شروع سریع",
    items: ["صفحه معرفی", "فرم ثبت سفارش", "اتصال به واتساپ", "طراحی موبایل‌پسند"],
  },
  {
    title: "فروشگاهی",
    desc: "مناسب برای فروش محصول",
    items: ["صفحه محصولات", "دسته‌بندی محصولات", "سبد خرید", "پنل مدیریت محصولات"],
  },
  {
    title: "اختصاصی",
    desc: "مناسب برای نیازهای خاص",
    items: ["طراحی اختصاصی", "پنل مدیریت کامل", "گزارش فروش", "امکانات سفارشی"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-black text-slate-950">تعرفه‌ها</h1>
        <p className="mt-4 max-w-2xl leading-8 text-slate-600">
          قیمت نهایی بعد از بررسی نیاز، تعداد صفحات، امکانات، زمان تحویل و سطح طراحی مشخص می‌شود.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{plan.title}</h2>
              <p className="mt-2 font-bold text-blue-600">{plan.desc}</p>

              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-slate-600">
                    ✓ {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/request"
                className="mt-8 inline-flex w-full justify-center rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                ثبت درخواست
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}