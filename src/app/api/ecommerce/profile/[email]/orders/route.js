import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET(request, { params }) {
  try {
    const user = await prisma.tbusers.findUnique({
      where: {
        email: params.email,
      },
    });

    if (user) {
      const orders = await prisma.tbsales.findMany({
        where: {
          FK_user: user.PK_user,
        },
      });

      const salesstatuses = await prisma.tbsalesstatuses.findMany();

      const formattedOrders = orders.map((order) => {
        const status = salesstatuses.find(
          (status) => status.PK_salestatus === order.FK_salestatus
        );

        return {
          PK_sale: order.PK_sale,
          salestatus: status?.name,
          description: status?.description,
          totalAmount: order.totalAmount,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        };
      });

      return NextResponse.json(formattedOrders);
    }

    return NextResponse.json({
      message: "No se encontró el usuario",
    });
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
