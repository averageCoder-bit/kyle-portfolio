export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-white"
            >
              Kyle Eva
            </a>

            <p className="mx-auto mt-1 max-w-xs text-sm leading-6 text-neutral-400 md:mx-0">
              Computer Science Student & Full-Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-6">
            <a
              href="#about"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-7 border-t border-neutral-800 pt-5 text-center sm:mt-8 sm:pt-6">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Kyle Eva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
