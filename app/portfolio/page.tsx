import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const portfolioItems = [
  {
    title: "فروشگاه آنلاین محصولات پت",
    category: "فروشگاه اینترنتی",
    status: "دموی قابل سفارش",
    description:
      "مناسب برای پیج‌های اینستاگرامی فروش محصولات حیوانات خانگی، با صفحه محصول، دسته‌بندی، ثبت سفارش و اتصال به واتساپ.",
    features: ["صفحه محصولات", "دسته‌بندی کالا", "فرم سفارش", "طراحی موبایل‌پسند"],
    accent: "from-blue-600 to-cyan-500",
  },
  {
    title: "فروشگاه پوشاک و اکسسوری",
    category: "فروشگاه آنلاین",
    status: "طرح پیشنهادی",
    description:
      "مناسب برای فروشگاه‌های لباس، کیف، اکسسوری و محصولات سبک، با تمرکز روی نمایش جذاب محصول و ثبت سفارش سریع.",
    features: ["گالری محصول", "فیلتر دسته‌بندی", "سبد خرید", "پنل مدیریت محصولات"],
    accent: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "لندینگ پیج فروش محصول",
    category: "صفحه فروش",
    status: "آماده طراحی",
    description:
      "مناسب برای کمپین‌های فروش، معرفی یک محصول خاص، جذب لید و هدایت کاربر به ثبت سفارش یا تماس.",
    features: ["معرفی محصول", "مزایا", "CTA قوی", "فرم دریافت لید"],
    accent: "from-emerald-600 to-teal-500",
  },
  {
    title: "سایت شرکتی خدماتی",
    category: "سایت شرکتی",
    status: "طرح پیشنهادی",
    description:
      "مناسب برای شرکت‌ها، کلینیک‌ها و کسب‌وکارهای خدماتی که نیاز به معرفی خدمات، اعتمادسازی و دریافت درخواست دارند.",
    features: ["معرفی خدمات", "درباره ما", "نمونه‌کار", "فرم تماس"],
    accent: "from-slate-800 to-slate-600",
  },
  {
    title: "فروشگاه محصولات تخصصی",
    category: "فروشگاه تخصصی",
    status: "قابل توسعه",
    description:
      "مناسب برای کسب‌وکارهایی که محصولات تخصصی، صنعتی، پزشکی یا آموزشی دارند و نیاز به ساختار جدی‌تر فروش دارند.",
    features: ["صفحات محصول تخصصی", "مشخصات فنی", "درخواست مشاوره", "مدیریت سفارش"],
    accent: "from-indigo-600 to-blue-500",
  },
  {
    title: "سایت معرفی برند شخصی",
    category: "برندینگ شخصی",
    status: "آماده طراحی",
    description:
      "مناسب برای مشاوران، مدرس‌ها، متخصصان و فریلنسرهایی که می‌خواهند خدمات و رزومه خود را حرفه‌ای معرفی کنند.",
    features: ["رزومه", "خدمات", "رزرو مشاوره", "فرم ارتباط"],
    accent: "from-amber-500 to-orange-500",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20">
        <div className="absolute right-[-120px] top-[-120px] -z-10 h-[360px] w-[360px] rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute left-[-120px] top-[120px] -z-10 h-[360px] w-[360px] rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-black text-blue-700 shadow-sm backdrop-blur">
              نمونه‌کارها و دموهای قابل سفارش
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.35] text-slate-950 md:text-5xl">
              چند نمونه از سایت‌هایی که می‌توانیم برای کسب‌وکارها طراحی کنیم
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              این بخش برای نمایش نمونه‌های آماده، طرح‌های پیشنهادی و پروژه‌های قابل اجرا ساخته شده است. بعداً نمونه‌کارهای واقعی مشتریان نیز به همین صفحه اضافه می‌شوند.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request"
                className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                ثبت درخواست طراحی سایت
              </Link>

              <Link
                href="/pricing"
                className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-center font-black text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
              >
                مشاهده پلن‌ها
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100"
              >
                <div className={`h-36 bg-gradient-to-br ${item.accent} p-5 text-white`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">
                      {item.category}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-950">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="text-sm font-bold text-white/75">Website Demo</p>
                      <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl font-black">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-[88px] text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-black text-slate-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold text-slate-400">
                      قابل شخصی‌سازی برای هر کسب‌وکار
                    </p>

                    <Link
                      href="/request"
                      className="text-sm font-black text-blue-600 transition hover:text-blue-700"
                    >
                      سفارش مشابه
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-300 md:p-12">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute left-[-80px] bottom-[-80px] h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-black md:text-4xl">
              نمونه‌ای نزدیک به کسب‌وکار خودت می‌خواهی؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              فرم درخواست را تکمیل کن تا بر اساس نوع محصول، بودجه، تعداد صفحات و امکانات موردنیازت، پیشنهاد مناسب‌تری آماده شود.
            </p>

            <Link
              href="/request"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-black text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              ثبت درخواست رایگان
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}