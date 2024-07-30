import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const sale = await prisma.tbsales.findUnique({
      where: {
        PK_sale: Number(params.id),
      },
    });
    return NextResponse.json(sale);
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
    const { FK_salestatus, totalAmount, status } = await request.json();
    const updateSale = await prisma.tbsales.update({
      where: {
        PK_sale: Number(params.id),
      },
      data: {
        FK_salestatus: Number(FK_salestatus),
        totalAmount,
        status,
      },
    });

    return NextResponse.json(updateSale);
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
