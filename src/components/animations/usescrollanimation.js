import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out"
      });

    });

  }, []);

}
