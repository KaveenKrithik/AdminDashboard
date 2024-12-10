import React, { useState, useEffect } from 'react';
import axios from '../../services/api';
import './Carousel.css';

function Carousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch carousel data from the backend (ensure the endpoint is correct)
    const fetchCarouselItems = async () => {
      try {
        const response = await axios.get('/api/carousel'); // Replace with your actual API endpoint
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching carousel data:', error);
      }
    };

    fetchCarouselItems();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      {items.length > 0 ? (
        <>
          <div className="carousel">
            <div className="carousel-slide">
              <img src={items[currentIndex].image} alt={items[currentIndex].title} className="carousel-image" />
              <div className="carousel-caption">
                <h3>{items[currentIndex].title}</h3>
                <p>{items[currentIndex].description}</p>
              </div>
            </div>
          </div>
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      ) : (
        <p>Loading carousel items...</p>
      )}
    </div>
  );
}

export default Carousel;
