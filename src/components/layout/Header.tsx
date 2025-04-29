
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white bg-opacity-95 py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/2b249ce4-7d8f-4896-a413-c77d555bc891.png"
              alt="Maa Classes Logo"
              className="h-12 mr-2"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-maa-blue">MAA CLASSES</h1>
              <p className="text-xs text-maa-orange font-medium">Go fat go fast</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/facilities" className="nav-link">Facilities</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/admission" className="nav-link">Admission</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/contact" className="nav-link">Get in touch</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-maa-dark hover:text-maa-blue transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              <Link to="/" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/about" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>About</Link>
              <Link to="/facilities" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Facilities</Link>
              <Link to="/courses" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Courses</Link>
              <Link to="/admission" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Admission</Link>
              <Link to="/gallery" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Gallery</Link>
              <Link to="/contact" className="px-4 py-3 hover:bg-gray-100" onClick={toggleMobileMenu}>Get in touch</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
