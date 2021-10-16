import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./project.css";

function Project() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const data = ProjectData;

  return (
    <div className="projects" id="project">
      <div className="garis"></div>
      <h1 className="title2" style={{ color: darkMode && "#ffffff" }}>
        Projects
      </h1>
      <div className="project-items">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Project;
