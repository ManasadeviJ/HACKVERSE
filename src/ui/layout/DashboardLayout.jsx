import React from "react";
export default function DashboardLayout({ children }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      {children}
    </main>
  );
}
