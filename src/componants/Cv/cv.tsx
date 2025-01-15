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
