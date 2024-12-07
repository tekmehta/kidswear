'use client';

import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      src: '/pic/kid2.avif',
      label: 'First slide',
      description: 'Some  first slide.',
    },
    {
      src: '/pic/kid1.avif',
      label: 'Second slide',
      description: 'Some second slide.',
    },
    {
      src: '/pic/kid3.jpg',
      label: 'Third slide',
      description: 'Some third slide.',
    },
    {
      src: '/pic/kid8.jpg',
      label: 'Fourth slide',
      description: 'Somefourth slide.',
    },
    {
      src: '/pic/kid10.jpg',
      label: 'Fifth slide',
      description: 'Some fifth slide.',
    },
    {
      src: '/pic/kid6.jpg',
      label: 'sixth slide',
      description: 'Some sixth slide.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="relative w-full w-500l mx-auto">
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Slides */}
        <div  style={{ height: '65vh' }} className="relative overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ${
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <h5 className="text-lg font-semibold">{slide.label}</h5>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
        >
          &#9664;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
