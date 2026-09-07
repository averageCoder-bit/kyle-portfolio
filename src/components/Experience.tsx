import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 bg-white py-20 sm:py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
              Experience
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              Learning through hands-on experience.
            </h2>
          </div>

          {/* Experience */}
          <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_280px] md:gap-12">
            {/* Experience Details */}
            <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-black" />

              {/* Date */}
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-sm sm:tracking-wider">
                August 2026 — Present
              </p>

              {/* Company */}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                FlyRank AI
              </h3>

              {/* Position */}
              <p className="mt-2 text-base font-medium text-neutral-700 sm:text-lg">
                Backend AI Engineer - Intern
              </p>

              {/* Employment Details */}
              <p className="mt-1 text-sm text-neutral-500 sm:text-base">
                Internship · Remote
              </p>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
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
            <div className="flex items-center justify-center pt-2 md:pt-0">
              <img
                src="/experience/flyrank.png"
                alt="FlyRank AI"
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 md:h-36 md:w-36"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
