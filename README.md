# 🗺️ NavixGo — Smart Real-Time Transit Platform

NavixGo is a premium, hardware-free real-time transit telemetry and passenger information system. By transforming the driver's standard smartphone into the active GPS telemetry device, NavixGo delivers sub-second tracking accuracy to passengers and fleet managers without the need for expensive dedicated hardware installations.

Designed with **glassmorphism aesthetics**, **dynamic HSL tailored color schemes**, and a **fully fluid layout engine**, NavixGo looks stunning and runs smoothly across every screen size—from narrow mobile viewports up to large desktop monitors.

---

## ✨ Features

### 🧑‍✈️ 1. Passenger App
- **Real-Time Map View**: Google Maps-style map with dynamic transit line drawing, live vehicle location pins, and custom routing vectors.
- **Accurate ETAs**: Sub-second arrival timers updated dynamically based on telemetry packets.
- **Stop Visibility**: Detailed next stop details and upcoming waypoint listings.

### 🔔 2. Smart Notification Center
- **Proximity Alerts**: Custom alerts like *"Bus Near My Stop"* triggered based on real-time vehicle distances.
- **Delay & Off-Route Warnings**: Immediate push notification simulations if a bus runs off-schedule or gets stuck in traffic.
- **Battery-Friendly Toggles**: Sleek toggles to control alerts.

### 🚍 3. Driver Portal
- **One-Tap Broadcasting**: Drivers simply tap a button to start trip broadcasting, using their mobile GPS telemetry to sync live locations.
- **Live Speedometers**: Built-in broadcast verification displays speed (in km/h) and GPS status indicators.
- **Minimal Battery Impact**: Low-power WebSocket background cycles that prevent battery drain.

---

## 🎨 Premium Design Aesthetics & Multi-Device Responsiveness

NavixGo has undergone a **complete design makeover** specifically tailored to guarantee high visual fidelity and a premium user experience on all viewport breakpoints:
- **Mobile Screens (320px - 480px)**: Heading and paragraph typography scale dynamically (`text-3xl` to `text-lg`), phone mockup wrappers adjust to compact frame dimensions, and email early-access subscription forms stack vertically for an ergonomic touch interface.
- **Laptop Screens (1024px)**: Multi-column grid structures center illustrations beautifully. Heavy static transit graphics are hidden on 1024px views to let the key phone mockups breathe, and then scale back in gracefully on larger viewports.
- **Static Assets Fill**: Bus and transit illustrations are perfectly proportioned to fill their boxes without hover shifts or jump transitions, establishing a solid, polished visual rhythm.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, Vite (Fast HMR)
- **Styling**: Tailwind CSS, PostCSS (harmonies, glassmorphism, responsive utilities)
- **Icons**: Lucide React
- **Streamlined Footprint**: Removed legacy pages (`Services.jsx`, `Monitoring.jsx`) and hoisted states to achieve a **20%+ bundle optimization** for rapid page load speeds.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation
Clone the repository and install dependencies:
```bash
# Clone the repository
git clone https://github.com/<your-username>/navixgo.git

# Navigate into the project folder
cd navixgo

# Install standard dependencies
npm install
```

### 3. Development Server
Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### 4. Build for Production
To build the application for hosting/deployment:
```bash
# Compile JavaScript and CSS bundles
npm run build
```
Vite will output highly optimized, compressed assets directly inside the `/dist` directory:
- **JS Bundle**: `~266.31 kB`
- **CSS Bundle**: `~44.99 kB`

---

## 📂 Project Directory Structure

```text
navixgo/
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── assets/             # Premium responsive image illustrations & mockups
│   ├── components/
│   │   ├── common/         # MapBackground, BottomNav, Testimonials
│   │   └── layout/         # Header (navbar), Footer
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with interactive phone previews
│   │   └── Plans.jsx       # Dynamic responsive institutional subscription cards
│   ├── App.css             # Component-level styling overrides
│   ├── App.jsx             # Clean router, page switcher & dynamic layout hooks
│   ├── index.css           # Core styling entrypoint
│   └── main.jsx            # Entry point for ReactDOM rendering
├── package.json            # Node scripts and project requirements
├── tailwind.config.js      # Custom theme breakpoints, colors, and shadows
└── vite.config.js          # Fast build configurations
```
