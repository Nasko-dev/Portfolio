import "./Acceil.css";
import { useState, useEffect } from "react";
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
  const [activePage, setActivePage] = useState<string>("About"); // Page active
  const [visiblePage, setVisiblePage] = useState<string | null>(null); // Page visible après délai
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // Gestion du toggle mobile

  // Met à jour la page visible avec un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisiblePage(activePage);
    }, 0);

    return () => clearTimeout(timer);
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
      <div className={`card-left ${isExpanded ? "expanded" : ""}`}>
        <button
          className="btn-expand"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "↑ Réduire" : "↓ Agrandir"}
        </button>

        <div className="header-left">
          <img
            src={imgProfil}
            alt="Profil de William Le Gall"
            className="profile-img"
          />
          <h3>William Le Gall</h3>
          <p>Développeur Web Full Stack</p>
          <div className="left-line"></div>

          {isExpanded && (
            <>
              <div className="social-icons">
                {[
                  {
                    icon: svg1,
                    title: "Gmail",
                    link: "mailto:williamlegall5@gmail.com",
                    text: "williamlegall5@gmail.com",
                  },
                  {
                    icon: svg2,
                    title: "Téléphone",
                    link: "tel:0600000000",
                    text: "06.00.00.00.00",
                  },
                  {
                    icon: svg3,
                    title: "Anniversaire",
                    text: "05 septembre 2005",
                  },
                  {
                    icon: svg4,
                    title: "Emplacement",
                    link: "https://www.google.com/maps?q=Quimper,+Bretagne,+France",
                    text: "🇫🇷 France, Bretagne Quimper",
                  },
                ].map(({ icon, title, link, text }, index) => (
                  <div key={index} className="info-block">
                    <div className="back-icon">
                      <img src={icon} alt={`Icône ${title}`} />
                    </div>
                    <div className="back-texte">
                      <h4>{title}</h4>
                      {link ? (
                        <p>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {text}
                          </a>
                        </p>
                      ) : (
                        <p>{text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="left-line"></div>
              <div className="icon-social">
                {[svg5, svg6, svg7, svg8].map((icon, index) => (
                  <a key={index} href="#">
                    <img src={icon} alt="Icône Réseau Social" />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="card-right">
        <Navbar setActivePage={setActivePage} />
        <div className="content">
          {visiblePage ? (
            renderPage()
          ) : (
            <p className="progress-9">
              <img src={gif1} alt="Chargement..." />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Acceil;
