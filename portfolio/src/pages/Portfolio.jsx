import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Popup from "../components/Popup";
import projectData from "../data/projects";

function Portfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjects, setShowProjects] = useState(false);

  const filteredProjects = projectData.filter(project =>
    project.techUsed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>My Projects</h1>

      <input
        type="text"
        placeholder="Search by tech (HTML, CSS, JavaScript...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (
        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      )}

      {selectedProject && <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}

export default Portfolio;
