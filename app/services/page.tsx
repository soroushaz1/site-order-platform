import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-black text-slate-950">خدمات طراحی سایت</h1>
        <p className="mt-4 max-w-2xl leading-8 text-slate-600">
          ما برای کسب‌وکارهایی که می‌خواهند فروش آنلاین منظم‌تری داشته باشند، سایت فروشگاهی، سایت شرکتی و صفحه فروش طراحی می‌کنیم.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            "طراحی فروشگاه آنلاین",
            "طراحی سایت شرکتی",
            "طراحی لندینگ پیج فروش",
            "طراحی پنل مدیریت",
            "اتصال فرم سفارش",
            "آماده‌سازی سایت برای سئو",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">{item}</h2>
              <p className="mt-4 leading-8 text-slate-600">
                این خدمت متناسب با نیاز کسب‌وکار شما طراحی و پیاده‌سازی می‌شود.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}