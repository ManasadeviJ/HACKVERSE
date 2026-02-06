import React from "react";
import { motion } from "framer-motion";
import { showcaseItems } from "../../data/dashboardData";
import ShowcaseCard from "../cards/ShowcaseCard";
import "../../styles/dashboard/ShowcaseSection.css";

const ShowcaseSection = () => {
  return (
    <section className="showcase-grid-container">
      <div className="grid-wrapper">
        {showcaseItems.map((item) => (
          <ShowcaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;