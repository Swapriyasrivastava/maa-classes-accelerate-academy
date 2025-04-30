
import React from 'react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const ProfileSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-maa-dark">Our Leadership</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Founder Profile */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="flex items-center justify-center h-full p-4">
                  <Avatar className="w-48 h-48 border-4 border-maa-blue shadow-lg">
                    <AvatarImage 
                      src="/lovable-uploads/8a6ad804-fe3b-4305-94e0-51781bea48e4.png" 
                      alt="Founder of MAA Classes"
                      className="object-cover"
                    />
                    <AvatarFallback>KJ</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-12 bg-maa-blue mr-3"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-maa-dark">Keshav Kumar Jha</h3>
                    <p className="text-maa-orange font-medium">Founder</p>
                  </div>
                </div>
                
                <div className="mb-6 text-gray-600">
                  <p className="mb-4">
                    With over 15 years of experience in teaching Physics for JEE and NEET, I founded MAA Classes with a vision to provide quality education to students aspiring for success in competitive exams.
                  </p>
                  <blockquote className="border-l-4 border-maa-blue pl-4 italic mt-4">
                    <Quote size={20} className="text-maa-blue mb-1" />
                    "Our mission is to nurture talent through innovative teaching methods and personal attention. We don't just prepare students for exams, we prepare them for life."
                  </blockquote>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500"><strong>Education:</strong> M.Sc. Physics, BIT Mesra</p>
                  <p className="text-sm text-gray-500"><strong>Specialization:</strong> Physics, JEE Advanced & NEET</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Director Profile */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="md:flex">
              <div className="md:w-2/5">
                <div className="flex items-center justify-center h-full p-4">
                  <Avatar className="w-48 h-48 border-4 border-maa-orange shadow-lg">
                    <AvatarImage 
                      src="/lovable-uploads/7bcdb808-31f6-4ac0-900b-422afff378da.png" 
                      alt="Director of MAA Classes"
                      className="object-cover"
                    />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-12 bg-maa-orange mr-3"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-maa-dark">Priya Sharma</h3>
                    <p className="text-maa-blue font-medium">Director</p>
                  </div>
                </div>
                
                <div className="mb-6 text-gray-600">
                  <p className="mb-4">
                    With expertise in Mathematics and 12 years of teaching experience, I am committed to helping students achieve their academic goals through personalized coaching and mentorship.
                  </p>
                  <blockquote className="border-l-4 border-maa-orange pl-4 italic mt-4">
                    <Quote size={20} className="text-maa-orange mb-1" />
                    "At MAA Classes, we believe every student has unique potential. Our goal is to identify that potential and provide the right environment for students to excel."
                  </blockquote>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500"><strong>Education:</strong> M.Sc. Mathematics, Delhi University</p>
                  <p className="text-sm text-gray-500"><strong>Specialization:</strong> Mathematics, CBSE Board Exams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
