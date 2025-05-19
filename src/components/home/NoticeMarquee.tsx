
import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

// Sample notices - in a real app, these would come from a database
const notices = [
  "Admission open for academic year 2025-26. Apply now!",
  "Special scholarship test on 15th June 2024. Register today.",
  "Results for JEE Advanced batch announced. Check your results.",
  "Summer coaching classes start from 1st May. Limited seats available.",
  "New batch for NEET preparation starting next month. Pre-register now."
];

const NoticeMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <section className="bg-maa-blue py-4 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center mr-4 bg-white text-maa-blue px-3 py-1 rounded-md">
            <Bell size={20} className="mr-2 animate-pulse" />
            <span className="font-bold">NOTICES</span>
          </div>
          
          <div 
            className="overflow-hidden relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`whitespace-nowrap flex ${!isPaused ? "animate-marquee" : ""}`}
              style={{
                animationDuration: '30s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {notices.map((notice, index) => (
                <div 
                  key={index}
                  className="mx-8 text-lg"
                >
                  • {notice}
                </div>
              ))}
              
              {/* Duplicate notices to ensure continuous flow */}
              {notices.map((notice, index) => (
                <div 
                  key={`repeat-${index}`}
                  className="mx-8 text-lg"
                >
                  • {notice}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeMarquee;
