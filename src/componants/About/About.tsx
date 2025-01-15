import "./About.css";
import svg1 from "../../assets/images/svg/icon-design.svg";
import svg2 from "../../assets/images/svg/icon-dev.svg";
import svg3 from "../../assets/images/svg/icon-app.svg";
import svg4 from "../../assets/images/svg/icon-photo.svg";
import img1 from "../../assets/images/avatar-1.png";
import img2 from "../../assets/images/avatar-2.png";
import img3 from "../../assets/images/avatar-3.png";
import img4 from "../../assets/images/avatar-4.png";

function About() {
  const categories = [
    {
      icon: svg1,
      name: "Pro-Dev",
      description: "🎯 Perfectionnement professionnel",
    },
    {
      icon: svg2,
      name: "Grow-Hack",
      description: "📈 Croissance personnelle",
    },
    {
      icon: svg3,
      name: "Science-Technologie",
      description: "🔬 Sciences et technologie",
    },
    {
      icon: svg4,
      name: "Bien ajusté",
      description: "💪 Nutrition et entraînement",
    },
    {
      icon: svg4,
      name: "L’état d’esprit de la startup",
      description: "🎙️ Podcast sur l’écosystème des startups",
    },
    {
      icon: svg4,
      name: "Phsyco-Sophia",
      description: "🧠 Sagesse de l’esprit → état d’esprit et sagesse",
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
      name: "Soon ...",
    },
    {
      name: "Soon ...",
    },
    {
      name: "Soon ...",
    },
    {
      name: "Soon ...",
    },
    {
      name: "Soon ...",
    },
    {
      name: "Soon ...",
    },
  ];

  return (
    <div className="header">
      <h1>Salut je suis William</h1>
      <div className="line"></div>
      <p className="Skills">
        Developeur web full stack / Game Developeur / Designer UI UX{" "}
      </p>
      <div className="contenue">
        <h2>Projets personnels :</h2>
        <div className="card">
          {categories.map((item, index) => (
            <div key={index} className="card-item">
              <img src={item.icon} alt={item.name} />
              <div className="texte">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="avis-contenue">
        <div className="avis">
          <h2>Mes Avis</h2>
          <div className="avis-card">
            {avis.map((item, index) => (
              <div key={index} className="card-item-avis">
                <img src={item.image} alt={item.name} />
                <div className="avis-texte">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="startup">
        <h2>Startup</h2>
        <p>
          {startup.map((item, index) => (
            <p>{item.name}</p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default About;
