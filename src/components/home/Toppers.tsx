
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Sample toppers data
const toppersByYear = {
  "2024": [
    { id: 1, name: "Amit Kumar", percentage: "98.8%", exam: "NEET-UG", rank: "AIR 45", image: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png" },
    { id: 2, name: "Priya Singh", percentage: "97.6%", exam: "JEE Advanced", rank: "AIR 120", image: "/lovable-uploads/7483b7b9-be08-4bde-a232-78d8c0154808.png" },
    { id: 3, name: "Rahul Das", percentage: "99.1%", exam: "JEE Main", rank: "AIR 32", image: "/lovable-uploads/f08f0c42-ecda-47c4-8a76-9167aa424571.png" },
    { id: 4, name: "Neha Gupta", percentage: "96.7%", exam: "CBSE 12th", rank: "State 1st", image: "/lovable-uploads/a222f97e-ab1a-4f7f-9eaf-ef0aeaa1742a.png" },
  ],
  "2023": [
    { id: 5, name: "Mohit Sharma", percentage: "97.9%", exam: "NEET-UG", rank: "AIR 78", image: "/lovable-uploads/11e4b0f7-dfee-4899-b954-397e7bba41fe.png" },
    { id: 6, name: "Kavya Reddy", percentage: "96.5%", exam: "JEE Advanced", rank: "AIR 156", image: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png" },
    { id: 7, name: "Ankit Verma", percentage: "98.2%", exam: "JEE Main", rank: "AIR 65", image: "/lovable-uploads/18e214f1-5716-4b4e-bc85-3d79b3ddc31d.png" },
    { id: 8, name: "Sanya Malhotra", percentage: "95.8%", exam: "CBSE 12th", rank: "State 3rd", image: "/lovable-uploads/05f30935-953d-44db-ba82-d1690ba2909d.png" },
  ],
  "2022": [
    { id: 9, name: "Rajesh Kumar", percentage: "97.2%", exam: "NEET-UG", rank: "AIR 102", image: "/lovable-uploads/364f88a4-4259-418b-9d94-68b3cb6c271f.png" },
    { id: 10, name: "Pooja Sharma", percentage: "95.9%", exam: "JEE Advanced", rank: "AIR 189", image: "/lovable-uploads/a222f97e-ab1a-4f7f-9eaf-ef0aeaa1742a.png" },
    { id: 11, name: "Vikram Singh", percentage: "97.5%", exam: "JEE Main", rank: "AIR 88", image: "/lovable-uploads/d40d1104-c289-4c05-afb5-fe46b378610c.png" },
    { id: 12, name: "Meera Patel", percentage: "95.2%", exam: "CBSE 12th", rank: "State 5th", image: "/lovable-uploads/11e4b0f7-dfee-4899-b954-397e7bba41fe.png" },
  ],
  "2021": [
    { id: 13, name: "Aditya Sharma", percentage: "96.8%", exam: "NEET-UG", rank: "AIR 135", image: "/lovable-uploads/d40d1104-c289-4c05-afb5-fe46b378610c.png" },
    { id: 14, name: "Sneha Kapoor", percentage: "95.4%", exam: "JEE Advanced", rank: "AIR 210", image: "/lovable-uploads/f5d333f3-bf2e-46ff-b97e-54c8c3cd3c29.png" },
    { id: 15, name: "Rohan Das", percentage: "96.9%", exam: "JEE Main", rank: "AIR 112", image: "/lovable-uploads/18e214f1-5716-4b4e-bc85-3d79b3ddc31d.png" },
    { id: 16, name: "Anjali Singh", percentage: "94.8%", exam: "CBSE 12th", rank: "State 7th", image: "/lovable-uploads/7483b7b9-be08-4bde-a232-78d8c0154808.png" },
  ]
};

const years = ["2024", "2023", "2022", "2021"];

const TopperCard = ({ topper }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
      <div className="bg-gradient-to-r from-maa-blue to-blue-700 h-3"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-2 border-maa-blue">
            <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-maa-dark">{topper.name}</h3>
            <p className="text-maa-orange font-medium">{topper.rank} | {topper.exam}</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-gray-50 rounded p-4 mt-2">
          <div className="text-center">
            <p className="text-sm text-gray-600">Percentile</p>
            <p className="font-bold text-maa-blue">{topper.percentage}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Batch</p>
            <p className="font-bold text-maa-blue">MAA Classes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Toppers = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const toppers = toppersByYear[selectedYear] || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Star Performers</h2>
        
        {/* Year selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {years.map(year => (
            <button
              key={year}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedYear === year 
                  ? 'bg-maa-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        
        {/* Toppers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {toppers.map(topper => (
            <TopperCard key={topper.id} topper={topper} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
