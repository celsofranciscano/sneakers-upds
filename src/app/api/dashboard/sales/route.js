import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET() {
  try {
    // Obtener todos los estados de venta
    const salesstatuses = await prisma.tbsalesstatuses.findMany();
    // Obtener todas las ventas
    const sales = await prisma.tbsales.findMany();
    // Obtener todos los usuarios
    const users = await prisma.tbusers.findMany();

    // Crear un mapa de estados de venta por su clave primaria para acceso rápido
    const salesStatusMap = salesstatuses.reduce((acc, salesstatus) => {
      acc[salesstatus.PK_salestatus] = salesstatus;
      return acc;
    }, {});

    // Crear un mapa de usuarios por su clave primaria para acceso rápido
    const usersMap = users.reduce((acc, user) => {
      acc[user.PK_user] = user;
      return acc;
    }, {});

    // Formatear las ventas para incluir la información del estado de venta y usuario correspondiente
    const formattedSales = sales.map((sale) => {
      const salesstatus = salesStatusMap[sale.FK_salestatus];
      const user = usersMap[sale.FK_user];
      return {
        ...sale,
        salesStatus: salesstatus ? salesstatus.name : null, // Ajusta según los campos reales de tu tabla
        firstName: user ? user.firstName : null, // Incluye el nombre del usuario
        lastName: user ? user.lastName : null, // Incluye el apellido del usuario
      };
    });

    return NextResponse.json(formattedSales);
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
    const { FK_user, FK_salestatus } = await request.json();
    const newSale = await prisma.tbsales.create({
      data: {
        FK_user: Number(FK_user),
        FK_salestatus: Number(FK_salestatus),
        totalAmount:"0"
      },
    });

    return NextResponse.json(newSale);
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
