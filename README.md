# HACKVERSE

app = operating system
pages = screens
ui = components
modules = features
db = backend


✅ Goal
Build the dashboard screen you showed
using reusable components
inside a clean architecture.

🧱 Final Folder Structure for THIS Dashboard
src
 ├── pages
 │    └── Dashboard
 │         Dashboard.jsx
 │
 ├── ui
 │    ├── dashboard
 │    │    HeroSection.jsx
 │    │    StatsSection.jsx
 │    │    HackathonSection.jsx
 │    │    SponsorsSection.jsx
 │    │    ShowcaseSection.jsx
 │    │    FooterSection.jsx
 │    │
 │    ├── cards
 │    │    HackathonCard.jsx
 │    │    ShowcaseCard.jsx
 │    │
 │    └── layout
 │         DashboardLayout.jsx
 │
 ├── data
 │    dashboardData.js
 │
 ├── styles
 │    └── dashboard
    │        HeroSection.css
    │        StatsSection.css
    │        HackathonSection.css
    │        SponsorsSection.css
    │        ShowcaseSection.css
    │        FooterSection.css
That’s the entire feature boundary.


🃏 Cards Folder
Reusable items only.

ui/cards/
Cards should never know about the dashboard.

They are generic components.

🧱 Layout Folder
ui/layout/DashboardLayout.jsx
This wraps:

padding

margins

responsive container

shared header if needed

Dashboard page sits inside layout.

📦 Data Separation
data/dashboardData.js
This contains:

stats numbers

hackathon list

sponsor list

showcase items

Sections read from data.

Never hardcode UI content inside components.

This makes your architecture scalable.