import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const shipments = await prisma.tbshipments.findMany();

    return NextResponse.json(shipments);
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
    const { city, description, price } = await request.json();

    const newShipment = await prisma.tbshipments.create({
      data: {
        city,
        description,
        price,
      },
    });
    return NextResponse.json(newShipment);
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
