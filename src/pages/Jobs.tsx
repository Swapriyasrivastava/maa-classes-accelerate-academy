
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import JobsList from '../components/jobs/JobsList';
import JobApplicationForm from '../components/jobs/JobApplicationForm';

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Job Openings</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Join our team at MAA Classes and be part of shaping the future of education.
            </p>
          </div>
        </div>
        <JobsList />
        <JobApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
