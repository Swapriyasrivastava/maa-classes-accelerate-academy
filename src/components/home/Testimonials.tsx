
import React, { useState } from 'react';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';

// Sample testimonials data
const testimonialVideos = [
  {
    id: 1,
    name: "Amit Kumar",
    year: "2022",
    achievement: "NEET-UG Bihar Topper",
    thumbnail: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Shubham Kumar",
    year: "2020",
    achievement: "NEET-UG Bihar Topper",
    thumbnail: "/lovable-uploads/7483b7b9-be08-4bde-a232-78d8c0154808.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "MD Shoaib",
    year: "2021",
    achievement: "NEET-UG Bihar Topper",
    thumbnail: "/lovable-uploads/d40d1104-c289-4c05-afb5-fe46b378610c.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 4,
    name: "Sujeet Kumar",
    year: "2018",
    achievement: "NEET-UG Bihar Topper",
    thumbnail: "/lovable-uploads/18e214f1-5716-4b4e-bc85-3d79b3ddc31d.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 5,
    name: "Rahul Sharma",
    year: "2023",
    achievement: "JEE Advanced AIR 120",
    thumbnail: "/lovable-uploads/f08f0c42-ecda-47c4-8a76-9167aa424571.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: 6,
    name: "Priya Singh",
    year: "2023",
    achievement: "JEE Main AIR 45",
    thumbnail: "/lovable-uploads/a222f97e-ab1a-4f7f-9eaf-ef0aeaa1742a.png",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

const TestimonialCard = ({ video }) => {
  return (
    <div className="relative group">
      <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        {/* Thumbnail with play button */}
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.name} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
            <div className="w-16 h-16 rounded-full bg-maa-orange flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={30} className="text-white ml-1" />
            </div>
          </div>
        </div>
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
          <h3 className="font-bold text-lg">{video.name}</h3>
          <div className="flex justify-between items-center">
            <p>{video.achievement}</p>
            <p className="bg-maa-orange text-white px-2 py-1 rounded text-xs">{video.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  
  const nextSlide = () => {
    setStartIndex(prev => 
      prev + itemsPerPage >= testimonialVideos.length ? 0 : prev + itemsPerPage
    );
  };
  
  const prevSlide = () => {
    setStartIndex(prev => 
      prev - itemsPerPage < 0 ? Math.max(0, testimonialVideos.length - itemsPerPage) : prev - itemsPerPage
    );
  };
  
  const displayedVideos = testimonialVideos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonials Of Our Top Performers</h2>
        
        <div className="relative mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedVideos.map(video => (
              <TestimonialCard key={video.id} video={video} />
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-maa-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-maa-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
