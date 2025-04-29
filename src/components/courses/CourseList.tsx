
import React, { useState } from 'react';
import { BookOpen, Check, File, Download } from 'lucide-react';
import { toast } from 'sonner';

// Sample course categories and courses
const courseCategories = [
  {
    id: 'jee',
    name: 'JEE (Main & Advanced)',
    courses: [
      { id: 'jee-1', name: 'JEE Two Year Program (11th & 12th)', duration: '2 Years', description: 'Comprehensive program covering complete JEE Main & Advanced syllabus along with Board exam preparation.' },
      { id: 'jee-2', name: 'JEE One Year Program (12th)', duration: '1 Year', description: 'Intensive one-year program focusing on JEE Main & Advanced for 12th students.' },
      { id: 'jee-3', name: 'JEE Crash Course', duration: '3 Months', description: 'Short-term focused course for last-minute preparation for JEE Main.' }
    ]
  },
  {
    id: 'neet',
    name: 'NEET-UG',
    courses: [
      { id: 'neet-1', name: 'NEET Two Year Program (11th & 12th)', duration: '2 Years', description: 'Complete preparation for NEET-UG covering Physics, Chemistry, and Biology along with Board exam preparation.' },
      { id: 'neet-2', name: 'NEET One Year Program (12th)', duration: '1 Year', description: 'Intensive one-year program focusing on NEET-UG for 12th students.' },
      { id: 'neet-3', name: 'NEET Crash Course', duration: '3 Months', description: 'Short-term focused course for last-minute preparation for NEET-UG.' }
    ]
  },
  {
    id: 'foundation',
    name: 'Foundation Program',
    courses: [
      { id: 'found-1', name: 'Class 9-10 Foundation for JEE/NEET', duration: '2 Years', description: 'Early preparation for JEE/NEET competitive exams along with school curriculum.' },
      { id: 'found-2', name: 'Class 8 Foundation', duration: '1 Year', description: 'Building strong fundamentals in Science and Mathematics with competitive exam orientation.' },
      { id: 'found-3', name: 'Class 6-7 Foundation', duration: '1-2 Years', description: 'Developing analytical thinking and problem-solving skills in young learners.' }
    ]
  },
  {
    id: 'boards',
    name: 'Board Exams',
    courses: [
      { id: 'board-1', name: 'CBSE Class 11-12 (Science)', duration: '1-2 Years', description: 'Focused preparation for CBSE Board exams with emphasis on conceptual clarity and scoring techniques.' },
      { id: 'board-2', name: 'CBSE Class 9-10', duration: '1-2 Years', description: 'Building strong foundation for board exams and preparing for higher classes.' },
      { id: 'board-3', name: 'ICSE Class 9-10', duration: '1-2 Years', description: 'Comprehensive preparation for ICSE board examinations.' }
    ]
  }
];

const CourseCard = ({ course }) => {
  const handleDownloadClick = () => {
    toast.success('Brochure download initiated', {
      description: 'The course details brochure is being downloaded.'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-maa-blue transition-all">
      <div className="bg-gradient-to-r from-maa-blue to-blue-500 py-3 px-6 text-white">
        <h3 className="text-lg font-semibold">{course.name}</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-700 mb-3">
          <Clock size={16} className="text-maa-orange" />
          <span>Duration: {course.duration}</span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <button 
            onClick={handleDownloadClick} 
            className="inline-flex items-center text-sm px-3 py-1.5 text-maa-blue border border-maa-blue rounded-md hover:bg-maa-blue hover:text-white transition-colors"
          >
            <Download size={16} className="mr-1" /> Brochure
          </button>
          <a 
            href="/register" 
            className="inline-flex items-center text-sm px-3 py-1.5 bg-maa-orange text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            <File size={16} className="mr-1" /> Register
          </a>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  const [activeCategory, setActiveCategory] = useState('jee');
  
  const activeCourses = courseCategories.find(cat => cat.id === activeCategory)?.courses || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Courses</h2>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {courseCategories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-3 rounded-md transition-colors border ${
                activeCategory === category.id 
                  ? 'bg-maa-blue text-white border-maa-blue' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-maa-blue'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {activeCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Add a small Clock component to avoid import errors
const Clock = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default CourseList;
