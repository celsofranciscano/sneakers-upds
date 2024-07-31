import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
    const PK_sale = parseInt(params.id);

    // Obtener los detalles de venta para la venta específica
    const saledetails = await prisma.tbsaledetails.findMany({
      where: {
        FK_sale: PK_sale,
      },
    });

    // Obtener los IDs únicos de los productos involucrados en los detalles de venta
    const productIds = saledetails.map((detail) => detail.FK_product);

    // Obtener la información básica de los productos relacionados
    const products = await prisma.tbproducts.findMany({
      where: {
        PK_product: {
          in: productIds,
        },
      },
      select: {
        PK_product: true,
        name: true,
        urlProduct: true,
        urlImage: true,
        regularPrice: true,
        offerPrice: true,
        description: true,
      },
    });

    // Mapear los detalles de venta para incluir la información básica de cada producto
    const formattedSaledetails = saledetails.map((detail) => {
      // Encontrar el producto correspondiente al detalle de venta actual
      const productInfo = products.find(
        (product) => product.PK_product === detail.FK_product
      );

      // Construir el objeto de respuesta combinando los datos del detalle y del producto
      return {
        PK_saledetail: detail.PK_saledetail,
        FK_product: detail.FK_product,
        quantity: detail.quantity,
        unitPrice: detail.unitPrice,
        subtotal: detail.subtotal,
        createdAt: detail.createdAt,
        updatedAt: detail.updatedAt,
        ...productInfo, // Agregar la información básica del producto
      };
    });

    return NextResponse.json(formattedSaledetails);
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
