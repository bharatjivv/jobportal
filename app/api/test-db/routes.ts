import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const jobs = await prisma.job.findMany();
    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

