import { NextResponse } from "next/server";

const users = [
  { id: 1, username: 'pedrito', password: '0000', role: 'admin' },
  { id: 2, username: 'sancho96', password: '4544', role: 'customer' }
];

export async function GET(req: NextResponse) {
    const token = req.cookies.get('token')?.value
    const user = users.find(user => user.id.toString() === token)
    return NextResponse.json({user : user || null })
}