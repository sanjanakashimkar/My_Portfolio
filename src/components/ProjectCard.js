import React, { useState } from 'react';
import { Github, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className=" group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 transition-all hover:-translate-y-1 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative overflow-hidden pt-[56.25%]">
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="flex flex-row items-start justify-between space-y-0 p-6">
          <h3 className="text-lg font-semibold text-purple-500">{project.title}</h3>
          <span className="text-sm text-zinc-400">{project.date}</span>
        </div>
        <div className="space-y-4 p-6 pt-0">
          <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="h-[620px] bg-zinc-950 text-white rounded-lg max-w-2xl w-full overflow-y-auto">
            <div className=" p-6 space-y-6">
              <div className=" flex justify-between items-center">
                <h2 className="text-2xl font-bold text-purple-500">{project.title}</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-zinc-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-500 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.members && project.members.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold">Members</h4>
                    <div className="space-y-2">
                      {project.members.map((member, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-8 w-8 rounded-full border-2 border-purple-500 object-cover"
                          />
                          <span className="text-sm">{member.name}</span>
                          <div className="ml-auto flex gap-2">
                            {member.github && (
                              <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-purple-500"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github className="h-5 w-5" />
                              </a>
                            )}
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-purple-500"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Globe className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-zinc-700 text-white rounded-md hover:bg-zinc-800 transition-colors"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <Globe className="h-4 w-4" />
                    View Live App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

