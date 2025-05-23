import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  techStack = [],
  imageAlt,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-gray-700 group">
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-800/50 hover:bg-blue-800/40 hover:text-blue-200 hover:border-blue-600 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-600 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/50 hover:border-blue-400 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
