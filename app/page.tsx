import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services = [
  {
    title: "فروشگاه آنلاین",
    desc: "مناسب برای فروش محصول با صفحه محصول، دسته‌بندی، فرم سفارش و امکان اتصال به درگاه پرداخت.",
  },
  {
    title: "لندینگ پیج فروش",
    desc: "مناسب برای کمپین، معرفی محصول، جذب لید و تبدیل بازدیدکننده به مشتری.",
  },
  {
    title: "سایت شرکتی",
    desc: "مناسب برای معرفی شرکت، خدمات، نمونه‌کارها، اطلاعات تماس و اعتبارسازی برند.",
  },
];

const steps = [
  "ثبت درخواست اولیه",
  "بررسی نیاز و مشاوره",
  "اعلام قیمت و زمان‌بندی",
  "طراحی و توسعه سایت",
  "تحویل، آموزش و پشتیبانی",
];

const plans = [
  {
    name: "اقتصادی",
    price: "شروع سریع",
    features: ["صفحه معرفی", "فرم ثبت سفارش", "اتصال به واتساپ", "طراحی موبایل‌پسند"],
  },
  {
    name: "فروشگاهی",
    price: "مناسب فروش محصول",
    features: ["صفحه محصولات", "دسته‌بندی", "سبد خرید", "پنل مدیریت محصولات"],
  },
  {
    name: "اختصاصی",
    price: "برای نیازهای خاص",
    features: ["طراحی اختصاصی", "پنل مدیریت کامل", "گزارش فروش", "امکانات سفارشی"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-300/30 blur-3xl" />
          <div className="absolute left-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute bottom-[-180px] right-[30%] h-[360px] w-[360px] rounded-full bg-indigo-300/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-black text-blue-700 shadow-sm backdrop-blur">
              تبدیل پیج و کسب‌وکار شما به فروشگاه آنلاین
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.35] tracking-tight text-slate-950 md:text-6xl">
              فروشگاه آنلاین خودت را بدون دردسر راه‌اندازی کن
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
              ما برای فروشگاه‌های اینستاگرامی، برندهای کوچک و کسب‌وکارهای خدماتی، وب‌سایت فروشگاهی و صفحه فروش حرفه‌ای طراحی می‌کنیم؛ با ظاهر قابل اعتماد، فرم سفارش و پنل مدیریت.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/request"
                className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-black text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                ثبت درخواست طراحی سایت
              </Link>

              <Link
                href="/portfolio"
                className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-center font-black text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700"
              >
                مشاهده نمونه‌کارها
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["طراحی", "موبایل‌پسند"],
                ["فرم", "ثبت سفارش"],
                ["پنل", "مدیریت سایت"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/70 bg-white/60 p-4 text-center shadow-sm backdrop-blur"
                >
                  <p className="text-lg font-black text-slate-950">{title}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/25 to-cyan-300/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-blue-200/60 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                    پنل مدیریت لیدها
                  </span>
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-black text-blue-600">درخواست جدید</p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                      آماده بررسی
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black leading-10">
                    فروشگاه آنلاین برای پیج اینستاگرام
                  </h3>

                  <div className="mt-5 grid gap-3 text-sm font-bold text-slate-600">
                    <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                      <span>تعداد محصولات</span>
                      <span className="text-slate-950">۳۰ عدد</span>
                    </div>

                    <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                      <span>درگاه پرداخت</span>
                      <span className="text-slate-950">دارد</span>
                    </div>

                    <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                      <span>نوع پروژه</span>
                      <span className="text-slate-950">فروشگاهی</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-bold text-slate-300">لیدهای ماه</p>
                    <p className="mt-2 text-4xl font-black">۲۴</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-bold text-slate-300">پروژه فعال</p>
                    <p className="mt-2 text-4xl font-black">۵</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-black text-blue-600">خدمات اصلی</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            برای چه کسانی سایت می‌سازیم؟
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            تمرکز ما روی کسب‌وکارهایی است که محصول یا خدمت دارند، اما فروش آنلاین آن‌ها هنوز منظم، قابل اعتماد و قابل توسعه نیست.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-white/80 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-200">
                ✓
              </div>
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-7 shadow-xl shadow-blue-100/60 backdrop-blur md:p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <span className="text-sm font-black text-blue-600">فرآیند همکاری</span>
              <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                ساده، مرحله‌ای و شفاف
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                کاربر فقط درخواستش را ثبت می‌کند. ما نیازش را بررسی می‌کنیم، قیمت و زمان‌بندی می‌دهیم و پروژه را مرحله‌ای جلو می‌بریم.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 font-black text-white">
                    {index + 1}
                  </span>
                  <p className="font-black text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="text-center">
          <span className="text-sm font-black text-blue-600">پلن‌ها</span>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            پلن‌های پیشنهادی
          </h2>
          <p className="mt-4 text-slate-600">
            قیمت نهایی بعد از بررسی نیاز مشخص می‌شود، اما ساختار همکاری از این سه مسیر شروع می‌شود.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                index === 1
                  ? "border-blue-200 bg-blue-600 text-white shadow-blue-200"
                  : "border-white/80 bg-white/70 text-slate-950 backdrop-blur"
              }`}
            >
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className={`mt-2 font-black ${index === 1 ? "text-blue-100" : "text-blue-600"}`}>
                {plan.price}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm font-bold ${
                      index === 1 ? "text-blue-50" : "text-slate-600"
                    }`}
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-center text-white shadow-2xl shadow-slate-300 md:p-12">
          <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute left-[-80px] bottom-[-80px] h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-black md:text-4xl">
              می‌خواهی سایت فروش خودت را شروع کنی؟
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              فرم درخواست را پر کن تا نیاز کسب‌وکارت بررسی شود و مسیر مناسب برای طراحی سایتت مشخص شود.
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