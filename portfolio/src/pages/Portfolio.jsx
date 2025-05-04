import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Popup from "../components/Popup";
import projectData from "../data/projects";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <h1>My Projects</h1>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>
      
      {showProjects && (
        <div className="grid">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      )}

      {selectedProject && <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default Portfolio;
