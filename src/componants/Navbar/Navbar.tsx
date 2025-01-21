import { useState, useEffect } from "react";
import "./Navbar.css";

type NavbarProps = {
  setActivePage: (page: string) => void;
};

function Navbar({ setActivePage }: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState<boolean>(false); // Gère l'ouverture du menu mobile

  const navItems = [
    { name: "Accueil", page: "About" },
    { name: "Cv", page: "Cv" },
    { name: "Portfolio", page: "Portfolio" },
    { name: "Blog", page: "Blog" },
    { name: "Contact", page: "Contact" },
  ];

  // Met à jour `isMobile` en fonction de la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // Ferme le menu en mode desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (index: number, page: string) => {
    setActiveIndex(index);
    setActivePage(page);
    setIsOpen(false); // Ferme le menu mobile après un clic
  };

  return (
    <div className="header">
      <div className="nav">
        {/* Bouton du menu hamburger en mode mobile */}
        {isMobile && (
          <button className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        )}

        {/* Menu en desktop et mobile */}
        <ul
          className={`nav-links ${
            isMobile ? (isOpen ? "open" : "closed") : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-button ${
                  activeIndex === index ? "active" : ""
                }`}
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
