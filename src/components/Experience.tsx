import FadeIn from "./FadeIn";
export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 bg-white py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500">
              Experience
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              Learning through hands-on experience.
            </h2>
          </div>

          {/* Experience */}
          <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-[1fr_280px]">
            {/* Experience Details */}
            <div className="relative border-l-2 border-neutral-200 pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-black" />

              {/* Date */}
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
                August 2026 — Present
              </p>

              {/* Company */}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                FlyRank AI
              </h3>

              {/* Position */}
              <p className="mt-2 text-lg font-medium text-neutral-700">
                Backend AI Engineer - Intern
              </p>

              {/* Employment Details */}
              <p className="mt-1 text-base text-neutral-500">
                Internship · Remote
              </p>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
                Currently interning at FlyRank AI as an AI intern, focusing on
                Backend AI Engineering and gaining practical experience in
                developing and working with AI-powered backend systems.
              </p>

              {/* Company Link */}
              <div className="mt-6">
                <a
                  href="https://flyrank.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-black transition-colors hover:text-neutral-500"
                >
                  Visit FlyRank AI
                  <span className="ml-2">↗</span>
                </a>
              </div>
            </div>

            {/* Company Logo */}
            <div className="flex items-center justify-center">
              <img
                src="/experience/flyrank.png"
                alt="FlyRank AI"
                className="h-36 w-36 object-contain"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
