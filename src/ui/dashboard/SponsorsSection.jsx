import React from "react";
import { motion } from "framer-motion";
import { sponsors } from "../../data/dashboardData";
import "../../styles/dashboard/SponsorsSection.css";

export default function SponsorsSection() {
  return (
    <section className="sponsors-section">
      <h2 className="section-title">Sponsors</h2>

      <div className="sponsors-marquee">
        <motion.div
          className="sponsors-track"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              {sponsor}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
