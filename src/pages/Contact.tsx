
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Get In Touch</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us with any questions or queries.
            </p>
          </div>
        </div>
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
