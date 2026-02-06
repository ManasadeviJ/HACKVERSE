import React from "react";

import DashboardLayout from "../../ui/layout/DashboardLayout";

import HeroSection from "../../ui/dashboard/HeroSection";
import StatsSection from "../../ui/dashboard/StatsSection";
import HackathonSection from "../../ui/dashboard/HackathonSection";
import SponsorsSection from "../../ui/dashboard/SponsorsSection";
import ShowcaseSection from "../../ui/dashboard/ShowcaseSection";
import FooterSection from "../../ui/dashboard/FooterSection";

import "../../styles/dashboard/dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <HeroSection />
      <StatsSection />
      <HackathonSection />
      <SponsorsSection />
      <ShowcaseSection />
      <FooterSection />
    </DashboardLayout>
  );
}
