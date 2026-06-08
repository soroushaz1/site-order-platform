"use client";

import { useState } from "react";

const initialForm = {
  fullName: "",
  phone: "",
  businessName: "",
  onlineAddress: "",
  websiteType: "فروشگاه آنلاین",
  productCountRange: "کمتر از ۱۰ محصول",
  budgetRange: "هنوز مشخص نیست",
  deliveryTime: "۱ تا ۲ هفته",
  needsPaymentGateway: false,
  needsAdminPanel: true,
  needsWhatsApp: true,
  needsContent: false,
  description: "",
};

export function RequestForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(name: string, value: string | boolean) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "خطا در ثبت درخواست.");
        return;
      }

      setMessage("درخواست شما با موفقیت ثبت شد.");
      setForm(initialForm);
    } catch {
      setMessage("ارتباط با سرور برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            نام و نام خانوادگی
          </label>
          <input
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            شماره موبایل
          </label>
          <input
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            نام کسب‌وکار
          </label>
          <input
            value={form.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            آدرس اینستاگرام یا سایت فعلی
          </label>
          <input
            value={form.onlineAddress}
            onChange={(e) => updateField("onlineAddress", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="@example یا example.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            نوع سایت موردنیاز
          </label>
          <select
            value={form.websiteType}
            onChange={(e) => updateField("websiteType", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>فروشگاه آنلاین</option>
            <option>سایت شرکتی</option>
            <option>لندینگ پیج فروش</option>
            <option>سایت خدماتی</option>
            <option>مطمئن نیستم</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            تعداد حدودی محصولات
          </label>
          <select
            value={form.productCountRange}
            onChange={(e) => updateField("productCountRange", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>کمتر از ۱۰ محصول</option>
            <option>۱۰ تا ۵۰ محصول</option>
            <option>۵۰ تا ۲۰۰ محصول</option>
            <option>بیشتر از ۲۰۰ محصول</option>
            <option>محصول ندارم / خدماتی هستم</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            بودجه تقریبی
          </label>
          <select
            value={form.budgetRange}
            onChange={(e) => updateField("budgetRange", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>هنوز مشخص نیست</option>
            <option>اقتصادی</option>
            <option>متوسط</option>
            <option>حرفه‌ای</option>
            <option>اختصاصی</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            زمان مورد انتظار تحویل
          </label>
          <select
            value={form.deliveryTime}
            onChange={(e) => updateField("deliveryTime", e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          >
            <option>فوری</option>
            <option>۱ تا ۲ هفته</option>
            <option>۲ تا ۴ هفته</option>
            <option>زمان خاصی ندارم</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {[
          ["needsPaymentGateway", "نیاز به درگاه پرداخت"],
          ["needsAdminPanel", "نیاز به پنل مدیریت"],
          ["needsWhatsApp", "اتصال به واتساپ"],
          ["needsContent", "نیاز به تولید محتوا"],
        ].map(([name, label]) => (
          <label
            key={name}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700"
          >
            <input
              type="checkbox"
              checked={Boolean(form[name as keyof typeof form])}
              onChange={(e) => updateField(name, e.target.checked)}
              className="h-5 w-5"
            />
            {label}
          </label>
        ))}
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-bold text-slate-700">
          توضیحات تکمیلی
        </label>
        <textarea
          rows={5}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {message && (
        <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {loading ? "در حال ارسال..." : "ارسال درخواست"}
      </button>
    </form>
  );
}