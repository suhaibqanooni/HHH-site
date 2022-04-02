import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import hhhPic from "../../assets/hhh/2.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
import { experienceData } from "../../data/experienceData";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

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
          {/* <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div> */}
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
            />
          ))}
        </div>
      )}
    </>
  );
}

const style = {
  container: { display: "flex", flexDirection: "row" },
  date: { fontSize: 10, alignSelf: "flex-end" },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: { fontSize: 20, color: "skyblue", marginLeft: 5 },
  subHeading: {
    fontSize: 15,
    color: "white",
    fontFamily: "Comic Sans MS",
  },
  description: {
    fontSize: 15,
    color: "white",
    fontFamily: "Arial",
  },
};
export default Projects;
