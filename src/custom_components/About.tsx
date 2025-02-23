import React from 'react'

const AboutUs = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 mb-5 md:py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">The Story Behind the EasyEnglish</h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Our journey started with a simple yet powerful goal: <span className="font-semibold">Helping elders become independent in English!</span>
          We understand the challenges elderly learners face and created this platform to make English learning accessible, fun, and effective.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 italic mb-6">
          "Our goal is to make English learning accessible and easy for elderly learners so they can confidently communicate in daily life."
        </p>
        
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Join Us!</h3>
          <p className="text-gray-700">
            Whether you're an aspiring learner or a passionate educator, we welcome you to be a part of this journey. Let's learn and grow together!
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  