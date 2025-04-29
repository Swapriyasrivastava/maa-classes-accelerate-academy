
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { toast } from 'sonner';
import { School, Mail, Phone, User, Calendar, BookOpen } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    currentSchool: '',
    currentClass: '',
    targetExam: '',
    course: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Registration submitted successfully!', {
        description: 'Our team will contact you soon with further instructions.',
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: '',
        dateOfBirth: '',
        gender: '',
        fatherName: '',
        motherName: '',
        email: '',
        phone: '',
        whatsapp: '',
        address: '',
        city: '',
        pincode: '',
        state: '',
        currentSchool: '',
        currentClass: '',
        targetExam: '',
        course: ''
      });
      
      setLoading(false);
      
      // In a real application, you would send this data to an email service
      console.log('Form submitted:', formData);
      console.log('This would be sent to: jhakeshavkumar62093@gmail.com');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="bg-maa-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center">Register Now</h1>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto">
              Fill out the registration form to begin your journey with MAA Classes.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-maa-dark flex items-center">
                    <User size={20} className="mr-2 text-maa-orange" /> Personal Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-gray-700 font-medium mb-1">Gender *</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="fatherName" className="block text-gray-700 font-medium mb-1">Father's Name *</label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motherName" className="block text-gray-700 font-medium mb-1">Mother's Name *</label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4 mb-6 pt-8">
                  <h2 className="text-xl font-semibold text-maa-dark flex items-center">
                    <Phone size={20} className="mr-2 text-maa-orange" /> Contact Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-1">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="pincode" className="block text-gray-700 font-medium mb-1">PIN Code *</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-gray-700 font-medium mb-1">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-4 mb-6 pt-8">
                  <h2 className="text-xl font-semibold text-maa-dark flex items-center">
                    <School size={20} className="mr-2 text-maa-orange" /> Educational Information
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentSchool" className="block text-gray-700 font-medium mb-1">Current School/College *</label>
                    <input
                      type="text"
                      id="currentSchool"
                      name="currentSchool"
                      value={formData.currentSchool}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentClass" className="block text-gray-700 font-medium mb-1">Current Class *</label>
                    <select
                      id="currentClass"
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    >
                      <option value="">Select Class</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="12-pass">12th Passed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="targetExam" className="block text-gray-700 font-medium mb-1">Target Exam *</label>
                    <select
                      id="targetExam"
                      name="targetExam"
                      value={formData.targetExam}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    >
                      <option value="">Select Exam</option>
                      <option value="jee-main">JEE Main</option>
                      <option value="jee-advanced">JEE Advanced</option>
                      <option value="neet">NEET-UG</option>
                      <option value="boards">Board Exams</option>
                      <option value="foundation">Foundation</option>
                      <option value="olympiad">Olympiads</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-gray-700 font-medium mb-1">Preferred Course *</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="two-year">Two Year Program</option>
                      <option value="one-year">One Year Program</option>
                      <option value="crash">Crash Course</option>
                      <option value="foundation">Foundation Program</option>
                      <option value="boards">Board Exam Preparation</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-center pt-8">
                  <button 
                    type="submit" 
                    className="btn-primary min-w-[200px]"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Register Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
