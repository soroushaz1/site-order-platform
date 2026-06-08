export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="text-lg font-black text-slate-950">فروشگاه‌ساز</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            طراحی وب‌سایت فروشگاهی، سایت شرکتی و صفحه فروش برای کسب‌وکارهایی که می‌خواهند فروش آنلاین منظم‌تری داشته باشند.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">خدمات</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>طراحی فروشگاه آنلاین</li>
            <li>طراحی سایت شرکتی</li>
            <li>طراحی لندینگ پیج فروش</li>
            <li>اتصال فرم سفارش و پرداخت</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">تماس</h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            برای شروع، فرم ثبت درخواست را تکمیل کنید تا نیاز شما بررسی شود.
          </p>
        </div>
      </div>
    </footer>
  );
}