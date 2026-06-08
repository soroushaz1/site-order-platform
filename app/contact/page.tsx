import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <h1 className="text-4xl font-black text-slate-950">تماس با ما</h1>
        <p className="mt-4 leading-8 text-slate-600">
          برای شروع همکاری، بهترین مسیر این است که ابتدا فرم ثبت درخواست را تکمیل کنید تا نیاز شما دقیق‌تر بررسی شود.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">شروع پروژه</h2>
          <p className="mt-4 leading-8 text-slate-600">
            بعداً شماره تماس، واتساپ، ایمیل و آدرس شبکه‌های اجتماعی را در این بخش قرار می‌دهیم.
          </p>

          <Link
            href="/request"
            className="mt-6 inline-flex rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            ثبت درخواست طراحی سایت
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}