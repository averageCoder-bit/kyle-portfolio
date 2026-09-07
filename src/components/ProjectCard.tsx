import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
    >
      {/* Project Preview */}
      <div className="aspect-video overflow-hidden bg-neutral-100">
        {project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 sm:text-sm">
              Project Preview
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-xs sm:tracking-widest">
          Project
        </p>

        <h3 className="text-xl font-semibold tracking-tight text-black">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Indicator */}
        <div className="mt-6 flex items-center text-sm font-medium text-black">
          View project
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
  );
}
