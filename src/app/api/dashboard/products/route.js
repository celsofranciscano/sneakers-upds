import { NextResponse } from "next/server";
import prisma from "@/connection/db";

export async function GET() {
  try {
    // Obtener todos los productos
    const products = await prisma.tbproducts.findMany();
    // Obtener todas las categorías
    const categories = await prisma.tbcategories.findMany();

    // Crear un mapa de categorías por su clave primaria para acceso rápido
    const categoryMap = categories.reduce((acc, category) => {
      acc[category.PK_category] = category;
      return acc;
    }, {});

    // Formatear los productos para incluir la información de la categoría correspondiente
    const formattedProducts = products.map((product) => {
      const category = categoryMap[product.FK_category];
      return {
        ...product,
        categoryName: category.name,
        categoryUrl: category.urlCategory,
        categoryDescription: category.description,
      };
    });

    return NextResponse.json(formattedProducts);
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
    const {FK_category,name,urlProduct,regularPrice,offerPrice,stock,description} = await request.json();

    const newProduct = await prisma.tbproducts.create({
      data:{
        FK_category: Number(FK_category),
        name,
        urlProduct,
        regularPrice: Number(regularPrice),
        offerPrice: Number(offerPrice),
        stock: Number(stock),
        description
      }
    })

    return NextResponse.json(newProduct);
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
