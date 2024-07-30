import prisma from "@/connection/db";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    try {

        const salesStatus =  await prisma.tbsalesstatuses.findUnique({
            where:{
                PK_salestatus: Number(params.id)
            }
        })
        return NextResponse.json(salesStatus)
        
    } catch (error) {
        return NextResponse.json({
            message: error.message
        },{
            status:500
        })
        
    }
}