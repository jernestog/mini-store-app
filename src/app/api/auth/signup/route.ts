import { NextResponse } from "next/server";
import { users } from "@/src/data/usersData";


export async function POST(req: Request) {

  try {
    const { name, username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username and password are required' },
        { status: 400 }
      );
    }


    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    const newUser = {
      id: crypto.randomUUID(),
      name,
      username,
      password,
      role: 'customer'
    };

    users.push(newUser);


    const response = NextResponse.json({
      success: true,
      message: 'User registered successfully',
      username: newUser.username,
      role: newUser.role
    });

   
    response.cookies.set('token', newUser.id.toString(), {
      httpOnly: true,
      path: '/',
      maxAge: 3600
    });

    return response;

  } catch (err) {
    console.warn('Error register:', err);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}