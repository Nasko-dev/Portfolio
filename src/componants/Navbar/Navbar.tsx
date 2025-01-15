import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ setActivePage }) {
  const [activeIndex, setActiveIndex] = useState(0); // Le premier élément est actif par défaut

  const navItems = [
    { name: "Accueil", page: "About" },
    { name: "Cv", page: "Cv" },
    { name: "Portfolio", page: "Portfolio" },
    { name: "Blog", page: "Blog" },
    { name: "Contact", page: "Contact" },
  ];

  const handleClick = (index, page) => {
    setActiveIndex(index); // Met à jour l'élément actif
    setActivePage(page); // Notifie le parent pour changer la page affichée
  };

  return (
    <div className="header">
      <div className="nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-button ${
                  activeIndex === index ? "active" : ""
                }`} // Applique la classe active si l'index correspond
                onClick={() => handleClick(index, item.page)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
