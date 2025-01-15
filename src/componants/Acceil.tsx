import "./Acceil.css";
import React, { useState, useEffect } from "react";
import imgProfil from "../assets/images/IMG_1647.png";
import svg1 from "../assets/images/svg/envelope.svg";
import svg2 from "../assets/images/svg/phone.svg";
import svg3 from "../assets/images/svg/calendar-week.svg";
import svg4 from "../assets/images/svg/geo-alt.svg";
import svg5 from "../assets/images/svg/linkedin.svg";
import svg6 from "../assets/images/svg/twiter.svg";
import svg7 from "../assets/images/svg/discord.svg";
import svg8 from "../assets/images/svg/githeub.svg";
import gif1 from "../assets/images/load-7671_128.gif";
import Navbar from "./Navbar/Navbar.tsx";
import About from "./About/About.tsx";
import Cv from "./Cv/cv.tsx";
import Portfolio from "./Portfolio/Portfolio.tsx";
import Blog from "./Blog/Blog.tsx";
import Contact from "./Contact/Contact.tsx";

function Acceil() {
  const [activePage, setActivePage] = useState("About"); // Page active
  const [visiblePage, setVisiblePage] = useState(null); // Page visible après délai

  // Met à jour la page visible avec un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePage(activePage);
    }, 0); // Délai de 5 secondes

    return () => clearTimeout(timer); // Nettoyage du timer pour éviter des problèmes
  }, [activePage]);

  // Fonction pour afficher la page correspondante
  const renderPage = () => {
    switch (visiblePage) {
      case "About":
        return <About />;
      case "Cv":
        return <Cv />;
      case "Portfolio":
        return <Portfolio />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="container">
      <div className="card-left">
        <div className="header-left">
          <img
            src={imgProfil}
            alt="Profil de William Le Gall"
            className="profile-img"
          />
          <h3>William Le Gall</h3>
          <p>Développeur Web Full Stack</p>
          <div className="left-line"></div>
          <div className="social-icons">
            <div className="mail">
              <div className="back-icon">
                <img src={svg1} alt="Icône Mail" />
              </div>
              <div className="back-texte">
                <h4>Gmail</h4>
                <p>
                  <a href="mailto:williamlegall5@gmail.com">
                    williamlegall5@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="phone">
              <div className="back-icon">
                <img src={svg2} alt="Icône Phone" />
              </div>
              <div className="back-texte">
                <h4>Téléphone</h4>
                <p>
                  <a href="tel:0600000000">06.00.00.00.00</a>
                </p>
              </div>
            </div>
            <div className="Anniversaire">
              <div className="back-icon">
                <img src={svg3} alt="Icône Calendrier" />
              </div>
              <div className="back-texte">
                <h4>Anniversaire</h4>
                <p>05 septembre 2005</p>
              </div>
            </div>
            <div className="Geo">
              <div className="back-icon">
                <img src={svg4} alt="Icône Geo" />
              </div>
              <div className="back-texte">
                <h4>Emplacement</h4>
                <p>
                  <a
                    href="https://www.google.com/maps?q=Quimper,+Bretagne,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🇫🇷 France, Bretagne Quimper
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="left-line"></div>
          <div className="icon-social">
            <a href="#">
              <img src={svg5} alt="Icon-Linkedin" />
            </a>
            <a href="#">
              <img src={svg6} alt="Icon-Twiter" />
            </a>
            <a href="#">
              <img src={svg7} alt="Icon-Discord" />
            </a>
            <a href="#">
              <img src={svg8} alt="Icon-Githeub" />
            </a>
          </div>
        </div>
      </div>
      <div className="card-right">
        {/* Navbar avec gestion de changement de page */}
        <Navbar setActivePage={setActivePage} />
        <div className="content">
          {visiblePage ? (
            renderPage()
          ) : (
            <p className="progress-9">
              <img src={gif1} alt="" />
            </p>
          )}{" "}
          {/* Page ou message */}
        </div>
      </div>
    </div>
  );
}

export default Acceil;
