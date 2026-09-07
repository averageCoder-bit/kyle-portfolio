import Carousel from "./Carousel";
import FadeIn from "./FadeIn";
export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200 bg-white py-24">
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500">
            About Me
          </p>

          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Building practical software with modern technologies.
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-neutral-600">
            I'm a Computer Science student with a strong interest in full-stack
            development. I enjoy turning ideas into functional applications,
            working across both frontend and backend systems, and learning new
            technologies through hands-on projects.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-neutral-600">
            My current focus is on building web applications using React,
            TypeScript, Python, and FastAPI, while exploring backend
            architecture, databases, authentication, and cloud deployment.
          </p>

          <div className="mt-16">
            <p className="mb-8 text-sm font-medium uppercase tracking-wider text-neutral-400">
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
