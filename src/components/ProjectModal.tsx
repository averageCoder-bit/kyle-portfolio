import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project) return;

    setCurrentImage(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((previous) =>
        previous === project.images.length - 1 ? 0 : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  const hasMultipleImages = project.images.length > 1;

  return (
    <div
      className="fixed inset-0 z-100 overflow-y-auto bg-black/60 p-4 sm:p-6"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative mx-auto my-4 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:my-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-xl text-neutral-500 shadow-sm transition-colors hover:bg-neutral-100 hover:text-black sm:right-5 sm:top-5"
        >
          ×
        </button>

        {/* Image Carousel */}
        <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
          {project.images.length > 0 ? (
            <>
              {/* Sliding Track */}
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentImage * 100}%)`,
                }}
              >
                {project.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-full w-full shrink-0 object-cover"
                  />
                ))}
              </div>

              {/* Indicators */}
              {hasMultipleImages && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm sm:bottom-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className="flex h-4 w-4 items-center justify-center"
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all ${
                          currentImage === index
                            ? "w-6 bg-white"
                            : "w-2.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-400 sm:text-sm">
                Project Preview
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Project
          </p>

          <h2
            id="project-modal-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl"
          >
            {project.title}
          </h2>

          {/* Role */}
          <p className="mt-3 text-sm font-medium text-neutral-500 sm:text-base">
            {project.role}
          </p>

          {/* Story */}
          <div className="mt-7 sm:mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black sm:text-sm">
              About the Project
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
              {project.story}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-7 sm:mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-black sm:text-sm">
              Technologies
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600 sm:text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:border-black"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
