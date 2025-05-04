import React from "react";

const Popup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>{project.name}</h2>
        <img src={project.screenshot} alt={`${project.name} Screenshot`} />
        <p><strong>Tech Used:</strong> {project.techUsed}</p>
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>What it does:</strong> {project.projectPurpose}</p>
        <p><strong>Your Role:</strong> {project.role}</p>
        <p><strong>Challenges Solved:</strong> {project.challenges}</p>
        <p><strong>Lessons Learned:</strong> {project.lessons}</p>
        <a href={project.githubRepo} target="_blank">View on GitHub</a>
      </div>
    </div>
  );
};

export default Popup;
