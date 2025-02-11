import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "./About.css";
import svg1 from "../../assets/images/svg/icon-design.svg";
import svg2 from "../../assets/images/svg/icon-dev.svg";
import svg3 from "../../assets/images/svg/icon-app.svg";
import svg4 from "../../assets/images/svg/icon-photo.svg";
import img1 from "../../assets/images/avatar-1.png";
import img2 from "../../assets/images/avatar-2.png";
import img3 from "../../assets/images/avatar-3.png";
import img4 from "../../assets/images/avatar-4.png";

import startup1 from "../../assets/FlachSide.png";
import startup2 from "../../assets/Exelity.png";
import startup3 from "../../assets/Vrunk.png";
import startup4 from "../../assets/ArtCity.png";

function About() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(".img-startup", {
      x: -1250,
    }).to(".img-startup", {
      duration: 10,
      ease: "none",
      x: -25,
      repeat: -1,
    });
  }, []);

  // ✅ Mise à jour immédiate de `isMobile` en cas de redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    {
      icon: svg1,
      name: "Dev Mastery",
      description:
        "🎯 Perfectionnement en développement web – Front-end, back-end et algorithmie.",
    },
    {
      icon: svg2,
      name: "Web Growth Lab",
      description:
        "📈 Optimisation web – SEO, UX/UI et automatisation pour des sites performants.",
    },
    {
      icon: svg3,
      name: "Tech Vision",
      description:
        "🔬 Veille technologique – IA, Web3 et nouvelles tendances du développement.",
    },
    {
      icon: svg4,
      name: "Code & Performance",
      description:
        "💪 Code propre et efficace – Clean code, bonnes pratiques et productivité.",
    },
    {
      icon: svg4,
      name: "Startup Dev Pulse",
      description:
        "🎙️ Solutions tech pour startups – Digitalisation, outils et innovations.",
    },
    {
      icon: svg4,
      name: "NeuroVibes",
      description:
        "🧠 Logique et mindset du dev – Concentration, résolution de problèmes et rigueur.",
    },
  ];

  const avis = [
    {
      image: img1,
      name: "Clara Morel",
      description:
        "Travailler avec William a été une bonne expérience. Il a su comprendre mes besoins et a livré un site web parfaitement adapté, moderne et fonctionnel. Je recommande vivement ses services !",
    },
    {
      image: img2,
      name: "Lucas Dubois",
      description:
        "William est un développeur compétent et à l'écoute. Mon projet e-commerce a été réalisé rapidement et le résultat dépasse mes attentes. Bravo pour son professionnalisme !",
    },
    {
      image: img3,
      name: "Emma Lefèvre",
      description:
        "J'avais besoin d'un site vitrine pour mon activité. William a su me proposer un design élégant et des fonctionnalités simples d'utilisation. Merci encore !",
    },
    {
      image: img4,
      name: "Thomas Bernard",
      description:
        "Je suis très satisfait du travail de William. Il a su coder un site web rapide et optimisé pour le référencement. Je continuerai de collaborer avec lui à l'avenir.",
    },
  ];

  const startup = [
    {
      id: 1,
      image: startup1,
      name: "ArtCity",
    },
    {
      id: 2,
      image: startup2,
      name: "ArtCity",
    },
    {
      id: 2,
      image: startup3,
      name: "ArtCity",
    },
    {
      id: 2,
      image: startup4,
      name: "ArtCity",
    },
    {
      id: 2,
      image: startup1,
      name: "ArtCity",
    },
  ];

  return (
    <div className="header">
      <h1>Salut je suis William</h1>
      <div className="line">{/* Ajout du line Pour séparé le profil */}</div>
      <p className="Skills">
        Développeur web full stack / Game Développeur / Designer UI UX
      </p>

      {/* 📌 Section des projets personnels */}
      <div className="contenue">
        <h2>Projets personnels :</h2>
        <div className="card">
          {categories
            .slice(0, showAllProjects || !isMobile ? categories.length : 3)
            .map((item) => (
              <div key={item.name} className="card-item">
                <img src={item.icon} alt={item.name} />
                <div className="texte">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* ✅ Boutons affichés immédiatement sans délai */}
        {isMobile && (
          <div className="buttons-container">
            {!showAllProjects ? (
              <button
                type="button"
                className="btn-show-more"
                onClick={() => setShowAllProjects(true)}
              >
                Voir plus ↓
              </button>
            ) : (
              <button
                type="button"
                className="btn-show-less"
                onClick={() => setShowAllProjects(false)}
              >
                Voir moins ↑
              </button>
            )}
          </div>
        )}
      </div>

      {/* 📌 Section des avis clients */}
      <div className="avis-contenue">
        <div className="avis">
          <h2>Mes Avis</h2>
          <div className="avis-card">
            {avis.map((item) => (
              <div key={item.name} className="card-item-avis">
                <img src={item.image} alt={item.name} />
                <div className="avis-texte">
                  <h3>{item.name}</h3>
                  <p>"{item.description}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📌 Section des startups */}
      <div className="startup">
        <h2>Startup</h2>
        {startup.map((item) => (
          <span key={item.name}>
            <img className="img-startup" src={item.image} alt="startup" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
