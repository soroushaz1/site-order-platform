import Link from "next/link";

const navItems = [
  { label: "خدمات", href: "/services" },
  { label: "تعرفه‌ها", href: "/pricing" },
  { label: "نمونه‌کارها", href: "/portfolio" },
  { label: "تماس با ما", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-lg shadow-slate-300">
            ف
          </span>
          <span className="text-xl font-black tracking-tight text-slate-950">
            فروشگاه‌ساز
          </span>
        </Link>

        <nav className="hidden items-center gap-8 rounded-full border border-slate-200 bg-white/70 px-6 py-3 shadow-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          ثبت درخواست
        </Link>
      </div>
    </header>
  );
}