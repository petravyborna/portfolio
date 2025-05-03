import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects';

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      <h1>My Projects</h1>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>
      
      {showProjects && (
        <div className="grid">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
