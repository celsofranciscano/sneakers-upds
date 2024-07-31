import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
    const sale = await prisma.tbsales.findUnique({
      where: {
        PK_sale: Number(params.id),
      },
    });
    const status = await prisma.tbsalesstatuses.findUnique({
      where: {
        PK_salestatus: sale.FK_salestatus,
      },
    });
    return NextResponse.json(status);
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
