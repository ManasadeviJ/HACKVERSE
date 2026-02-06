import React, { useState, useEffect, useCallback } from "react";
import "../../styles/dashboard/SponsorsSection.css";
import { sponsors } from "../../data/dashboardData";

const SponsorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sponsors.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-moves every 3 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Math to handle the offset: Card Width (300) + Gap (40) + Active Margins (30)
  const getOffset = () => {
    const isMobile = window.innerWidth < 768;
    const movementWidth = isMobile ? 240 : 350; 
    return -(currentIndex * movementWidth);
  };

  return (
    <section className="sponsors-container">
      <div className="sponsors-header">
        <h2 className="sponsors-title">Sponsors</h2>
        <div className="sponsors-nav">
          <button onClick={prevSlide} className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button onClick={nextSlide} className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(${getOffset()}px)` }}
        >
          {sponsors.map((sponsor, index) => {
            // Logic: The 2nd and 3rd visible cards are the Darker Active ones
            const isActive = index === currentIndex + 1 || index === currentIndex + 2;
            
            return (
              <div 
                key={index} 
                className={`sponsor-card ${isActive ? "active-card" : "side-card"}`}
              >
                <div className="card-content">
                  {sponsor.type === "category" ? (
                    <div className="category-layout">
                      <span className="category-tag">Categories</span>
                      <h3 className="enhance-text">Enhance Your</h3>
                    </div>
                  ) : (
                    <div className="brand-layout">
                      <img src={sponsor.logo} alt={sponsor.name} className="brand-logo" />
                      <span className="brand-name">{sponsor.name}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;