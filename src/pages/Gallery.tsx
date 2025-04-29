
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GallerySection from '../components/gallery/Gallery';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Gallery</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              A glimpse into the life at MAA Classes through our collection of memories.
            </p>
          </div>
        </div>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
