import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const allowedStatuses = [
  "NEW",
  "REVIEWED",
  "CONTACTED",
  "WAITING",
  "PRICE_SENT",
  "CONVERTED",
  "REJECTED",
  "ARCHIVED",
];

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const status = body.status ? String(body.status) : undefined;
    const adminNote =
      body.adminNote === null || body.adminNote === undefined
        ? undefined
        : String(body.adminNote);

    if (status && !allowedStatuses.includes(status)) {
      return NextResponse.json(
        { message: "وضعیت ارسال‌شده معتبر نیست." },
        { status: 400 }
      );
    }

    const siteRequest = await prisma.siteRequest.update({
      where: { id },
      data: {
        ...(status ? { status } : {}),
        ...(adminNote !== undefined ? { adminNote } : {}),
      },
    });

    return NextResponse.json({
      message: "درخواست با موفقیت بروزرسانی شد.",
      siteRequest,
    });
  } catch (error) {
    console.error("UPDATE_REQUEST_ERROR", error);

    return NextResponse.json(
      { message: "خطا در بروزرسانی درخواست." },
      { status: 500 }
    );
  }
}