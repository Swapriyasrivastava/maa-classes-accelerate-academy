
import React from 'react';
import { CheckCircle, Lightbulb, Target, TrendingUp, Users, BookOpen, Award, Star } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle className="text-maa-orange" size={28} />,
    title: "Experienced Faculty",
    description: "Learn from highly qualified teachers with proven track records of student success."
  },
  {
    icon: <Lightbulb className="text-maa-orange" size={28} />,
    title: "Innovative Teaching Methods",
    description: "Our unique teaching approach makes complex concepts easy to understand."
  },
  {
    icon: <Target className="text-maa-orange" size={28} />,
    title: "Focused Preparation",
    description: "Specially designed curriculum focusing on competitive exams and boards simultaneously."
  },
  {
    icon: <TrendingUp className="text-maa-orange" size={28} />,
    title: "Proven Results",
    description: "Consistent record of top ranks in JEE, NEET and excellent board results."
  },
  {
    icon: <Users className="text-maa-orange" size={28} />,
    title: "Personal Attention",
    description: "Small batch sizes ensuring individual attention to each student."
  },
  {
    icon: <BookOpen className="text-maa-orange" size={28} />,
    title: "Comprehensive Study Material",
    description: "Well-structured study materials developed by expert faculty team."
  },
  {
    icon: <Award className="text-maa-orange" size={28} />,
    title: "Scholarship Programs",
    description: "Merit-based scholarships to recognize and support talented students."
  },
  {
    icon: <Star className="text-maa-orange" size={28} />,
    title: "Regular Performance Analysis",
    description: "Continuous evaluation through tests and detailed performance analysis."
  }
];

const WhyJoin = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Why Join MAA Classes?</h2>
          <p className="text-gray-600 text-lg">With our unique formula of nurture, your journey to JEE/NEET is set to take off. Discover what makes us the preferred choice for serious aspirants.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-maa-dark">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/admission" className="btn-primary inline-flex items-center">
            Join MAA Classes <CheckCircle size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
