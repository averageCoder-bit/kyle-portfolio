import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";
import FadeIn from "./FadeIn";

import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="border-t border-neutral-200 bg-white py-24"
      >
        <FadeIn>
          <div className="mx-auto max-w-6xl px-6">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500">
                Projects
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
                Things I've built.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
                A selection of projects I've worked on while exploring
                full-stack development, software engineering, and AI.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
