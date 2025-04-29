
import React, { useState } from 'react';
import { toast } from 'sonner';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    class: '',
    course: '',
    school: '',
    message: ''
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
      toast.success('Admission enquiry submitted successfully! We will contact you soon.', {
        description: 'Thank you for your interest in MAA Classes.',
        duration: 5000
      });
      
      // Reset form
      setFormData({
        name: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        class: '',
        course: '',
        school: '',
        message: ''
      });
      
      setLoading(false);
      
      // In a real application, you would send this data to an email service
      console.log('Form submitted:', formData);
      console.log('This would be sent to: jhakeshavkumar62093@gmail.com');
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Admission Enquiry</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Student Name *</label>
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
                <label htmlFor="parentName" className="block text-gray-700 font-medium mb-1">Parent's Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                  required
                />
              </div>
              
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
                <label htmlFor="class" className="block text-gray-700 font-medium mb-1">Current Class *</label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
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
                <label htmlFor="course" className="block text-gray-700 font-medium mb-1">Interested Course *</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="cbse">CBSE Board (6-10th)</option>
                  <option value="icse">ICSE Board (6-10th)</option>
                  <option value="jee-foundation">JEE Foundation (9-10th)</option>
                  <option value="jee-main">JEE Main (11-12th)</option>
                  <option value="jee-advanced">JEE Advanced (11-12th)</option>
                  <option value="neet">NEET (11-12th)</option>
                  <option value="olympiad">Olympiads</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="school" className="block text-gray-700 font-medium mb-1">Current School</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-maa-blue focus:border-maa-blue"
              ></textarea>
            </div>
            
            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                className="btn-primary min-w-[150px]"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
