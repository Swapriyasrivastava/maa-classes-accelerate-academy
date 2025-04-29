
import React, { useState } from 'react';
import { FileText, Clock, CheckCircle, XCircle, BarChart } from 'lucide-react';

// Sample test categories
const testCategories = [
  { id: 'cbse', name: 'CBSE (Class 6-10)', tests: [
    { id: 'cbse-6-math', name: 'Class 6 - Mathematics', questions: 25, duration: 45 },
    { id: 'cbse-6-science', name: 'Class 6 - Science', questions: 25, duration: 45 },
    { id: 'cbse-7-math', name: 'Class 7 - Mathematics', questions: 25, duration: 45 },
    { id: 'cbse-7-science', name: 'Class 7 - Science', questions: 25, duration: 45 }
  ]},
  { id: 'icse', name: 'ICSE (Class 6-10)', tests: [
    { id: 'icse-6-math', name: 'Class 6 - Mathematics', questions: 25, duration: 45 },
    { id: 'icse-6-science', name: 'Class 6 - Science', questions: 25, duration: 45 },
    { id: 'icse-7-math', name: 'Class 7 - Mathematics', questions: 25, duration: 45 },
    { id: 'icse-7-science', name: 'Class 7 - Science', questions: 25, duration: 45 }
  ]},
  { id: 'jee', name: 'JEE Main', tests: [
    { id: 'jee-physics-1', name: 'Physics - Set 1', questions: 30, duration: 60 },
    { id: 'jee-chemistry-1', name: 'Chemistry - Set 1', questions: 30, duration: 60 },
    { id: 'jee-math-1', name: 'Mathematics - Set 1', questions: 30, duration: 60 },
    { id: 'jee-full-1', name: 'Full Test - Set 1', questions: 90, duration: 180 }
  ]},
  { id: 'neet', name: 'NEET-UG', tests: [
    { id: 'neet-physics-1', name: 'Physics - Set 1', questions: 45, duration: 60 },
    { id: 'neet-chemistry-1', name: 'Chemistry - Set 1', questions: 45, duration: 60 },
    { id: 'neet-biology-1', name: 'Biology - Set 1', questions: 90, duration: 120 },
    { id: 'neet-full-1', name: 'Full Test - Set 1', questions: 180, duration: 180 }
  ]}
];

const TakeTest = () => {
  const [activeCategory, setActiveCategory] = useState('cbse');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [testResult, setTestResult] = useState(null);
  
  const activeTests = testCategories.find(cat => cat.id === activeCategory)?.tests || [];

  const handleTakeTest = (test) => {
    setSelectedTest(test);
    setShowResults(false);
  };

  const handleSubmitTest = () => {
    // Simulate test results
    const attempted = Math.floor(Math.random() * (test.questions - 10)) + 10;
    const correct = Math.floor(Math.random() * attempted);
    const incorrect = attempted - correct;
    const score = Math.floor((correct / test.questions) * 100);
    
    setTestResult({
      attempted,
      correct,
      incorrect,
      score,
      total: test.questions
    });
    
    setShowResults(true);
  };

  const test = selectedTest || (activeTests.length > 0 ? activeTests[0] : null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Take A Test</h2>
        
        {!selectedTest && !showResults ? (
          <>
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {testCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-md transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-maa-blue text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Test list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {activeTests.map(test => (
                <div 
                  key={test.id} 
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 hover:border-l-4 hover:border-maa-blue cursor-pointer"
                  onClick={() => handleTakeTest(test)}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-50 mr-3">
                      <FileText size={24} className="text-maa-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-maa-dark">{test.name}</h3>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center text-gray-600">
                      <FileText size={16} className="mr-2 text-maa-orange" />
                      <span>Questions: {test.questions}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-2 text-maa-orange" />
                      <span>Duration: {test.duration} minutes</span>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-6 w-full py-2 bg-maa-blue text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Start Test
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : showResults ? (
          // Test results
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-maa-dark mb-6 text-center">Test Results</h3>
            
            <div className="mb-8 text-center">
              <div className="w-32 h-32 mx-auto relative">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={testResult.score >= 70 ? "#4CAF50" : "#FF5722"}
                    strokeWidth="3"
                    strokeDasharray={`${testResult.score}, 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">{testResult.score}%</span>
                </div>
              </div>
              <p className="text-lg mt-2">
                {testResult.score >= 70 ? (
                  <span className="text-green-600 font-medium">Congratulations! You've passed!</span>
                ) : (
                  <span className="text-orange-600 font-medium">You need more practice!</span>
                )}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Questions Attempted</p>
                <p className="text-2xl font-bold text-maa-blue">{testResult.attempted}/{testResult.total}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Correct Answers</p>
                <p className="text-2xl font-bold text-green-600">{testResult.correct}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Incorrect Answers</p>
                <p className="text-2xl font-bold text-red-600">{testResult.incorrect}</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button 
                className="btn-outline"
                onClick={() => setSelectedTest(null)}
              >
                Take Another Test
              </button>
              <button 
                className="btn-primary"
                onClick={() => window.location.href = '/admission'}
              >
                Apply For Admission
              </button>
            </div>
          </div>
        ) : (
          // Test interface
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-maa-dark">{test.name}</h3>
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2" />
                <span>{test.duration} minutes</span>
              </div>
            </div>
            
            <p className="bg-blue-50 p-4 rounded text-maa-blue mb-8">
              This is a sample test interface. In a real implementation, the actual test questions would be displayed here.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-4">Test Instructions:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>This test contains {test.questions} multiple choice questions.</li>
                <li>Each question has only one correct answer.</li>
                <li>There is no negative marking for wrong answers.</li>
                <li>You have {test.duration} minutes to complete the test.</li>
                <li>Click on Submit Test button after completing all questions.</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={handleSubmitTest}
                className="btn-primary px-8"
              >
                Submit Test
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TakeTest;
