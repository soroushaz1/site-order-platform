import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RequestForm } from "@/components/RequestForm";

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-950">
            ثبت درخواست طراحی سایت
          </h1>
          <p className="mt-4 leading-8 text-slate-600">
            اطلاعات زیر را وارد کنید تا نیاز کسب‌وکار شما بررسی شود و بتوانیم پیشنهاد مناسب‌تری ارائه کنیم.
          </p>
        </div>

        <RequestForm />
      </section>

      <Footer />
    </main>
  );
}