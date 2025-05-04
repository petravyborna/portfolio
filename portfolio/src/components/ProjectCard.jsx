import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <h2>{project.name}</h2>
      <img src={project.screenshot} alt={`${project.name} Screenshot`} />
      <p><strong>Tech Used:</strong> {project.techUsed}</p>
    </div>
  );
};

export default ProjectCard;
