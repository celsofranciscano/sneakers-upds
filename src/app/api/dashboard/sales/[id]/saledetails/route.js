import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const saleDetails = await prisma.tbsaledetails.findMany({
      where: {
        FK_sale: Number(params.id),
      },
    });
    return NextResponse.json(saleDetails);
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
    const { FK_product, quantity, unitPrice, subtotal } = await request.json();
    const newSaleDetail = await prisma.tbsaledetails.create({
      data: {
        FK_sale: Number(params.id),
        FK_product: Number(FK_product),
        quantity: Number(quantity),
        unitPrice,
        subtotal,
      },
    });
    const sale = await prisma.tbsales.findUnique({
      where: {
        PK_sale: Number(params.id),
      },
    });
    const updateTotalAmount = Number(sale.totalAmount) + Number(subtotal);
    const totalAmount = await prisma.tbsales.update({
      where: {
        PK_sale: Number(params.id),
      },
      data: {
        totalAmount: updateTotalAmount,
      },
    });
    return NextResponse.json(newSaleDetail);
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
