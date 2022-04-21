import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Projects.css";

function ProjectCard({
  id,
  institution,
  course,
  startYear,
  endYear,
  line1,
  line2,
  line3,
  line4,
  line5,
  line6,
  line7,
  line8,
  line9,
  Accomplishments,
  acc1,
  acc2,
  acc3,
  acc4,
  acc5,
  image,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade right>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div
          className="educard-img"
          style={{
            backgroundColor: theme.primary,
            overflow: "hidden",
            marginRight: 5,
          }}
        >
          <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
        </div>

        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.primary }}>{institution}</h5>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line1}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line2}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line3}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line4}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line5}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line6}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line7}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line8}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{line9}</p>
          <h5 style={{ color: theme.primary }}>{Accomplishments}</h5>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{acc1}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{acc2}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{acc3}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{acc4}</p>
          <p style={{ color: "#DEDEDE", fontFamily: "monospace" }}>{acc5}</p>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
