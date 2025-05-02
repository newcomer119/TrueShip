import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import Card from '../common/Card';

interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className="group transition-all duration-300 hover:translate-y-[-8px] bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-white/70 mb-4">
              {project.description}
            </p>
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              View Project 
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsShowcase;