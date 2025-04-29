
import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "/lovable-uploads/364f88a4-4259-418b-9d94-68b3cb6c271f.png",
    alt: "Students at MAA Classes",
    category: "campus"
  },
  {
    id: 2,
    src: "/lovable-uploads/05b7a937-ec30-4db2-a396-468c63bc42dc.png",
    alt: "Award ceremony at MAA Classes",
    category: "events"
  },
  {
    id: 3,
    src: "/lovable-uploads/2b99b84a-74a6-42d0-9f89-2ea28661e6c3.png",
    alt: "Classroom session at MAA Classes",
    category: "classroom"
  },
  {
    id: 4,
    src: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png",
    alt: "Independence day celebration",
    category: "events"
  },
  {
    id: 5,
    src: "/lovable-uploads/11e4b0f7-dfee-4899-b954-397e7bba41fe.png",
    alt: "Students at MAA Classes",
    category: "campus"
  },
  {
    id: 6,
    src: "/lovable-uploads/18e214f1-5716-4b4e-bc85-3d79b3ddc31d.png",
    alt: "Scholarship award ceremony",
    category: "events"
  }
];

const categories = ["all", "campus", "classroom", "events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  
  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Gallery</h2>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-md transition-colors capitalize ${
                activeCategory === category 
                  ? 'bg-maa-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer hover-scale"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4">{selectedImage.alt}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
