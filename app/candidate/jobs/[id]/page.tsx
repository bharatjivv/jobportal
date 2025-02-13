import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const CandidateJobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.description}</p>
      <Link href={`/candidate/apply/${job.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Apply Now
      </Link>
    </div>
  );
};

export default CandidateJobDetailPage;
