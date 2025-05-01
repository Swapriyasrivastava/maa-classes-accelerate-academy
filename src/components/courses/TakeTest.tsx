
import React, { useState, useEffect } from 'react';
import { FileText, Clock, CheckCircle, XCircle, BarChart, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

// Sample database of test questions
const questionDatabase = {
  'cbse-6-math': [
    { id: 1, question: "What is the value of 5² × 4³?", options: ["120", "320", "400", "500"], correct: 2 },
    { id: 2, question: "If a = 5 and b = 7, what is the value of a² + b²?", options: ["24", "49", "25", "74"], correct: 3 },
    { id: 3, question: "Simplify: 3(x + 5) - 2(x - 3)", options: ["x + 9", "x + 21", "5x + 12", "x + 15"], correct: 1 },
    { id: 4, question: "Find the perimeter of a square with side length 8 cm.", options: ["32 cm", "64 cm", "16 cm", "24 cm"], correct: 0 },
    { id: 5, question: "What fraction of an hour is 15 minutes?", options: ["1/4", "1/3", "1/5", "1/6"], correct: 0 },
  ],
  'cbse-6-science': [
    { id: 1, question: "Which of the following is a plant cell organelle not found in animal cells?", options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], correct: 1 },
    { id: 2, question: "Which of these is NOT a natural satellite?", options: ["Moon", "Europa", "ISS", "Titan"], correct: 2 },
    { id: 3, question: "Which gas do plants absorb from the atmosphere during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
    { id: 4, question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
    { id: 5, question: "Which organ is primarily responsible for filtering blood in the human body?", options: ["Heart", "Kidneys", "Lungs", "Liver"], correct: 1 },
  ],
  'jee-physics-1': [
    { id: 1, question: "A body is projected vertically upward with a velocity of 49 m/s. When will it return to its starting point? (Take g = 9.8 m/s²)", options: ["5 s", "10 s", "7.5 s", "15 s"], correct: 1 },
    { id: 2, question: "Two particles of masses m and 2m are moving with equal kinetic energies. The ratio of their linear momenta is:", options: ["1:2", "1:√2", "√2:1", "1:1"], correct: 1 },
    { id: 3, question: "The equivalent resistance between points A and B in the circuit shown is:", options: ["1Ω", "2Ω", "3Ω", "4Ω"], correct: 2 },
    { id: 4, question: "A spring has a spring constant of 200 N/m. The work required to compress it by 5 cm from its natural length is:", options: ["0.25 J", "0.5 J", "1 J", "2.5 J"], correct: 0 },
    { id: 5, question: "A particle is moving in a circular path of radius r with a constant speed v. The angular momentum of the particle about the center is:", options: ["mvr", "mv/r", "mv²/r", "mr²v"], correct: 0 },
  ],
};

// Sample test categories
const testCategories = [
  { id: 'cbse', name: 'CBSE (Class 6-10)', tests: [
    { id: 'cbse-6-math', name: 'Class 6 - Mathematics', questions: 5, duration: 10 },
    { id: 'cbse-6-science', name: 'Class 6 - Science', questions: 5, duration: 10 },
    { id: 'cbse-7-math', name: 'Class 7 - Mathematics', questions: 5, duration: 10 },
    { id: 'cbse-7-science', name: 'Class 7 - Science', questions: 5, duration: 10 }
  ]},
  { id: 'icse', name: 'ICSE (Class 6-10)', tests: [
    { id: 'icse-6-math', name: 'Class 6 - Mathematics', questions: 5, duration: 10 },
    { id: 'icse-6-science', name: 'Class 6 - Science', questions: 5, duration: 10 },
    { id: 'icse-7-math', name: 'Class 7 - Mathematics', questions: 5, duration: 10 },
    { id: 'icse-7-science', name: 'Class 7 - Science', questions: 5, duration: 10 }
  ]},
  { id: 'jee', name: 'JEE Main', tests: [
    { id: 'jee-physics-1', name: 'Physics - Set 1', questions: 5, duration: 10 },
    { id: 'jee-chemistry-1', name: 'Chemistry - Set 1', questions: 5, duration: 10 },
    { id: 'jee-math-1', name: 'Mathematics - Set 1', questions: 5, duration: 10 },
    { id: 'jee-full-1', name: 'Full Test - Set 1', questions: 15, duration: 30 }
  ]},
  { id: 'neet', name: 'NEET-UG', tests: [
    { id: 'neet-physics-1', name: 'Physics - Set 1', questions: 5, duration: 10 },
    { id: 'neet-chemistry-1', name: 'Chemistry - Set 1', questions: 5, duration: 10 },
    { id: 'neet-biology-1', name: 'Biology - Set 1', questions: 5, duration: 10 },
    { id: 'neet-full-1', name: 'Full Test - Set 1', questions: 15, duration: 30 }
  ]}
];

const TakeTest = () => {
  const [activeCategory, setActiveCategory] = useState('cbse');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const activeTests = testCategories.find(cat => cat.id === activeCategory)?.tests || [];

  // Timer functionality
  useEffect(() => {
    let timer;
    if (selectedTest && timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);

      if (timeRemaining === 30) {
        toast.warning("Only 30 seconds remaining!", {
          description: "Please complete your test soon.",
        });
      }

      if (timeRemaining === 0) {
        handleSubmitTest();
      }
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [selectedTest, timeRemaining]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleTakeTest = (test) => {
    // Get questions for this test
    const questions = questionDatabase[test.id] || [];
    
    if (questions.length === 0) {
      toast.error("No questions available for this test yet.", {
        description: "Please try another test or check back later."
      });
      return;
    }
    
    setSelectedTest(test);
    setCurrentQuestions(questions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setTimeRemaining(test.duration * 60); // Convert minutes to seconds
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    // Calculate results
    let correct = 0;
    let incorrect = 0;
    let attempted = 0;

    currentQuestions.forEach(question => {
      if (answers[question.id] !== undefined) {
        attempted++;
        if (answers[question.id] === question.correct) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });
    
    const score = Math.floor((correct / currentQuestions.length) * 100);
    
    setTestResult({
      attempted,
      correct,
      incorrect,
      score,
      total: currentQuestions.length
    });
    
    setShowResults(true);
  };

  const isTestActive = selectedTest && !showResults;
  const currentQuestion = isTestActive && currentQuestions[currentQuestionIndex];

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
          // Test interface with questions
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-maa-dark">{selectedTest.name}</h3>
              <div className="flex items-center text-gray-600">
                <Clock size={18} className="mr-2" />
                <span className="font-bold">{formatTime(timeRemaining)}</span>
              </div>
            </div>
            
            {/* Question display */}
            <div className="mb-8">
              <div className="bg-blue-50 p-4 rounded mb-6">
                <p className="font-medium text-lg">
                  Question {currentQuestionIndex + 1} of {currentQuestions.length}
                </p>
                <p className="text-lg mt-2">{currentQuestion.question}</p>
              </div>
              
              <div className="space-y-3 mt-6">
                {currentQuestion.options.map((option, index) => (
                  <label 
                    key={index}
                    className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                      answers[currentQuestion.id] === index
                        ? 'border-maa-blue bg-blue-50'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={index}
                        checked={answers[currentQuestion.id] === index}
                        onChange={() => handleAnswer(currentQuestion.id, index)}
                        className="mr-3"
                      />
                      <span>{option}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={handlePreviousQuestion}
                className={`flex items-center px-4 py-2 rounded ${
                  currentQuestionIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-maa-blue hover:bg-blue-50'
                }`}
              >
                <ArrowLeft size={18} className="mr-2" /> Previous
              </button>
              
              {currentQuestionIndex === currentQuestions.length - 1 ? (
                <button 
                  onClick={handleSubmitTest}
                  className="btn-primary"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center px-4 py-2 text-maa-blue hover:bg-blue-50 rounded"
                >
                  Next <ArrowRight size={18} className="ml-2" />
                </button>
              )}
            </div>

            {/* Progress indicator */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="text-sm text-gray-500">
                  {Object.keys(answers).length} of {currentQuestions.length} questions answered
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-maa-blue h-2.5 rounded-full" 
                  style={{ width: `${(Object.keys(answers).length / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TakeTest;
