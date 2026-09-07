import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-200 bg-white py-20 sm:py-24"
    >
      <FadeIn>
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Section Header */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
            Contact
          </p>

          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            Let's connect.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            I'm currently open to internship opportunities and software
            development roles. Feel free to reach out if you'd like to connect.
          </p>

          {/* Contact Links */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:kyleeva53@gmail.com"
              className="group rounded-2xl border border-neutral-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 sm:h-14 sm:w-14">
                <img
                  src="/contact/email.png"
                  alt="Email"
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </div>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:mt-6 sm:text-xs sm:tracking-widest">
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
              className="group rounded-2xl border border-neutral-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 sm:h-14 sm:w-14">
                <img
                  src="/contact/linkedin.png"
                  alt="LinkedIn"
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </div>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:mt-6 sm:text-xs sm:tracking-widest">
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
              className="group rounded-2xl border border-neutral-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 sm:h-14 sm:w-14">
                <img
                  src="/contact/github.png"
                  alt="GitHub"
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </div>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 sm:mt-6 sm:text-xs sm:tracking-widest">
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
