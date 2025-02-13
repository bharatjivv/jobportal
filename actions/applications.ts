"use server";
import prisma from "../lib/prisma";

export async function applyForJob(data: { jobId: string; name: string; email: string; resume: string; coverLetter: string }) {  
  return await prisma.application.create({
    data: {
      jobId: data.jobId, 
      name: data.name,
      email: data.email,
      resume: data.resume,
      coverLetter: data.coverLetter
    }
  });
}

export async function getApplicationsByJob(jobId: string) {
  return await prisma.application.findMany({ where: { jobId: jobId } });
}