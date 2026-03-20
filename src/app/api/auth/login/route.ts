
import { NextResponse } from "next/server";
import { users } from "@/src/data/usersData";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json(); 

    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
      return NextResponse.json({success: false, message: 'User not found' }, { status: 401 });
    }

    const response = NextResponse.json({success : true,  message: 'Login Success', username: user.username, role: user.role });

    response.cookies.set('token', user.id.toString(), {
      httpOnly: true,
      path: '/',
      maxAge: 3600
    });
    
    return response;
  } catch (err) {
    console.warn('Error login:', err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}