"use client";

import { useState } from "react";
import { createJob } from '../../../../actions/jobs'
import { useRouter } from "next/navigation";

export default function NewJobPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "", category: "", location: "", salary: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createJob({ ...form, salary: Number(form.salary) });
    router.push("/company/jobs"); 
  }

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Job Title" className="w-full p-2 border rounded" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <textarea placeholder="Description" className="w-full p-2 border rounded" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="Category" className="w-full p-2 border rounded" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input type="text" placeholder="Location" className="w-full p-2 border rounded" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <input type="number" placeholder="Salary" className="w-full p-2 border rounded" value={form.salary} onChange={(e) => setForm({ ...form, salary: e.target.value })} required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Post Job</button>
      </form>
    </main>
  );
}
