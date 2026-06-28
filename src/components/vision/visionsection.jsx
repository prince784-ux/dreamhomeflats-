import { useEffect } from "react";
import gsap from "gsap";

export default function VisionSection() {

  useEffect(() => {
    gsap.from(".vision-box", {
      scrollTrigger: {
        trigger: ".vision",
        start: "top 80%"
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });
  }, []);

  return (
    <section className="vision">

      <div className="vision-container">

        <div className="vision-box">
          <h3>Our Vision</h3>
          <p>
            To redefine premium real estate consultancy through transparency,
            global standards, and long-term value creation.
          </p>
        </div>

        <div className="vision-box">
          <h3>Our Approach</h3>
          <p>
            We operate with institutional discipline, curated project selection,
            and deep market expertise across India and Dubai.
          </p>
        </div>

        <div className="vision-box">
          <h3>Our Promise</h3>
          <p>
            Every client receives strategic guidance, not just property access —
            ensuring secure and informed investment decisions.
          </p>
        </div>

      </div>

    </section>
  );
}
