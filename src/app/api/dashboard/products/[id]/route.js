import prisma from "@/connection/db";
import { data } from "autoprefixer";
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

export async function PATCH(request, { params }) {
  try {
    const {
      FK_category,
      name,
      urlProduct,
      regularPrice,
      offerPrice,
      stock,
      description,
      status,
    } = await request.json();
    const updateProduct = await prisma.tbproducts.update({
      where: {
        PK_product: Number(params.id),
      },
      data: {
        FK_category: Number(FK_category),
        name,
        urlProduct,
        regularPrice: Number(regularPrice),
        offerPrice: Number(offerPrice),
        stock: Number(stock),
        description,
        status,
      },
    });

    return NextResponse.json(updateProduct);
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
