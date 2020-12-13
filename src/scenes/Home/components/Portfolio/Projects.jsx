import * as React from "react";

export const Projects = () => {
  return (
    <div className="projects-grid">
      <Project
        title="Trakku"
        tags={["node", "react", "postgres", "typescript"]}
        projectLink="https://app.trakku.net"
        codeLink="https://github.com/edgar8acas/we-track"
      >
        Simple issue tracker
      </Project>
      <Project
        title="Codice"
        tags={["node", "vue", "postgres", "javascript", "r"]}
        projectLink="https://edgarochoa.dev"
        codeLink="https://github.com/edgar8acas/codice"
      >
        Get essential words from a text
      </Project>
    </div>
  );
};

export const Project = ({
  title,
  children,
  tags = [],
  projectLink,
  codeLink,
}) => {
  return (
    <div className="Project">
      <h3>{title}</h3>
      <p>{children}</p>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <div className="links">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          Live
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};
