import React from "react";
import { motion } from "framer-motion";
import { statsData } from "../../data/dashboardData";
import "../../styles/dashboard/StatsSection.css";

export default function StatsSection() {
  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="stat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
