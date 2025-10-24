import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// ✅ Type assertion lagani zaruri hai — ye type error fix karega
const handler = NextAuth(authOptions as NextAuthOptions);

export const GET = handler;
export const POST = handler;
