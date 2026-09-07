import FadeIn from "./FadeIn";
export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-200 bg-white py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Section Header */}
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-neutral-500">
            Contact
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">
            Let's connect.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            I'm currently open to internship opportunities and software
            development roles. Feel free to reach out if you'd like to connect.
          </p>

          {/* Contact Links */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:kyleeva53@gmail.com"
              className="group rounded-2xl border border-neutral-200 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100">
                <img
                  src="/contact/email.png"
                  alt="Email"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-neutral-400">
                Email
              </p>

              <p className="mt-3 break-all text-sm font-medium text-black">
                kyleeva53@gmail.com
              </p>

              <span className="mt-5 block text-sm text-neutral-500 transition-colors group-hover:text-black">
                Send an email →
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kylefranciseva/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-neutral-200 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100">
                <img
                  src="/contact/linkedin.png"
                  alt="LinkedIn"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-neutral-400">
                LinkedIn
              </p>

              <p className="mt-3 text-sm font-medium text-black">
                Connect with me
              </p>

              <span className="mt-5 block text-sm text-neutral-500 transition-colors group-hover:text-black">
                View profile →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/averageCoder-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-neutral-200 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100">
                <img
                  src="/contact/github.png"
                  alt="GitHub"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <p className="mt-6 text-xs font-medium uppercase tracking-widest text-neutral-400">
                GitHub
              </p>

              <p className="mt-3 text-sm font-medium text-black">
                averageCoder-bit
              </p>

              <span className="mt-5 block text-sm text-neutral-500 transition-colors group-hover:text-black">
                View repositories →
              </span>
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
