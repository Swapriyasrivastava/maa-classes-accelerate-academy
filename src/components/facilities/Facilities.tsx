
import React from 'react';
import { BookOpen, Presentation, Library, Coffee, Wifi, Users, Monitor, BarChart } from 'lucide-react';

const facilitiesData = [
  {
    icon: <BookOpen size={32} className="text-maa-blue" />,
    title: "Modern Classrooms",
    description: "Spacious air-conditioned classrooms equipped with digital learning tools.",
    image: "/lovable-uploads/2b99b84a-74a6-42d0-9f89-2ea28661e6c3.png"
  },
  {
    icon: <Library size={32} className="text-maa-blue" />,
    title: "Library",
    description: "Well-stocked library with comprehensive study materials and reference books.",
    image: "/lovable-uploads/05f30935-953d-44db-ba82-d1690ba2909d.png"
  },
  {
    icon: <Presentation size={32} className="text-maa-blue" />,
    title: "Audio-Visual Labs",
    description: "State-of-the-art audio-visual facilities for enhanced learning experience.",
    image: "/lovable-uploads/05b7a937-ec30-4db2-a396-468c63bc42dc.png"
  },
  {
    icon: <Monitor size={32} className="text-maa-blue" />,
    title: "Digital Learning",
    description: "Interactive digital content and online learning portals for students.",
    image: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png"
  },
  {
    icon: <Users size={32} className="text-maa-blue" />,
    title: "Doubt Clearing Sessions",
    description: "Regular doubt clearing sessions with dedicated faculty members.",
    image: "/lovable-uploads/11e4b0f7-dfee-4899-b954-397e7bba41fe.png"
  },
  {
    icon: <BarChart size={32} className="text-maa-blue" />,
    title: "Regular Tests",
    description: "Weekly and monthly tests to track student progress and performance.",
    image: "/lovable-uploads/f08f0c42-ecda-47c4-8a76-9167aa424571.png"
  },
  {
    icon: <Coffee size={32} className="text-maa-blue" />,
    title: "Student Lounge",
    description: "Comfortable lounge area for students to relax and interact during breaks.",
    image: "/lovable-uploads/05f30935-953d-44db-ba82-d1690ba2909d.png"
  },
  {
    icon: <Wifi size={32} className="text-maa-blue" />,
    title: "Wi-Fi Campus",
    description: "High-speed Wi-Fi connectivity throughout the campus for digital learning.",
    image: "/lovable-uploads/18e214f1-5716-4b4e-bc85-3d79b3ddc31d.png"
  }
];

const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={facility.image} 
          alt={facility.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-blue-50 mr-3">
            {facility.icon}
          </div>
          <h3 className="text-xl font-semibold text-maa-dark">{facility.title}</h3>
        </div>
        <p className="text-gray-600">{facility.description}</p>
      </div>
    </div>
  );
};

const Facilities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {facilitiesData.map((facility, index) => (
            <FacilityCard key={index} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
