
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, BookOpen, Mail } from 'lucide-react';

const CourseOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Course Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Brochure Option */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-maa-blue">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-maa-dark mb-3">Brochure</h3>
            <p className="text-gray-600 mb-6">
              Students seeking admission to any of our batches are required to undergo our admission test, which is based upon the syllabus of respective class.
            </p>
            <Link to="/brochure" className="btn-outline">
              <Download size={16} className="mr-2" /> Get Brochure
            </Link>
          </div>
          
          {/* Registration Option */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-maa-orange">
              <FileText size={32} />
            </div>
            <h3 className="text-xl font-bold text-maa-dark mb-3">Registration</h3>
            <p className="text-gray-600 mb-6">
              The interested students can get registered online or offline and take the admission test. For offline exam, kindly contact at our office.
            </p>
            <Link to="/register" className="btn-primary">
              Register Now
            </Link>
          </div>
          
          {/* Take Test Option */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-maa-blue">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold text-maa-dark mb-3">Admission Test</h3>
            <p className="text-gray-600 mb-6">
              The students who qualify our admission can be enrolled in any of our courses. The minimum marks to pass admission test is 70%. It is the mandatory criteria.
            </p>
            <Link to="/test" className="btn-primary bg-maa-blue">
              Take Test Now
            </Link>
          </div>
          
          {/* Contact Option */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-maa-orange">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-maa-dark mb-3">Any Enquiry</h3>
            <p className="text-gray-600 mb-6">
              For any admission enquiries, you can contact us at +91 98765 43210. You can also mail your queries to jhakeshavkumar62093@gmail.com. We love to hear from you!
            </p>
            <Link to="/contact" className="btn-outline">
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOptions;
