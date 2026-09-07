import Carousel from "./Carousel";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-200 bg-white py-20 sm:py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
            About Me
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            Building practical software with modern technologies.
          </h2>

          <p className="mx-auto max-w-4xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            I'm a Computer Science student with a strong interest in full-stack
            development. I enjoy turning ideas into functional applications,
            working across both frontend and backend systems, and learning new
            technologies through hands-on projects.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            My current focus is on building web applications using React,
            TypeScript, Python, and FastAPI, while exploring backend
            architecture, databases, authentication, and cloud deployment.
          </p>

          <div className="mt-14 sm:mt-16">
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 sm:mb-8 sm:text-sm">
              Technologies I Work With
            </p>

            <div className="overflow-hidden">
              <Carousel />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
