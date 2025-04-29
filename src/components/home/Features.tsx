
import React from 'react';
import { BookOpen, Video, FileText, GraduationCap, Award, BarChart3, Clock, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <GraduationCap size={32} className="text-maa-blue" />,
    title: "Expert Teachers",
    description: "Highly qualified faculty with extensive experience in their subjects"
  },
  {
    icon: <FileText size={32} className="text-maa-blue" />,
    title: "Study Material",
    description: "Comprehensive study materials designed by expert educators"
  },
  {
    icon: <Video size={32} className="text-maa-blue" />,
    title: "Video Classes",
    description: "Video lectures for specific topics that students can access anytime"
  },
  {
    icon: <BarChart3 size={32} className="text-maa-blue" />,
    title: "Online Exams",
    description: "Regular online assessments to track student progress"
  },
  {
    icon: <BookOpen size={32} className="text-maa-blue" />,
    title: "Pattern-Proof Course Design",
    description: "Courses designed to adapt to changing exam patterns"
  },
  {
    icon: <Users size={32} className="text-maa-blue" />,
    title: "Special Doubt Clearing Cell",
    description: "Dedicated faculty to resolve student doubts and queries"
  },
  {
    icon: <Clock size={32} className="text-maa-blue" />,
    title: "Flexible Batches",
    description: "Multiple batch options to accommodate different schedules"
  },
  {
    icon: <Award size={32} className="text-maa-blue" />,
    title: "Scholarship Tests",
    description: "Opportunity to earn scholarships based on performance"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Facilities</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-maa-blue hover-scale"
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-maa-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
