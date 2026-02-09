import { projectsConfig } from '@/config'

/**
 * Projects section - Grid of project cards
 * Displays personal projects with images, descriptions, and links
 */
const Projects = () => {
  return (
    <section id="projects" className="py-section px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-h2 font-semibold text-neutral-50 text-center mb-12">
          我的项目
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsConfig.map((project, index) => (
            <div
              key={project.id}
              className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-primary-blue hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-250 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-neutral-50 mb-1 group-hover:text-primary-blue transition-colors">
                  {project.title}
                </h3>

                {project.subtitle && (
                  <p className="font-body text-sm text-primary-pink font-medium mb-3">
                    {project.subtitle}
                  </p>
                )}

                <p className="font-body text-body text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-blue/10 text-primary-blue text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo && !project.github && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center px-4 py-2 bg-primary-blue hover:bg-blue-600 text-neutral-50 text-sm font-medium rounded-lg transition-colors"
                    >
                      访问项目
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-50 text-sm font-medium rounded-lg transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && project.github && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-primary-blue hover:bg-blue-600 text-neutral-50 text-sm font-medium rounded-lg transition-colors"
                    >
                      演示
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
