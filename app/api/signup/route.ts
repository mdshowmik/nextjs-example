import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; 

import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok:false, message:"Provide email and password" },
        { status:400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where:{ email }
    });

    if(existing){
      return NextResponse.json(
        { ok:false, message:"User already exists" },
        { status:400 }
      );
    }

    const hash = await bcrypt.hash(password,10);

    await prisma.user.create({
      data:{ email, password:hash }
    });

    return NextResponse.json({
      ok:true,
      message:"Account created successfully"
    });

  } catch(err){
    console.error(err);
    return NextResponse.json(
      { ok:false, message:"Server error" },
      { status:500 }
    );
  }
}
