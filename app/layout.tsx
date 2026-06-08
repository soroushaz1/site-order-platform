import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "فروشگاه‌ساز",
    template: "%s | فروشگاه‌ساز",
  },
  description:
    "طراحی فروشگاه آنلاین، سایت شرکتی و صفحه فروش برای کسب‌وکارها و فروشگاه‌های اینستاگرامی.",
  icons: {
    icon: "/site-icon.svg",
    shortcut: "/site-icon.svg",
    apple: "/site-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}