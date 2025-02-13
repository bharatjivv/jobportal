
import Link from "next/link";
import { getJobs } from '../../../actions/jobs';

const CompanyDashboard = async () => {
  const jobs = await getJobs();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Job Listings</h1>
      <Link href="/company/jobs/new" className="mb-4 inline-block bg-green-500 text-white px-4 py-2 rounded">Post a Job</Link>
      <ul className="space-y-4">
        {jobs && jobs.map((job: any) => (
          <li key={job.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <Link href={`/company/jobs/${job.id}/applications`} className="text-blue-600">View Applications</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDashboard;
