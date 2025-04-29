
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-maa-dark mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-maa-orange after:mt-2">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-50 p-3 rounded-full text-maa-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maa-dark mb-1">Location</h4>
                    <p className="text-gray-600">
                      Maa Classes, Manik Sarkar, Adampur, <br />
                      Bhagalpur City, Bhagalpur - 812002 <br />
                      (Near Don Bosco School, Near KK Nursing Home)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-orange-50 p-3 rounded-full text-maa-orange">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maa-dark mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-maa-blue transition-colors">+91 98765 43210</a> <br />
                      <span className="text-sm">For general inquiries</span>
                    </p>
                    <p className="text-gray-600 mt-2">
                      <a href="tel:+919876543211" className="hover:text-maa-blue transition-colors">+91 98765 43211</a> <br />
                      <span className="text-sm">For admission inquiries</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-50 p-3 rounded-full text-maa-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maa-dark mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:jhakeshavkumar62093@gmail.com" className="hover:text-maa-blue transition-colors">jhakeshavkumar62093@gmail.com</a> <br />
                      <span className="text-sm">We'll respond as soon as possible</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-orange-50 p-3 rounded-full text-maa-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-maa-dark mb-1">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 8:00 AM - 8:00 PM <br />
                      Sunday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-2 h-full">
              <div className="rounded-lg overflow-hidden h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14452.888326357007!2d87.00292815!3d25.2452635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f049f19708042f%3A0xf5a762ce7a3f41de!2sBhagalpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1651835224175!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MAA Classes Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
