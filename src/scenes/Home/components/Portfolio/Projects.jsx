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
<<<<<<< HEAD
  liveText = null,
=======
  liveText,
>>>>>>> 9170ef9736de836b2b8038dc6e47ecfc938d8fd2
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
