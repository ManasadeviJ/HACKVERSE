import React from "react";
import { motion } from "framer-motion";
import { showcaseItems } from "../../data/dashboardData";
import ShowcaseCard from "../cards/ShowcaseCard";
import "../../styles/dashboard/ShowcaseSection.css";

export default function ShowcaseSection() {
  return (
    <section className="showcase-section">
      <h2 className="section-title">Showcase</h2>

      <div className="showcase-grid">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ShowcaseCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
