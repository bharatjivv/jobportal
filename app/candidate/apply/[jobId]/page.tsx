"use client";
import { useState } from "react";

const ApplyJobPage = ({ params }: { params: { jobId: string } }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/applications", {
      method: "POST",
      body: JSON.stringify({ jobId: params.jobId, ...formData }),
      headers: { "Content-Type": "application/json" },
    });
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="resume" placeholder="Resume Link" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="coverLetter" placeholder="Cover Letter" onChange={handleChange} className="border p-2 w-full"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ApplyJobPage;
