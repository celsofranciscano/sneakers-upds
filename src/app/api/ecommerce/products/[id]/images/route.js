import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const images = await prisma.tbimages.findMany({
      where: {
        FK_product: Number(params.id),
      },
      select: {
        urlImage: true,
      },
    });

    // Mapear los resultados a un array de URLs
    const urls = images.map(image => image.urlImage);

    return NextResponse.json(urls);
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
