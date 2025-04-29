
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProfileSection from '../components/about/ProfileSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">About MAA Classes</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Premier coaching institute dedicated to nurturing future leaders through quality education and personalized mentoring.
            </p>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                MAA Classes was established in 2010 with a vision to provide quality education and guidance to students preparing for competitive exams like JEE, NEET, and various board examinations. What began as a small coaching center has now grown into one of the premier educational institutes in Eastern India.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in the philosophy of "Go Fat Go Fast" - which means having a solid foundation (fat) and efficient problem-solving skills (fast). Our teaching methodology focuses on conceptual clarity, analytical thinking, and strategic exam preparation.
              </p>
              <p className="text-gray-700">
                Over the years, we have helped thousands of students achieve their dreams by securing admissions in prestigious institutions across India. Our success is reflected in the consistent results our students have delivered in various competitive exams.
              </p>
            </div>
          </div>
        </div>
        <ProfileSection />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to empower students with knowledge, skills, and confidence to excel in their academic pursuits and beyond. We strive to create a learning environment that fosters intellectual growth, critical thinking, and character development.
              </p>
              <h2 className="text-2xl font-bold mb-6 mt-10">Our Vision</h2>
              <p className="text-gray-700">
                We envision becoming the most trusted name in education, recognized for our innovative teaching methods, student-centric approach, and consistent results. We aim to create a community of lifelong learners who contribute positively to society and lead meaningful lives.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
