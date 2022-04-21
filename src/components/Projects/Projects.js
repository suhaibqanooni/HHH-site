import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import "./Projects.css";
// import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
import { experienceData } from "../../data/experienceData";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{
            backgroundColor: theme.secondary,
          }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>PROFESSIONAL EXPERIENCE</h1>
          </div>

          {experienceData.map((data) => (
            <ProjectCard
              key={data.id}
              id={data.id}
              image={data.image}
              course={data.company}
              institution={data.jobtitle}
              startYear={data.startYear}
              endYear={data.endYear}
              line1={data.line1}
              line2={data.line2}
              line3={data.line3}
              line4={data.line4}
              line5={data.line5}
              line6={data.line6}
              line7={data.line7}
              line8={data.line8}
              line9={data.line9}
              Accomplishments={data.Accomplishments}
              acc1={data.acc1}
              acc2={data.acc2}
              acc3={data.acc3}
              acc4={data.acc4}
              acc5={data.acc5}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
