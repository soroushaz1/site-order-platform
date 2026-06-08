import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-black text-slate-950">نمونه‌کارها</h1>
        <p className="mt-4 max-w-2xl leading-8 text-slate-600">
          در این بخش نمونه سایت‌های طراحی‌شده یا دموهای آماده برای مشتریان قرار می‌گیرد.
        </p>

        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-2xl font-black text-slate-950">هنوز نمونه‌کار ثبت نشده است</h2>
          <p className="mt-4 leading-8 text-slate-600">
            بعداً پروژه فروشگاه آزمایشی و نمونه‌های واقعی را از پنل مدیریت اضافه می‌کنیم.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}