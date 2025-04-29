
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Download, FileText, Book, BookOpen } from 'lucide-react';

const courseCategories = [
  {
    id: 'jee',
    name: 'JEE (Main & Advanced) Programs',
    files: [
      { id: 'jee-1', name: 'JEE Two Year Program (2024-26)', filename: 'jee_two_year.pdf' },
      { id: 'jee-2', name: 'JEE One Year Program (2024-25)', filename: 'jee_one_year.pdf' },
      { id: 'jee-3', name: 'JEE Crash Course (2024)', filename: 'jee_crash.pdf' }
    ]
  },
  {
    id: 'neet',
    name: 'NEET-UG Programs',
    files: [
      { id: 'neet-1', name: 'NEET Two Year Program (2024-26)', filename: 'neet_two_year.pdf' },
      { id: 'neet-2', name: 'NEET One Year Program (2024-25)', filename: 'neet_one_year.pdf' },
      { id: 'neet-3', name: 'NEET Crash Course (2024)', filename: 'neet_crash.pdf' }
    ]
  },
  {
    id: 'foundation',
    name: 'Foundation Programs',
    files: [
      { id: 'found-1', name: 'Class 9-10 Foundation (2024-26)', filename: 'foundation_9_10.pdf' },
      { id: 'found-2', name: 'Class 8 Foundation (2024-25)', filename: 'foundation_8.pdf' },
      { id: 'found-3', name: 'Class 6-7 Foundation (2024-26)', filename: 'foundation_6_7.pdf' }
    ]
  },
  {
    id: 'boards',
    name: 'Board Exam Programs',
    files: [
      { id: 'board-1', name: 'CBSE Class 11-12 (2024-26)', filename: 'cbse_11_12.pdf' },
      { id: 'board-2', name: 'CBSE Class 9-10 (2024-26)', filename: 'cbse_9_10.pdf' },
      { id: 'board-3', name: 'ICSE Class 9-10 (2024-26)', filename: 'icse_9_10.pdf' }
    ]
  }
];

const Brochure = () => {
  const handleDownload = (filename) => {
    // In a real implementation, this would download the actual file
    console.log(`Downloading ${filename}`);
    alert(`Brochure download initiated for ${filename}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Course Brochures</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Download detailed information about our courses and programs.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-start">
                <div className="mr-4 text-maa-blue">
                  <Book size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-maa-dark mb-2">Course Brochures</h2>
                  <p className="text-gray-600">
                    Our comprehensive brochures provide detailed information about our courses, 
                    including syllabus, teaching methodology, fee structure, and more. 
                    Download the brochure for your preferred course to learn more.
                  </p>
                </div>
              </div>
            </div>
            
            {courseCategories.map(category => (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-semibold text-maa-dark mb-6 border-b border-gray-200 pb-3">
                  {category.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.files.map(file => (
                    <div key={file.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-blue-50 mr-3">
                          <FileText size={24} className="text-maa-blue" />
                        </div>
                        <h3 className="text-lg font-semibold text-maa-dark">{file.name}</h3>
                      </div>
                      
                      <button 
                        onClick={() => handleDownload(file.filename)}
                        className="mt-4 w-full flex items-center justify-center py-2 bg-maa-blue text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        <Download size={16} className="mr-2" /> Download Brochure
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-12 text-center">
              <a href="/contact" className="btn-primary inline-flex items-center">
                <BookOpen size={16} className="mr-2" /> Request Custom Information
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brochure;
