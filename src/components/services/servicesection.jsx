import { useEffect } from "react";
import gsap from "gsap";

export default function ServicesSection() {

  useEffect(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services",
        start: "top 80%"
      },
      opacity: 0,
      y: 70,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="services">

      <div className="services-header">
        <h2>Our Services</h2>
        <p>End-to-end luxury real estate consultancy</p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <h3>Investment Advisory</h3>
          <p>
            Strategic guidance for high-value real estate investments
            across Dubai and India.
          </p>
        </div>

        <div className="service-card">
          <h3>Property Consultation</h3>
          <p>
            Personalized consultancy for luxury residential and
            commercial properties.
          </p>
        </div>

        <div className="service-card">
          <h3>Developer Partnerships</h3>
          <p>
            Direct access to premium projects through exclusive developer networks.
          </p>
        </div>

      </div>

    </section>
  );
          }
