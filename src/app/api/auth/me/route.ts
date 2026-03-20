import { NextResponse } from "next/server";
import { users } from "@/src/data/usersData";

export async function GET(req: NextResponse) {
    const token = req.cookies.get('token')?.value
    const user = users.find(user => user.id.toString() === token)
    return NextResponse.json({user : user || null })
}