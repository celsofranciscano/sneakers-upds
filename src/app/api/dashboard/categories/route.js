import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET() {
  try {
    const categories = await prisma.tbcategories.findMany();

    return NextResponse.json(categories);
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
    const { name, urlCategory, description } = await request.json();

    const newCategory = await prisma.tbcategories.create({
      data: {
        name,
        urlCategory,
        description,
      },
    });

    return NextResponse.json(newCategory);
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
