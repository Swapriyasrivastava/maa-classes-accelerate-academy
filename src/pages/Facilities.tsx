
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FacilitiesSection from '../components/facilities/Facilities';

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Our Facilities</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              We provide world-class facilities to ensure an optimal learning environment for our students.
            </p>
          </div>
        </div>
        <FacilitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
