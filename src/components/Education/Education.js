import React, { useContext } from "react";
import hhhPic from "../../assets/hhh/111.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import ScrollAnimation from "react-animate-on-scroll";
import Fade from "react-reveal/Fade";
import "./Education.css";
import EducationCard from "./EducationCard";

import { educationData } from "../../data/educationData";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: theme.primary }}>Education</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
              description="Hello there!!! it will the desc portion Hello there!!! it will the desc portion
              Hello there!!! it will the desc portion"
            />
          ))}
        </div>
        <Fade right>
          <div className="education-image">
            <img src={hhhPic} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Education;
