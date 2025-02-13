"use server";
import prisma from "../lib/prisma";

export async function getJobs() {
  try{
    return await prisma.job.findMany();
  }
  catch(e){
    console.log(e, 'e');
  }
}

export async function getJobById(id: number) {
  return await prisma.job.findUnique({ where: { id: id.toString() } });
}

export async function createJob(data: { title: string; description: string; category: string; location: string; salary: number }) {
    try {
      const newJob = await prisma.job.create({ data });
      return { success: true, job: newJob };
    } catch (error) {
      console.error("Error creating job:", error);
      return { success: false, error: "Failed to create job." };
    }
  }

export async function applyForJob(data: { jobId: string; name: string; email: string; resume: string; coverLetter: string }) {  
  return await prisma.application.create({ data });
}
