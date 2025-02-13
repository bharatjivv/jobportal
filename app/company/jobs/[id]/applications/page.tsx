import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const JobApplicationsPage = () => {
  const { id } = useParams();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(`/api/applications?jobId=${id}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, [id]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app: any) => (
            <li key={app.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p>Email: {app.email}</p>
              <p>Resume: <a href={app.resume} target="_blank" className="text-blue-600">View Resume</a></p>
              <p>Cover Letter: {app.coverLetter}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobApplicationsPage;
