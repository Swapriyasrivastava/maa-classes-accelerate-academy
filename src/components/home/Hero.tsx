
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-maa-blue pt-24 md:pt-32 pb-16 md:pb-20 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Accelerate Your Academic Success with <span className="text-maa-orange">MAA Classes</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Join No.1 Medical & IIT Coaching Institute of Eastern India for the preparation of JEE (MAIN & ADV), NEET-UG, Medical, NTSE, and OLYMPIADS exams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-primary flex items-center">
                Explore Courses <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/admission" className="btn-outline border-white text-white hover:bg-white hover:text-maa-blue">
                Admission Enquiry
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/e9a945f8-1d6e-49c8-9ccd-14492c9f32f0.png" 
                alt="Students at MAA Classes" 
                className="rounded-lg shadow-2xl max-w-full w-full lg:max-w-md xl:max-w-lg relative z-10"
              />
              
              {/* Floating Image Elements */}
              <img 
                src="/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png" 
                alt="MAA Classes Logo" 
                className="absolute -top-10 -left-16 w-28 h-28 object-contain rounded-full border-4 border-white shadow-lg animate-float z-20"
              />
              <img 
                src="/lovable-uploads/7bcdb808-31f6-4ac0-900b-422afff378da.png" 
                alt="Director" 
                className="absolute top-1/4 -right-10 w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg animate-float animation-delay-300 z-20"
                style={{animationDelay: '1s'}}
              />
              <img 
                src="/lovable-uploads/0f0a2073-9fff-4b5c-a5a2-4d75e3bfc4d8.png" 
                alt="Founder" 
                className="absolute -bottom-10 -left-10 w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg animate-float z-20"
                style={{animationDelay: '2s'}}
              />

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-maa-orange rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
