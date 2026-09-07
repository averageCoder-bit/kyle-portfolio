import FadeIn from "./FadeIn";

export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Information Management",
    "Web Application Development",
    "Software Engineering",
    "Machine Learning",
    "Operating Systems",
    "Networking",
    "Computer Security",
  ];

  return (
    <section
      id="education"
      className="border-t border-neutral-200 bg-white py-20 sm:py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
              Education
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              My academic journey.
            </h2>
          </div>

          {/* Education */}
          <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_280px] md:gap-12">
            {/* Education Details */}
            <div className="relative border-l-2 border-neutral-200 pl-6 sm:pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-black" />

              {/* Date */}
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400 sm:text-sm sm:tracking-wider">
                2023 — Present
              </p>

              {/* University */}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                University of Santo Tomas
              </h3>

              {/* Degree */}
              <p className="mt-2 text-base font-medium text-neutral-700 sm:text-lg">
                Bachelor of Science in Computer Science
              </p>

              {/* Specialization */}
              <p className="mt-1 text-sm text-neutral-500 sm:text-base">
                Specialization: Data Science
              </p>

              {/* Expected Graduation */}
              <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                Expected Graduation: May 2027
              </p>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
                Currently pursuing a Bachelor of Science in Computer Science
                with a specialization in Data Science, developing a foundation
                across software engineering, web development, databases, machine
                learning, and computer systems.
              </p>

              {/* Relevant Coursework */}
              <div className="mt-7 sm:mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black sm:text-sm sm:tracking-wider">
                  Relevant Coursework
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Institution Logos */}
            <div className="flex flex-row items-center justify-center gap-6 pt-2 sm:gap-8 md:flex-col md:gap-10 md:pt-0">
              <img
                src="/education/ust_logo.png"
                alt="University of Santo Tomas"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-36 md:w-36"
              />

              <div className="h-px w-12 bg-neutral-200 sm:w-16 md:w-20" />

              <img
                src="/education/cics_logo.png"
                alt="College of Information and Computing Sciences"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-36 md:w-36"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
