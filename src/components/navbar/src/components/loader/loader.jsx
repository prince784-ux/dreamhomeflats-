import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="loader">

      <div className="loader-logo">

        <span>Dream</span>Home

      </div>

      <div className="loader-line">

        <div className="loader-progress"></div>

      </div>

    </div>
  );
}
