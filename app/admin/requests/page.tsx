import Link from "next/link";
import { AdminRequestsClient } from "@/components/AdminRequestsClient";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminRequestsPage() {
  const requests = await prisma.siteRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const serializedRequests = requests.map((request) => ({
    ...request,
    createdAt: request.createdAt.toISOString(),
    updatedAt: request.updatedAt.toISOString(),
  }));

  return (
    <main className="min-h-screen">
      <div className="border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
              ف
            </span>
            <span className="text-xl font-black text-slate-950">
              فروشگاه‌ساز
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-black text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              مشاهده سایت
            </Link>

            <Link
              href="/request"
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-black text-white transition hover:bg-blue-700 md:inline-flex"
            >
              ثبت درخواست تستی
            </Link>

            <AdminLogoutButton />
          </div>
        </div>
      </div>

      <AdminRequestsClient initialRequests={serializedRequests} />
    </main>
  );
}