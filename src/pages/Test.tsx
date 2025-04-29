
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TakeTest from '../components/courses/TakeTest';

const Test = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Take A Test</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Assess your preparation level with our comprehensive test series designed by experts.
            </p>
          </div>
        </div>
        <TakeTest />
      </main>
      <Footer />
    </div>
  );
};

export default Test;
