import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import Particles from "./components/Effects/Particles";
import Spotlight from "./components/Effects/Spotlight";

import useIntroAnimation from "./components/Animations/useIntroAnimation";

function App() {

  useIntroAnimation();

  useEffect(() => {

    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Parallax scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;

      gsap.to(".hero-bg", {
        scale: 1.1 + scrollY * 0.0002,
        y: scrollY * 0.2,
        duration: 0.6,
        ease: "power2.out"
      });

      gsap.to(".hero-content", {
        y: scrollY * 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };

  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <Particles />
      <Spotlight />

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-bg"></div>
        <div className="hero-fog"></div>

        <div className="hero-content">

          <p className="hero-small">
            Luxury Real Estate Dubai
          </p>

          <h1 className="hero-title">
            Ultra Luxury<br />
            Residences & Villas
          </h1>

          <p className="hero-text">
            Experience elite living with hand-crafted architecture,
            waterfront views, and world-class interiors designed for the ultra-rich.
          </p>

          <div className="hero-actions">
            <button className="hero-btn">Explore Properties</button>
           
