"use client";

import { useMemo, useState } from "react";

type SiteRequest = {
  id: string;
  fullName: string;
  phone: string;
  businessName: string | null;
  onlineAddress: string | null;
  websiteType: string;
  productCountRange: string;
  budgetRange: string;
  deliveryTime: string;
  needsPaymentGateway: boolean;
  needsAdminPanel: boolean;
  needsWhatsApp: boolean;
  needsContent: boolean;
  description: string | null;
  status: string;
  adminNote: string | null;
  createdAt: string;
  updatedAt: string;
};

const statusOptions = [
  { value: "NEW", label: "جدید" },
  { value: "REVIEWED", label: "بررسی‌شده" },
  { value: "CONTACTED", label: "تماس گرفته شد" },
  { value: "WAITING", label: "در انتظار پاسخ مشتری" },
  { value: "PRICE_SENT", label: "قیمت ارسال شد" },
  { value: "CONVERTED", label: "تبدیل به پروژه شد" },
  { value: "REJECTED", label: "رد شد" },
  { value: "ARCHIVED", label: "بایگانی شد" },
];

function getStatusLabel(status: string) {
  return statusOptions.find((item) => item.value === status)?.label || status;
}

function getStatusClass(status: string) {
  switch (status) {
    case "NEW":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "REVIEWED":
      return "bg-cyan-50 text-cyan-700 border-cyan-200";
    case "CONTACTED":
      return "bg-violet-50 text-violet-700 border-violet-200";
    case "WAITING":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "PRICE_SENT":
      return "bg-indigo-50 text-indigo-700 border-indigo-200";
    case "CONVERTED":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "REJECTED":
      return "bg-rose-50 text-rose-700 border-rose-200";
    case "ARCHIVED":
      return "bg-slate-100 text-slate-600 border-slate-200";
    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function boolLabel(value: boolean) {
  return value ? "بله" : "خیر";
}

export function AdminRequestsClient({
  initialRequests,
}: {
  initialRequests: SiteRequest[];
}) {
  const [requests, setRequests] = useState<SiteRequest[]>(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState<SiteRequest | null>(
    initialRequests[0] || null
  );
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function loadRequests() {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/requests", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "خطا در دریافت درخواست‌ها.");
        return;
      }

      const nextRequests = data.requests || [];

      setRequests(nextRequests);
      setSelectedRequest((prev) => {
        if (!prev) {
          return nextRequests[0] || null;
        }

        return (
          nextRequests.find((item: SiteRequest) => item.id === prev.id) ||
          nextRequests[0] ||
          null
        );
      });
    } catch {
      setMessage("ارتباط با سرور برقرار نشد.");
    } finally {
      setLoading(false);
    }
  }

  const stats = useMemo(() => {
    return {
      total: requests.length,
      newItems: requests.filter((item) => item.status === "NEW").length,
      priceSent: requests.filter((item) => item.status === "PRICE_SENT").length,
      converted: requests.filter((item) => item.status === "CONVERTED").length,
    };
  }, [requests]);

  const filteredRequests = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return requests.filter((item) => {
      const matchesStatus =
        statusFilter === "ALL" ? true : item.status === statusFilter;

      const searchableText = [
        item.fullName,
        item.phone,
        item.businessName || "",
        item.onlineAddress || "",
        item.websiteType,
        item.productCountRange,
        item.budgetRange,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = normalizedSearch
        ? searchableText.includes(normalizedSearch)
        : true;

      return matchesStatus && matchesSearch;
    });
  }, [requests, search, statusFilter]);

  async function updateSelectedRequest() {
    if (!selectedRequest) return;

    try {
      setSaving(true);
      setMessage("");

      const response = await fetch(`/api/requests/${selectedRequest.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: selectedRequest.status,
          adminNote: selectedRequest.adminNote || "",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "خطا در بروزرسانی درخواست.");
        return;
      }

      const updatedRequest = data.siteRequest as SiteRequest;

      setRequests((prev) =>
        prev.map((item) =>
          item.id === updatedRequest.id ? updatedRequest : item
        )
      );

      setSelectedRequest(updatedRequest);
      setMessage("درخواست با موفقیت بروزرسانی شد.");
    } catch {
      setMessage("ارتباط با سرور برقرار نشد.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black text-blue-600">پنل مدیریت</p>
            <h1 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
              مدیریت درخواست‌های طراحی سایت
            </h1>
            <p className="mt-3 leading-8 text-slate-600">
              درخواست‌های ثبت‌شده کاربران را بررسی کن، وضعیت آن‌ها را تغییر بده و یادداشت داخلی ثبت کن.
            </p>
          </div>

          <button
            onClick={loadRequests}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
          >
            بروزرسانی لیست
          </button>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-slate-500">کل درخواست‌ها</p>
            <p className="mt-2 text-3xl font-black text-slate-950">
              {stats.total}
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-slate-500">درخواست جدید</p>
            <p className="mt-2 text-3xl font-black text-blue-600">
              {stats.newItems}
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-slate-500">قیمت ارسال‌شده</p>
            <p className="mt-2 text-3xl font-black text-indigo-600">
              {stats.priceSent}
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-slate-500">تبدیل به پروژه</p>
            <p className="mt-2 text-3xl font-black text-emerald-600">
              {stats.converted}
            </p>
          </div>
        </div>

        <div className="mb-6 grid gap-4 rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur md:grid-cols-[1fr_260px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجو بر اساس نام، شماره، کسب‌وکار، نوع سایت..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-400"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-400"
          >
            <option value="ALL">همه وضعیت‌ها</option>
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {message && (
          <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-black text-blue-700">
            {message}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <section className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="mb-4 flex items-center justify-between px-2">
              <h2 className="text-lg font-black text-slate-950">
                لیست درخواست‌ها
              </h2>
              <span className="text-sm font-bold text-slate-500">
                {filteredRequests.length} مورد
              </span>
            </div>

            {loading ? (
              <div className="rounded-2xl bg-white p-8 text-center font-bold text-slate-500">
                در حال دریافت درخواست‌ها...
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="rounded-2xl bg-white p-8 text-center font-bold text-slate-500">
                درخواستی برای نمایش وجود ندارد.
              </div>
            ) : (
              <div className="space-y-3">
                {filteredRequests.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedRequest(item);
                      setMessage("");
                    }}
                    className={`w-full rounded-2xl border p-4 text-right transition hover:border-blue-300 hover:bg-blue-50/50 ${
                      selectedRequest?.id === item.id
                        ? "border-blue-300 bg-blue-50/70"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-black text-slate-950">
                            {item.fullName}
                          </h3>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-black ${getStatusClass(
                              item.status
                            )}`}
                          >
                            {getStatusLabel(item.status)}
                          </span>
                        </div>

                        <p className="mt-2 text-sm font-bold text-slate-500">
                          {item.businessName || "بدون نام کسب‌وکار"} —{" "}
                          {item.websiteType}
                        </p>

                        <p className="mt-2 text-sm font-bold text-slate-500">
                          {item.phone}
                        </p>
                      </div>

                      <div className="text-sm font-bold text-slate-400">
                        {formatDate(item.createdAt)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>

          <aside className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur">
            {!selectedRequest ? (
              <div className="rounded-2xl bg-white p-8 text-center font-bold text-slate-500">
                یک درخواست را انتخاب کن.
              </div>
            ) : (
              <div>
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                  <div>
                    <h2 className="text-2xl font-black text-slate-950">
                      {selectedRequest.fullName}
                    </h2>
                    <p className="mt-2 text-sm font-bold text-slate-500">
                      ثبت‌شده در {formatDate(selectedRequest.createdAt)}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-xs font-black ${getStatusClass(
                      selectedRequest.status
                    )}`}
                  >
                    {getStatusLabel(selectedRequest.status)}
                  </span>
                </div>

                <div className="space-y-3">
                  <InfoRow label="شماره موبایل" value={selectedRequest.phone} />

                  <InfoRow
                    label="نام کسب‌وکار"
                    value={selectedRequest.businessName || "ثبت نشده"}
                  />

                  <InfoRow
                    label="آدرس آنلاین"
                    value={selectedRequest.onlineAddress || "ثبت نشده"}
                  />

                  <InfoRow
                    label="نوع سایت"
                    value={selectedRequest.websiteType}
                  />

                  <InfoRow
                    label="تعداد محصولات"
                    value={selectedRequest.productCountRange}
                  />

                  <InfoRow label="بودجه" value={selectedRequest.budgetRange} />

                  <InfoRow
                    label="زمان تحویل"
                    value={selectedRequest.deliveryTime}
                  />

                  <InfoRow
                    label="درگاه پرداخت"
                    value={boolLabel(selectedRequest.needsPaymentGateway)}
                  />

                  <InfoRow
                    label="پنل مدیریت"
                    value={boolLabel(selectedRequest.needsAdminPanel)}
                  />

                  <InfoRow
                    label="اتصال واتساپ"
                    value={boolLabel(selectedRequest.needsWhatsApp)}
                  />

                  <InfoRow
                    label="تولید محتوا"
                    value={boolLabel(selectedRequest.needsContent)}
                  />
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-black text-slate-700">
                    توضیحات مشتری
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                    {selectedRequest.description || "توضیحی ثبت نشده است."}
                  </p>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    وضعیت درخواست
                  </label>
                  <select
                    value={selectedRequest.status}
                    onChange={(e) =>
                      setSelectedRequest((prev) =>
                        prev ? { ...prev, status: e.target.value } : prev
                      )
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none transition focus:border-blue-400"
                  >
                    {statusOptions.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    یادداشت داخلی
                  </label>
                  <textarea
                    rows={5}
                    value={selectedRequest.adminNote || ""}
                    onChange={(e) =>
                      setSelectedRequest((prev) =>
                        prev ? { ...prev, adminNote: e.target.value } : prev
                      )
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold leading-7 outline-none transition focus:border-blue-400"
                    placeholder="مثلاً: تماس گرفته شد، مشتری بودجه متوسط دارد، نیاز به فروشگاه کامل دارد..."
                  />
                </div>

                <button
                  onClick={updateSelectedRequest}
                  disabled={saving}
                  className="mt-5 w-full rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                >
                  {saving ? "در حال ذخیره..." : "ذخیره تغییرات"}
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 text-sm">
      <span className="font-bold text-slate-500">{label}</span>
      <span className="text-left font-black text-slate-900">{value}</span>
    </div>
  );
}