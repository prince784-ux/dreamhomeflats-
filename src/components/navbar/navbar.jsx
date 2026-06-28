import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";
import "./Navbar.css";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Areas", href: "#areas" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="logo">
        <span className="gold">Dream</span>Home
      </div>

      <ul className="nav-links">
        {links.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <a href="tel:+918307865787" className="cta">
        <Phone size={18} />
        Call Now
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <a
          className="mobile-call"
          href="tel:+918307865787"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
      }
