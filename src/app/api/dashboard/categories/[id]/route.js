import { NextResponse } from "next/server";
import prisma from "@/connection/db";
import { data } from "autoprefixer";

export async function GET(request, { params }) {
  try {
    const category = await prisma.tbcategories.findUnique({
      where: {
        PK_category: Number(params.id),
      },
    });
    return NextResponse.json(category);
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
    const { name, urlCategory, description, status } = await request.json();

    const updateCategory = await prisma.tbcategories.update({
      where: {
        PK_category: Number(params.id),
      },
      data: {
        name,
        urlCategory,
        description,
        status,
      },
    });

    return NextResponse.json(updateCategory);
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
