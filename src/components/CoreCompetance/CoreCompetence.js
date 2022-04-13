import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import "./CoreCompetence.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { competenceData } from "../../data/CoreCompetenceData";

function CoreCompetence() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{competenceData.title}</h2>
          <Fade bottom>
            <p style={{ color: theme.tertiary80 }}>
              {competenceData.description}
            </p>
          </Fade>
        </div>
      </div>
      <div className="line-styling1">
        <div
          className="style-circle1"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle1"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line1"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
    </div>
  );
}

export default CoreCompetence;
