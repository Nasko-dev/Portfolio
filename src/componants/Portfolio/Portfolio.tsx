import { useState } from "react";
import "./Portfolio.css";
// import img1 from "../../assets/images/project/project-4.png";
import img2 from "../../assets/images/project/Windows_11_blur.webp";
import img3 from "../../assets/images/project/Portfolio.png";
import svg1 from "../../assets/images/svg/eye-show-svgrepo-com.svg";

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Le premier élément est actif par défaut
  const [activeCategory, setActiveCategory] = useState<string>("All"); // Catégorie active par défaut

  const navItems = [
    { name: "All", category: "All" },
    { name: "Web design", category: "Web Design" },
    { name: "Applications", category: "Applications" },
    { name: "Web development", category: "Web Development" },
  ];

  const projects = [
    {
      category: "finance",
      name: "Windows 11",
      type: "Web Design",
      image: img2,
    },
    {
      category: "finance",
      name: "Portfolio",
      type: "Web Development",
      image: img3,
    },
    // {
    //   category: "finance",
    //   name: "PublicAdis",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "DiverEdu",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "LaTatuadora",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "Cachimboz",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "SAP Adventures",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "Portafolio",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "Shantall Portafolio",
    //   type: "Web Design",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "Learning App",
    //   type: "Web Design",
    //   image: img1,
    // },
    // {
    //   category: "finance",
    //   name: "Finance",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "orizon",
    //   name: "Orizon",
    //   type: "Web Development",
    //   image: img1,
    // },
    // { category: "fundo", name: "Fundo", type: "Web Design", image: img1 },
    // {
    //   category: "brawlhalla",
    //   name: "Brawlhalla",
    //   type: "Applications",
    //   image: img1,
    // },
    // { category: "dsm.", name: "DSM.", type: "Web Design", image: img1 },
    // {
    //   category: "metaspark",
    //   name: "MetaSpark",
    //   type: "Web Design",
    //   image: img1,
    // },
    // {
    //   category: "summary",
    //   name: "Summary",
    //   type: "Web Development",
    //   image: img1,
    // },
    // {
    //   category: "task manager",
    //   name: "Task Manager",
    //   type: "Applications",
    //   image: img1,
    // },
  ];

  const handleClick = (index: number, category: string) => {
    setActiveIndex(index); // Met à jour l'index actif
    setActiveCategory(category); // Met à jour la catégorie active
  };

  // Filtrer les projets en fonction de la catégorie active
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  return (
    <div className="Portfolio-container">
      <h2>Portfolio</h2>
      <div className="line"></div>

      <div className="nav-links">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className={`nav-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleClick(index, item.category)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <div className="card-project" key={index}>
            <img src={project.image} alt={project.name} />
            <div className="overlay">
              <a href="#">
                <img src={svg1} alt="" />
              </a>
            </div>
            <h3>{project.name}</h3>
            <p>{project.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
