
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  // Handle scroll events to hide/show button
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 300) {
        // Scrolling down & past threshold - hide button
        setShowButton(false);
      } else {
        // Scrolling up - show button
        setShowButton(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleWhatsAppClick = () => {
    // WhatsApp number from the prop
    const whatsappNumber = "917070776980";
    const message = "Hello, I would like to know more about MAA Classes.";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 bottom-8 z-40 transition-all duration-300 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="font-medium">Chat with us</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
