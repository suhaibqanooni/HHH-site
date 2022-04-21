import React, { useContext } from "react";
import "./KeyHighlights.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { keyHighlights } from "../../data/keyHighlightsData";

function KeyHighlights() {
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
          <h2 style={{ color: theme.primary }}>KEY HIGHLIGHTS</h2>
          {keyHighlights.map((item) => {
            return (
              <>
                <h3 style={{ color: theme.primary, fontSize: 30 }}>
                  {item.title}
                </h3>
                <p style={{ color: theme.tertiary80 }}>{item.line1}</p>
                <p style={{ color: theme.tertiary80 }}>{item.line2}</p>
                <p style={{ color: theme.tertiary80 }}>{item.line3}</p>
                <p style={{ color: theme.tertiary80 }}>{item.line4}</p>
              </>
            );
          })}
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

export default KeyHighlights;
