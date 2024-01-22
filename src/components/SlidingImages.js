import React, { useEffect, useState } from 'react';
import Group108 from '../Assets/Images/Group 108.png';
import Group107 from '../Assets/Images/Group 107.png';
import Group106 from '../Assets/Images/Group 106.png';
import Group105 from  '../Assets/Images/Group 105.png';
const SlidingImages = () => {
  // List of image paths
  const images = [
    Group108,
    Group107,
    Group106,
    Group105
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = document.querySelector('.slider');

    function nextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    function prevSlide() {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    function updateSlider() {
      const translateValue = -currentIndex * (100 / images.length) + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }

    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

    updateSlider(); // Initial update

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, images]);

  return (
    <section className="section6">
      <div className="slider-container">
        <div className="slider pb-5 ps-5 mt-1">
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
              <img src={image} className="pt-5 mt-5" alt={`Image ${index + 1}`} style={{ width: '85%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlidingImages;
