import { getJobs } from "../../../actions/jobs";

export default async function JobsPage() {
  const jobs = await getJobs();


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <ul className="space-y-4">
        {jobs && jobs.map((job) => (
          <li key={job.id} className="p-4 border rounded-lg shadow">
            <a href={`/candidate/jobs/${job.id}`} className="text-blue-600 hover:underline">
              {job.title} - {job.location}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
