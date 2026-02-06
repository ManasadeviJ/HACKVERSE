import React from "react";
import { motion } from "framer-motion";
import "../../styles/dashboard/ShowcaseCard.css";

export default function ShowcaseCard({ item }) {
  return (
    <motion.div
      className="showcase-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="showcase-image" />

      

      <motion.button
        className="join-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Now
      </motion.button>
    </motion.div>
  );
}
