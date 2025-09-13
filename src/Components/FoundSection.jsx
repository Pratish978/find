import React, { useEffect, useState } from "react";
import foundImage from "../assets/find.jpg"; 

const FoundSection = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".found-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="find" className={`found-section ${show ? "show" : ""}`}>
      <h2>Found Items</h2>
      <img src={foundImage} alt="Found item" />
      <p>If you found something, report it here and help return it to the owner.</p>
      <button>Report Found Item</button>
    </section>
  );
};

export default FoundSection;
