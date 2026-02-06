import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Or use <a> tag if not using react-router
import "../../styles/dashboard/ShowcaseCard.css";

const ShowcaseCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Parent variants to trigger children
  const cardVariants = {
    rest: { opacity: 1 },
    hover: { opacity: 1 }
  };

  const joinBtnVariants = {
    rest: { y: "100%", opacity: 0 },
    hover: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="showcase-card"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={cardVariants}
    >
      <div className="image-container">
        {/* Star Badge Logic */}
        <button 
          className="star-badge-action" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            stroke={isFavorite ? "#ffb400" : "#b3b3b3"} 
            fill={isFavorite ? "#ffb400" : "none"} 
            strokeWidth="2"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
        
        <img src={item.image} alt={item.name} className="product-image" />

        {/* Updated Join Now with Path */}
        <Link to={`/event-details/${item.id || 'dummy-id'}`} className="join-link-wrapper">
          <motion.div 
            className="join-button"
            variants={joinBtnVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            JOIN NOW
          </motion.div>
        </Link>
      </div>

      <div className="card-details">
        <h3 className="event-title">{item.name}</h3>
        <div className="details-footer">
          <span className="fee-label">REG FEE</span>
          <span className="location-label">{item.location || "location"}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;