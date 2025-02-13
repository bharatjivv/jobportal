"use server";
import prisma from "../lib/prisma";

export async function getJobs() {
  return await prisma.job.findMany();
}

export async function getJobById(id: number) {
  return await prisma.job.findUnique({ where: { id: id.toString() } });
}

export async function createJob(data: { title: string; description: string; category: string; location: string; salary: number }) {
  return await prisma.job.create({ data });
}

export async function applyForJob(data: { jobId: string; name: string; email: string; resume: string; coverLetter: string }) {  
  return await prisma.application.create({ data });
}
