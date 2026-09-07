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
      className="border-t border-neutral-200 bg-white py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500">
              Education
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
              My academic journey.
            </h2>
          </div>

          {/* Education */}
          <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-[1fr_280px]">
            {/* Education Details */}
            <div className="relative border-l-2 border-neutral-200 pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-1 h-4 w-4 rounded-full border-4 border-white bg-black" />

              {/* Date */}
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
                2023 — Present
              </p>

              {/* University */}
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black md:text-3xl">
                University of Santo Tomas
              </h3>

              {/* Degree */}
              <p className="mt-2 text-lg font-medium text-neutral-700">
                Bachelor of Science in Computer Science
              </p>

              {/* Specialization */}
              <p className="mt-1 text-base text-neutral-500">
                Specialization: Data Science
              </p>

              {/* Expected Graduation */}
              <p className="mt-1 text-sm text-neutral-400">
                Expected Graduation: May 2027
              </p>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
                Currently pursuing a Bachelor of Science in Computer Science
                with a specialization in Data Science, developing a foundation
                across software engineering, web development, databases, machine
                learning, and computer systems.
              </p>

              {/* Relevant Coursework */}
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-black">
                  Relevant Coursework
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Institution Logos */}
            <div className="flex flex-row items-center justify-center gap-8 md:flex-col md:gap-10">
              <img
                src="/education/ust_logo.png"
                alt="University of Santo Tomas"
                className="h-28 w-28 object-contain md:h-36 md:w-36"
              />

              <div className="h-px w-16 bg-neutral-200 md:h-px md:w-20" />

              <img
                src="/education/cics_logo.png"
                alt="College of Information and Computing Sciences"
                className="h-28 w-28 object-contain md:h-36 md:w-36"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
