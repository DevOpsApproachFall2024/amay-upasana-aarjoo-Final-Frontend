import React from 'react';

const Tony = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Please give us 20! 🙏</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/aAkMkVFwAoo?si=EnY-py9oPXXMo7qE&amp;start=42"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="text-center text-gray-700">
          <p className="text-lg mb-4">We worked really hard on this project! 💪</p>
          <p className="text-xl font-semibold text-blue-600">Thank you for being the most amazing, awesome, cool and funny teacher!</p>
          <p className="text-sm font-semibold text-blue-600">(hope that's enough brown nosing :P)</p>
        </div>
      </div>
    </div>
  );
};

export default Tony;