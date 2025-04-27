import React from 'react';

const ProjectCard = ({ name, screenshot, githubRepo, techUsed, description, projectPurpose, role }) => {
  return (
    <div className="project-card border shadow-md p-4 rounded-md">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <img
        src={screenshot}
        alt={`${name} Screenshot`}
        className="w-full h-auto mb-4 rounded-md"
      />
      <p><strong>Tech Used:</strong> {techUsed}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>What it does:</strong> {projectPurpose}</p>
      <p><strong>Your Role:</strong> {role}</p>
      <a href={githubRepo} target="_blank" className="text-blue-500 hover:underline">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
