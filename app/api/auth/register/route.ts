import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    console.log("Registration attempt:", { name, email });

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" }, 
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" }, 
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" }, 
        { status: 409 }
      );
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma.user.create({
      data: { 
        name: name?.trim() || "", 
        email: email.toLowerCase().trim(), 
        password: hashedPassword 
      },
      select: {
        id: true,
        name: true,
        email: true,
           
      }
    });

    console.log("User created successfully:", user.id);

    return NextResponse.json(
      { 
        success: true, 
        message: "User registered successfully",
        user 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Registration error:", error);
    
    // Specific error handling
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: "User with this email already exists" }, 
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." }, 
      { status: 500 }
    );
  }
}
