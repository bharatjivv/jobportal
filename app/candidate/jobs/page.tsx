// import Link from "next/link";

// const CandidateJobsPage = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`);
//   const jobs = await res.json();

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
//       <ul className="space-y-4">
//         {jobs.map((job: any) => (
//           <li key={job.id} className="border p-4 rounded-lg">
//             <h2 className="text-xl font-semibold">{job.title}</h2>
//             <p>{job.description}</p>
//             <Link href={`/candidate/jobs/${job.id}`} className="text-blue-600">View Details</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CandidateJobsPage;


import { getJobs } from "../../../actions/jobs";

export default async function JobsPage() {
  const jobs = await getJobs();

  // return (
  //   <main className="p-6">
  //     <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
  //     <ul className="space-y-4">
  //       {jobs.map((job) => (
  //         <li key={job.id} className="p-4 border rounded-lg shadow">
  //           <a href={`/candidate/jobs/${job.id}`} className="text-blue-600 hover:underline">
  //             {job.title} - {job.location}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </main>
  // );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
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
