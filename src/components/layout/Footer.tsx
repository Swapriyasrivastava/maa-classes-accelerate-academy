import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-maa-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png" 
                alt="Maa Classes Logo" 
                className="h-12 mr-2"
              />
              <div>
                <h3 className="text-xl font-bold">MAA CLASSES</h3>
                <p className="text-xs text-maa-orange font-medium">Be The Best With The Best</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Premier coaching institute for JEE, NEET, Boards and competitive exams. Excellence in education since 2010.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-maa-orange transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-maa-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-maa-orange transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white hover:text-maa-orange transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/admission" className="text-gray-300 hover:text-white transition-colors">Admission</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">JEE Main & Advanced</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">NEET-UG</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">CBSE Boards (6-12)</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">ICSE Boards (6-10)</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Foundation Courses</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Olympiads</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-maa-orange" />
                <span className="text-gray-300">Maa Classes, Bhagalpur, Bihar - 812002</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-maa-orange" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-maa-orange" />
                <a href="mailto:jhakeshavkumar62093@gmail.com" className="text-gray-300 hover:text-white transition-colors">jhakeshavkumar62093@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MAA Classes. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-maa-orange hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
