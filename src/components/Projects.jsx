// src/components/Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { assets, projects } from "../assets/assets.js";

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-20 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 transition-colors dark:bg-gray-800 dark:text-white bg-white text-gray-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {/* Tech Stack Section */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech) => {
                      const Icon = assets[tech];
                      return Icon ? (
                        <Icon
                          key={tech}
                          title={tech}
                          className="text-3xl text-gray-600 dark:text-gray-300"
                        />
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Live Demo and GitHub Buttons Section */}
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 flex items-center justify-center p-2 rounded-lg"
                  >
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-2 justify-center mt-10">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/grgankita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full max-w-md p-4 rounded-xl 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                   shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800">
                <assets.github size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  View All Projects on GitHub
                </h3>
              </div>
            </div>

            {/* Right Icon */}
            <assets.link size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
