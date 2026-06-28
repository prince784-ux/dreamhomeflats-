import gsap from "gsap";
import { useEffect } from "react";

export default function AboutSection() {

  useEffect(() => {
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    });
  }, []);

  return (
    <section className="about">

      <div className="about-container">

        <p className="about-tag">About DreamHome</p>

        <h2 className="about-title">
          Redefining Luxury Living in India & Dubai
        </h2>

        <p className="about-text">
          DreamHome is a premium real estate consultancy focused on
          delivering ultra-luxury residential experiences across Gurgaon,
          Dwarka Expressway, and Dubai’s most exclusive communities.
        </p>

        <p className="about-text">
          We don’t just sell properties — we curate lifestyles built on
          architecture, privacy, comfort, and long-term value.
        </p>

        <p className="about-text">
          With a strong network of developers and global investors,
          we bring only the most exclusive residential opportunities
          to our clients.
        </p>

      </div>

    </section>
  );
}
