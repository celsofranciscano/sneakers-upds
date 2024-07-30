import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const paymentMethods = await prisma.tbpaymentmethods.findUnique({
      where: {
        PK_paymentmethod: Number(params.id),
      },
    });

    return NextResponse.json(paymentMethods);
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

export async function PATCH(request, { params }) {
  try {
    const { name, qrCodeImage, description, status } = await request.json();

    const updatePaymentMethods = await prisma.tbpaymentmethods.update({
      where: {
        PK_paymentmethod: Number(params.id),
      },
      data: {
        name,
        qrCodeImage,
        description,
        status,
      },
    });
    return NextResponse.json(updatePaymentMethods);
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
