import React from "react";
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
          <p>Education</p>
        </div>
        <div className="ronds">
          <h4>Test</h4>
          <p className="P-active">2018 — Presente</p>
          <p>
            A través de Platzi, he tenido la oportunidad de adquirir
            conocimientos especializados en áreas como marketing digital,
            desarrollo web y diseño de interfaces. Los cursos interactivos y
            actualizados me han permitido estar al tanto de las últimas
            tendencias y técnicas en el mundo digital, brindándome una base
            sólida para desarrollar estrategias efectivas como ingeniero y
            Estratega de Contenidos.
          </p>
        </div>
        <div className="ronds">
          <h4>Test</h4>
          <p className="P-active">2018 — Presente</p>
          <p>
            A través de Platzi, he tenido la oportunidad de adquirir
            conocimientos especializados en áreas como marketing digital,
            desarrollo web y diseño de interfaces. Los cursos interactivos y
            actualizados me han permitido estar al tanto de las últimas
            tendencias y técnicas en el mundo digital, brindándome una base
            sólida para desarrollar estrategias efectivas como ingeniero y
            Estratega de Contenidos.
          </p>
        </div>
        <div className="ronds">
          <h4>Test</h4>
          <p className="P-active">2018 — Presente</p>
          <p>
            A través de Platzi, he tenido la oportunidad de adquirir
            conocimientos especializados en áreas como marketing digital,
            desarrollo web y diseño de interfaces. Los cursos interactivos y
            actualizados me han permitido estar al tanto de las últimas
            tendencias y técnicas en el mundo digital, brindándome una base
            sólida para desarrollar estrategias efectivas como ingeniero y
            Estratega de Contenidos.
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
            <h4>Test</h4>
            <p className="P-active">2018 — Presente</p>
            <p>
              A través de Platzi, he tenido la oportunidad de adquirir
              conocimientos especializados en áreas como marketing digital,
              desarrollo web y diseño de interfaces. Los cursos interactivos y
              actualizados me han permitido estar al tanto de las últimas
              tendencias y técnicas en el mundo digital, brindándome una base
              sólida para desarrollar estrategias efectivas como ingeniero y
              Estratega de Contenidos.
            </p>
          </div>
          <div className="ronds">
            <h4>Test</h4>
            <p className="P-active">2018 — Presente</p>
            <p>
              A través de Platzi, he tenido la oportunidad de adquirir
              conocimientos especializados en áreas como marketing digital,
              desarrollo web y diseño de interfaces. Los cursos interactivos y
              actualizados me han permitido estar al tanto de las últimas
              tendencias y técnicas en el mundo digital, brindándome una base
              sólida para desarrollar estrategias efectivas como ingeniero y
              Estratega de Contenidos.
            </p>
          </div>
          <div className="ronds">
            <h4>Test</h4>
            <p className="P-active">2018 — Presente</p>
            <p>
              A través de Platzi, he tenido la oportunidad de adquirir
              conocimientos especializados en áreas como marketing digital,
              desarrollo web y diseño de interfaces. Los cursos interactivos y
              actualizados me han permitido estar al tanto de las últimas
              tendencias y técnicas en el mundo digital, brindándome una base
              sólida para desarrollar estrategias efectivas como ingeniero y
              Estratega de Contenidos.
            </p>
          </div>
          <div className="line-left"></div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
