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
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-neutral-500 shadow-sm transition-colors hover:bg-neutral-100 hover:text-black"
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
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        currentImage === index
                          ? "w-6 bg-white"
                          : "w-2.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-sm font-medium uppercase tracking-widest text-neutral-400">
                Project Preview
              </span>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Project
          </p>

          <h2
            id="project-modal-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-black md:text-4xl"
          >
            {project.title}
          </h2>

          {/* Role */}
          <p className="mt-3 text-base font-medium text-neutral-500">
            {project.role}
          </p>

          {/* Story */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
              About the Project
            </h3>

            <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-600">
              {project.story}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
              Technologies
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm text-neutral-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="mt-8 flex flex-wrap gap-3">
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
