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

export async function POST(request, { params }) {
  try {
    const { receiptDate, receiptImage } = await request.json();

    // Convertir la fecha a formato ISO-8601 si no está en ese formato
    const isoReceiptDate = new Date(receiptDate).toISOString();

    const newPaymentreceipts = await prisma.tbpaymentreceipts.create({
      data: {
        FK_paymentmethod: 1,
        FK_sale: Number(params.id),
        receiptImage,
        receiptDate: isoReceiptDate,
      },
    });

    return NextResponse.json(newPaymentreceipts);
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
