import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import FadeIn from "react-fade-in";
import "./project-card.css";
function ProjectCard({ project }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <FadeIn>
      <div className="project-card">
        <div className="card-upper">
          <div className="project-title">{project.title}</div>
          <div className="project-link">
            {project.github && (
              <a href={project.github} style={{ color: darkMode && "#888888" }}>
                <i class="fab fa-github"></i>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} style={{ color: darkMode && "#888888" }}>
                <i class="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
        <div className="project-desc">{project.about}</div>
        <div className="project-tag">
          {project.tags.map((tags) => {
            return <span className="tag">{tags} </span>;
          })}
        </div>
      </div>
    </FadeIn>
  );
}

export default ProjectCard;
