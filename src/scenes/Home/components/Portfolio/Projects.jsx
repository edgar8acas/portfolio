import * as React from "react";

export const Projects = () => {
  return (
    <div className="projects-grid">
      <Project
        title="Trakku"
        tags={["node", "react", "postgres", "typescript"]}
        projectLink="https://app.trakku.net"
        codeLink="https://github.com/edgar8acas/trakku"
      >
        Simple issue tracker
      </Project>
      <Project
        title="Codice"
        tags={["node", "vue", "postgres", "javascript", "r"]}
        projectLink="https://codice.edgarochoa.dev"
        codeLink="https://github.com/edgar8acas/codice"
      >
        Get essential words from collection of texts, and ease their learning
        for
      </Project>
      <Project
        title="Search party"
        tags={["java", "firebase", "Google Maps API"]}
        projectLink="https://www.youtube.com/watch?v=uHgflQEEO5A"
        codeLink="https://github.com/edgar8acas/search-party"
        liveText="Video demo"
      >
        Form a team and show the location of everyone in real time
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
  liveText = null,
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
          {liveText ? liveText : "Live"}
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};
