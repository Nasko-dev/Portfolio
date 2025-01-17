import "./Cv.css";
import img1 from "../../assets/images/svg/education.svg";

function Cv() {
  return (
    <div className="cv-container">
      <h2>CV</h2>
      <div className="line">{/* ligne */}</div>
      <div className="Style-line">
        <div className="box1">
          <img src={img1} alt="Education" />
          <p>Expérience</p>
        </div>
        <div className="ronds">
          <h4>Windows 11</h4>
          <p className="P-active">2024 — Presente</p>
          <p>
            J’ai recréé l’interface de{" "}
            <a href="https://nasko-dev.github.io/Portfolio/">Windows 11</a> en
            solo pour perfectionner mes compétences en développement web et
            design UI/UX. En utilisant React, CSS avancé et JavaScript, j’ai
            reproduit le menu Démarrer, la barre des tâches et les fenêtres
            dynamiques avec des animations fluides. Ce projet m’a appris à
            optimiser les performances et à concevoir des interfaces intuitives
            et esthétiques. Un vrai défi, mais super enrichissant ! 🚀
          </p>
        </div>
        <div className="ronds">
          <h4>WildCity</h4>
          <p className="P-active">2024 — Présent</p>
          <p>
            J’ai participé à un projet en équipe où nous avons créé{" "}
            <a href="https://nasko-dev.github.io/Portfolio/">WildCity</a>, une
            ville fictive remplie de poulets. Développé avec React, CSS avancé
            et JavaScript, ce site propose une immersion originale avec une
            interface interactive et des animations fluides. Cette expérience
            m’a permis d’améliorer mes compétences en travail d’équipe, gestion
            des composants dynamiques. Un projet fun et formateur ! 🐔🚀
          </p>
        </div>
        <div className="ronds">
          <h4>Portfolio</h4>
          <p className="P-active">2024 — Présent</p>
          <p>
            J’ai conçu mon{" "}
            <a href="https://nasko-dev.github.io/Portfolio/">Portfolio</a> de A
            à Z pour mettre en avant mes projets et compétences en développement
            web. En utilisant React, CSS avancé et JavaScript, j’ai créé une
            interface moderne, responsive et fluide, avec des animations et une
            navigation intuitive. Ce projet m’a permis d’affiner mon approche
            UX/UI, d’optimiser les performances et de renforcer ma maîtrise du
            front-end. Un travail clé pour illustrer mon évolution et mes
            capacités techniques ! 🚀
          </p>
        </div>
        <div className="line-left"></div>
      </div>

      <div className="cv-container">
        <div className="Style-line">
          <div className="box2">
            <img src={img1} alt="Education" />
            <p>Education</p>
          </div>
          <div className="ronds">
            <h4>Développeur Web Full Stack</h4>
            <p className="P-active">2024-2025</p>
            <p>
              J’ai suivi une formation intensive à la{" "}
              <strong>Wild Code School</strong> en développement web full stack,
              où j’ai appris à maîtriser "JavaScript, React, Node.js, Express et
              SQL" à travers des projets concrets. Cette expérience m’a permis
              de renforcer mes compétences techniques, de travailler en équipe
              agile et d’obtenir un diplôme certifiant Bac+2. 🚀
            </p>
          </div>
          <div className="ronds">
            <h4>Technicien Assistance Informatique</h4>
            <p className="P-active">2023-2024</p>
            <p>
              Formé à la "gestion et maintenance de serveurs" sous "Windows et
              Linux", j’assure l’administration des systèmes, la configuration
              réseau et la "sécurisation des infrastructures IT". Cette
              expérience m’a aussi permis de renforcer mes compétences en
              "support et dépannage". 🖥️🔧
            </p>
          </div>
          <div className="ronds">
            <h4>Expérience dans le secteur agricole</h4>
            <p className="P-active">-2023</p>
            <p>
              Mon expérience dans le "monde agricole" m’a permis de développer
              des compétences en "rigueur, gestion et adaptation", des qualités
              essentielles en développement web. Travailler sur le terrain m’a
              appris à résoudre des problèmes concrets, optimiser les ressources
              et m’adapter aux imprévus. Aujourd’hui, j’applique ces mêmes
              compétences dans la "conception de solutions numériques
              performantes", en alliant "précision et efficacité" dans mon code.
              🌱💻
            </p>
          </div>

          <div className="line-left"></div>
        </div>
      </div>
      <div className="skils">
        <h2>Mes compétences</h2>
        <img
          src="https://camo.githubusercontent.com/bc394f01a76348f6121950da3912f78949a7557e8d5771f20ef52fd200636170/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c2c6373732c6a732c6c75612c72656163742c6669676d612c7673636f64652c6170706c652c6769746875622c74687265656a732c646973636f7264267468656d653d6461726b"
          alt="Mes compétences"
        />
      </div>
    </div>
  );
}

export default Cv;
