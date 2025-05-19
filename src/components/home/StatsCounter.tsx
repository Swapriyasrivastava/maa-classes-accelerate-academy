
import React, { useState, useEffect, useRef } from 'react';

const stats = [
  {
    title: "No. 1",
    value: "1",
    subtitle: "Coaching Institute Of Eastern India",
    icon: "/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png"
  },
  {
    title: "14+",
    value: "14",
    subtitle: "Years of Excellence in Coaching",
    icon: "/lovable-uploads/d0749f44-9704-4c60-be9d-af77a4f7e1b2.png"
  },
  {
    title: "7100+",
    value: "7100",
    subtitle: "Selections in JEE Advanced",
    icon: "/lovable-uploads/d40d1104-c289-4c05-afb5-fe46b378610c.png"
  },
  {
    title: "20000+",
    value: "20000",
    subtitle: "Selection in NEET-UG",
    icon: "/lovable-uploads/05b7a937-ec30-4db2-a396-468c63bc42dc.png"
  }
];

const CounterAnimation = ({ targetValue }: { targetValue: string }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const counterRef = useRef<HTMLDivElement>(null);
  const observed = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !observed.current) {
          observed.current = true;
          animateValue();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  const animateValue = () => {
    // Handle special case for "No. 1"
    if (targetValue === "1") {
      setDisplayValue("1");
      return;
    }
    
    const target = parseInt(targetValue, 10);
    const duration = 2000; // 2 seconds
    const step = Math.max(1, Math.floor(target / (duration / 50))); // Update every 50ms
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setDisplayValue(targetValue);
        clearInterval(timer);
      } else {
        setDisplayValue(current.toString());
      }
    }, 50);
  };
  
  return <div ref={counterRef}>{displayValue}</div>;
};

const StatsCounter = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-maa-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="transform hover:-translate-y-2 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white p-2 shadow-lg">
                  <img src={stat.icon} alt={stat.title} className="w-full h-full object-contain" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-maa-orange mb-2">
                <CounterAnimation targetValue={stat.value} />
                {stat.title.includes('+') ? '+' : ''}
              </h3>
              <p className="text-sm">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
