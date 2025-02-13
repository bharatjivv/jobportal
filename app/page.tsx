
"use client";

import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to the Job Board</h1>
      <p className="text-lg text-gray-600 mt-2">Find your next opportunity or hire top talent.</p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/candidate/jobs"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Browse Jobs
        </a>
        <a
          href="/company/jobs/new"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Post a Job
        </a>
      </div>
    </main>
  );
};

export default Home;
