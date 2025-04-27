import React from 'react';
import ProjectCard from './components/ProjectCard';
import project1Image from './assets/gallery.png';
import project2Image from './assets/genesis.png';
import project3Image from './assets/typing-game.png';

const App = () => {
  const projects = [
    {
      name: "Project 1",
      screenshot: project1Image,
      githubRepo: "https://github.com/s-weberg/GroupProject.git",
      techUsed: "CSS, HTML",
      description: "A webpage for a seaside restaurant.",
      projectPurpose: "Allows users to see the menu, get contacts and book a table.",
      role: "Group project.",
    },
    {
      name: "Project 2",
      screenshot: project2Image, 
      githubRepo: "https://github.com/petravyborna/sass-project.git",
      techUsed: "CSS, HTML, SCSS",
      description: "A test portfolio webpage.",
      projectPurpose: "Remaking a webpage according to a template.",
      role: "Solo project done based on an existing template.",
    },
    {
      name: "Project 3",
      screenshot: project3Image, 
      githubRepo: "https://github.com/petravyborna/java-script-project-7.git",
      techUsed: "CSS, HTML, JavaScript",
      description: "A typing game",
      projectPurpose: "A fun little typing game.",
      role: "Solo project.",
    }
  ];

  return (
    <div className="app-container p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default App;
