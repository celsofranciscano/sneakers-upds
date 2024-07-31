import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    // Encuentra el usuario por email
    const user = await prisma.tbusers.findUnique({
      where: {
        email: params.email,
      },
    });

    // Verifica si el usuario existe
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Encuentra la dirección asociada con el usuario
    const address = await prisma.tbaddresses.findFirst({
      where: {
        FK_user: user.PK_user,
      },
    });

    // Verifica si la dirección existe
    if (!address) {
      return NextResponse.json(
        { message: "Address not found" },
        { status: 404 }
      );
    }

    // Encuentra el envío asociado con la dirección
    const shipments = await prisma.tbshipments.findUnique({
      where: {
        PK_shipment: address.FK_shipment,
      },
    });

    // Combina la dirección y el envío en un solo objeto
    const response = {
      ...address,
      shipment: shipments
        ? {
            city: shipments.city,
            description: shipments.description,
            price: shipments.price,
          }
        : null,
    };

    return NextResponse.json(response);
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


export async function POST(request, { params }) {
    try {
      const { FK_shipment, address, phone, indications } = await request.json(); // Espera a que el JSON sea parseado
      const user = await prisma.tbusers.findUnique({
        where: {
            email: params.email,
        },
      });
  
      if (!user) {
        return NextResponse.json(
          {
            message: "User not found",
          },
          {
            status: 404,
          }
        );
      }
  
      const newAddress = await prisma.tbaddresses.create({
        data: {
          FK_user: user.PK_user,
          FK_shipment: Number(FK_shipment),
          address,
          phone,
          indications,
        },
      });
  
      return NextResponse.json(newAddress);
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