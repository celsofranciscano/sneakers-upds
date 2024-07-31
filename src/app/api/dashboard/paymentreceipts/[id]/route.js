import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const paymentreceipts = await prisma.tbpaymentreceipts.findFirst({
      where: {
        FK_sale: Number(params.id),
      },
    });

    return NextResponse.json(paymentreceipts);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
