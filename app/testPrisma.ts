import prisma from "../lib/prisma";

async function testPrisma() {
  try {
    const newJob = await prisma.job.create({
      data: {
        title: "Test Job",
        description: "This is a test",
        category: "IT",
        location: "Remote",
        salary: 100000,
      },
    });

    console.log("Job Created:", newJob);

    const jobs = await prisma.job.findMany();
    console.log("All Jobs:", jobs);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();
