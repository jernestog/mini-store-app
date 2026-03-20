import { NextResponse } from "next/server";
import { orders } from "@/src/data/ordersData";


export async function POST(req: Request) {

  if (req.method === "POST") {

    const order = await req.json();
    
    const response = NextResponse.json({
      success: true,
      message: 'Order registered successfully',
      
    });
  
    orders.push(order)
    return response
  } else {

    return NextResponse.json({
         message: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextResponse) {
    return NextResponse.json(orders || null)
}