import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const paymentMethods = await prisma.tbpaymentmethods.findMany();

    return NextResponse.json(paymentMethods);
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


export async function POST (request){
  try {

    const {name,qrCodeImage,description}= await request.json();

    const newPaymentMethods = await prisma.tbpaymentmethods.create({
      data:{
        name,qrCodeImage,description
      }
    })
    return NextResponse.json(newPaymentMethods)
  } catch (error) {

    return NextResponse.json({
      message: error.message
    },{
      status:500
    })
    
  }
}
