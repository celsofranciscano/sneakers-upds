import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function POST(request, { params }) {
  try {
    const products  = await request.json();
    const userEmail = params.email;

    // Verificar si el usuario existe
    const user = await prisma.tbusers.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Calcular el total de la venta y preparar los detalles de la venta
    let totalAmount = 0;
    const saleDetails = [];

    for (const item of products) {
      const product = await prisma.tbproducts.findUnique({
        where: { PK_product: Number(item.PK_product) },
      });

      if (!product) {
        return NextResponse.json({ message: `Product ID ${item.PK_product} not found` }, { status: 404 });
      }

      const unitPrice = Number(product.regularPrice);
      const quantity = Number(item.quantity);
      const subtotal = unitPrice * quantity;

      totalAmount += subtotal;

      saleDetails.push({
        FK_product: Number(item.PK_product),
        quantity: quantity,
        unitPrice: unitPrice.toFixed(2),
        subtotal: subtotal.toFixed(2),
      });
    }

    // Crear la venta
    const newSale = await prisma.tbsales.create({
      data: {
        FK_user: user.PK_user,
        FK_salestatus: 1, // Assuming 1 is "Pendiente de pago"
        totalAmount: totalAmount.toFixed(2),
      },
    });

    // Añadir el FK_sale a cada detalle de venta
    saleDetails.forEach(detail => {
      detail.FK_sale = newSale.PK_sale;
    });

    // Crear los detalles de la venta
    await prisma.tbsaledetails.createMany({
      data: saleDetails,
    });

    return NextResponse.json(newSale);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
