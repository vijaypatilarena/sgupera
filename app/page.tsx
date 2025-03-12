"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SGUAbout from "./components/SGUAbout";
import Sports from "./components/Sports";
import UniversityCollaborators from "./components/UniversityCollaborators";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep the splash screen visible for at least 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <SplashScreen finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <SGUAbout />
          <Sports />
          <UniversityCollaborators />
          <Footer />
        </>
      )}
    </main>
  );
}