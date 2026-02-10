import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request){
  try{
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok:false, message:"Provide email and password" },
        { status:400 }
      );
    }

    const user = await prisma.user.findUnique({
      where:{ email }
    });

    // Generic message (security best practice)
    if(!user){
      return NextResponse.json(
        { ok:false, message:"Wrong email or password" },
        { status:401 }
      );
    }

    const valid = await bcrypt.compare(password,user.password);

    if(!valid){
      return NextResponse.json(
        { ok:false, message:"Wrong email or password" },
        { status:401 }
      );
    }

    return NextResponse.json({
      ok:true,
      message:"Login successful"
    });

  } catch(err){
    console.error(err);
    return NextResponse.json(
      { ok:false, message:"Server error" },
      { status:500 }
    );
  }
}
