
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AdmissionForm from '../components/admission/AdmissionForm';

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Admission</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Join MAA Classes and take the first step towards a bright academic future.
            </p>
          </div>
        </div>
        <AdmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
