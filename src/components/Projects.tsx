import { Card } from './ui/Card';
import { portfolioData } from '../data/resumeData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full group">
            <div className="mb-6 flex justify-between items-start">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-gray-400">
                <FaGithub className="hover:text-white cursor-pointer" />
                <FaExternalLinkAlt className="hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <ul className="text-sm text-gray-400 mb-6 flex-grow space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};