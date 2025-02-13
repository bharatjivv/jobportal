import { getJobById } from '../../../../actions/jobs';

export default async function JobDetails({ params }: { params: { id: string } }) {
  const job = await getJobById(parseInt(params.id, 10));

  if (!job) return <p className="text-center text-red-500">Job not found.</p>;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.description}</p>
      <p className="mt-2 text-gray-700">Location: {job.location}</p>
      <p className="mt-2 font-semibold">Salary: ${job.salary}</p>
      <a href={`/candidate/apply/${job.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Apply Now
      </a>
    </main>
  );
}

