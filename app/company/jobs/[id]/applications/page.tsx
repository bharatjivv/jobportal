import { getApplicationsByJob } from '../../../../../actions/applications';

export default async function ApplicationsPage({ params }: { params: { id: string } }) {
  const applications = await getApplicationsByJob(params.id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Applications for this Job</h1>
      {applications.length === 0 ? (
        <p>No applications yet.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="p-4 border rounded-lg shadow">
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Resume:</strong> <a href={app.resume} className="text-blue-600 hover:underline">View Resume</a></p>
              <p><strong>Cover Letter:</strong> {app.coverLetter}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
