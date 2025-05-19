
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Sample job listings - in a real app, these would come from a database
const jobs = [
  {
    id: 1,
    title: "Mathematics Teacher",
    department: "Teaching",
    location: "On-site",
    type: "Full-time",
    qualification: "M.Sc. Mathematics with B.Ed",
    description: "We are looking for an experienced Mathematics teacher who can teach students from class 9th to 12th. The ideal candidate should have at least 3 years of experience and strong knowledge of the subject.",
  },
  {
    id: 2,
    title: "Physics Instructor",
    department: "Teaching",
    location: "Hybrid",
    type: "Part-time",
    qualification: "M.Sc. Physics",
    description: "Join our team as a Physics instructor for senior classes. Candidates should have excellent communication skills and the ability to make complex concepts easy to understand.",
  },
  {
    id: 3,
    title: "Administrative Assistant",
    department: "Administration",
    location: "On-site",
    type: "Full-time",
    qualification: "Bachelor's degree in any discipline",
    description: "We are seeking a detail-oriented Administrative Assistant to support our office operations. Responsibilities include scheduling, record keeping, and communication with parents and students.",
  }
];

const JobsList = () => {
  // Function to scroll to the application form
  const scrollToApplicationForm = () => {
    const applicationForm = document.getElementById('job-application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Current Openings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow hover:scale-105 duration-300">
              <CardHeader>
                <CardTitle className="text-maa-blue">{job.title}</CardTitle>
                <CardDescription>{job.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-medium text-maa-dark">Qualification:</p>
                  <p className="text-sm text-gray-700">{job.qualification}</p>
                </div>
                <p className="text-sm text-gray-600">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={scrollToApplicationForm}
                  className="w-full bg-maa-blue hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsList;
