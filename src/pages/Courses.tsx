
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CourseList from '../components/courses/CourseList';
import CourseOptions from '../components/courses/CourseOptions';

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Our Courses</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Comprehensive coaching programs designed for success in competitive exams and board examinations.
            </p>
          </div>
        </div>
        <CourseList />
        <CourseOptions />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
