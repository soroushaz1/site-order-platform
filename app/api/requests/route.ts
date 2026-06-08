import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.phone || !body.websiteType) {
      return NextResponse.json(
        { message: "نام، شماره موبایل و نوع سایت الزامی هستند." },
        { status: 400 }
      );
    }

    const siteRequest = await prisma.siteRequest.create({
      data: {
        fullName: String(body.fullName).trim(),
        phone: String(body.phone).trim(),
        businessName: body.businessName ? String(body.businessName).trim() : null,
        onlineAddress: body.onlineAddress ? String(body.onlineAddress).trim() : null,

        websiteType: String(body.websiteType),
        productCountRange: String(body.productCountRange || "مشخص نشده"),
        budgetRange: String(body.budgetRange || "مشخص نشده"),
        deliveryTime: String(body.deliveryTime || "مشخص نشده"),

        needsPaymentGateway: Boolean(body.needsPaymentGateway),
        needsAdminPanel: Boolean(body.needsAdminPanel),
        needsWhatsApp: Boolean(body.needsWhatsApp),
        needsContent: Boolean(body.needsContent),

        description: body.description ? String(body.description).trim() : null,
      },
    });

    return NextResponse.json(
      {
        message: "درخواست با موفقیت ثبت شد.",
        siteRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE_REQUEST_ERROR", error);

    return NextResponse.json(
      { message: "خطا در ثبت درخواست." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = await prisma.siteRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ requests });
  } catch (error) {
    console.error("GET_REQUESTS_ERROR", error);

    return NextResponse.json(
      { message: "خطا در دریافت درخواست‌ها." },
      { status: 500 }
    );
  }
}