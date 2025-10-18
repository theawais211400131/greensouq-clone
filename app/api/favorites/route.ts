// app/api/favorites/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email)
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { 
        favorites: { 
          orderBy: { 
            createdAt: 'desc' 
          } 
        } 
      },
    });

    return NextResponse.json({ favorites: user?.favorites || [] });
  } catch (error) {
    console.error("GET favorites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email)
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });

    const { text } = await req.json();
    
    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const favorite = await prisma.favorite.create({
      data: { 
        text: text.trim(), 
        userId: user.id 
      },
    });

    return NextResponse.json({ 
      success: true, 
      favorite 
    });
  } catch (error) {
    console.error("POST favorites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email)
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Favorite ID is required" }, { status: 400 });
    }

    // Check if the favorite belongs to the current user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { favorites: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const favorite = user.favorites.find(fav => fav.id === id);
    if (!favorite) {
      return NextResponse.json({ error: "Favorite not found" }, { status: 404 });
    }

    // Delete the favorite
    await prisma.favorite.delete({
      where: { id },
    });

    return NextResponse.json({ 
      success: true,
      message: "Favorite deleted successfully" 
    });
  } catch (error) {
    console.error("DELETE favorites error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}