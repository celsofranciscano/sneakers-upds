import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const product = await prisma.tbproducts.findUnique({
      where: {
        PK_product: Number(params.id),
      },
    });
    return NextResponse.json(product);
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
