"use client";

import { useState } from "react";

export function AdminLoginForm() {
  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "ورود ناموفق بود.");
        return;
      }

      window.location.href = "/admin/requests";
    } catch {
      setMessage("ارتباط با سرور برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-blue-100 backdrop-blur md:p-8"
    >
      <div>
        <label className="mb-2 block text-sm font-black text-slate-700">
          ایمیل ادمین
        </label>
        <input
          type="email"
          dir="ltr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left font-bold outline-none transition focus:border-blue-400"
          required
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-black text-slate-700">
          رمز عبور
        </label>
        <input
          type="password"
          dir="ltr"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left font-bold outline-none transition focus:border-blue-400"
          required
        />
      </div>

      {message && (
        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-black text-rose-700">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {loading ? "در حال ورود..." : "ورود به پنل مدیریت"}
      </button>
    </form>
  );
}