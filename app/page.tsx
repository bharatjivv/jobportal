"use client";
import '../styles/globals.css';
import React from "react";

import { NextResponse } from "next/server";
import prisma from '../lib/prisma';

export async function GET() {
  try {
    const jobs = await prisma.job.findMany();
    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    console.error("Prisma Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to the Job Board</h1>
      <p className="text-lg text-gray-600 mt-2">Find your next opportunity or hire top talent.</p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/candidate/jobs"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Browse Jobs
        </a>
        <a
          href="/company/jobs/new"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Post a Job
        </a>
      </div>
    </main>
  );
}

export default Home;


