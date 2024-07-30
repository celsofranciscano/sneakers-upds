import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const salesStatuses = await prisma.tbsalesstatuses.findMany();

    return NextResponse.json(salesStatuses);
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

export async function POST(request) {
  try {
    const { name, description } = await request.json();
    const newSalesStatuses = await prisma.tbsalesstatuses.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(newSalesStatuses);
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
