import Profile from "./Profile";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-16">
      <FadeIn>
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20">
          <div className="flex w-full flex-col-reverse items-center justify-between gap-16 md:flex-row">
            <div className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left w-full">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Kyle Eva
              </h1>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-800 sm:text-4xl lg:text-5xl">
                Computer Science Student & Full-Stack Developer.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                I build practical web applications and enjoy working across
                frontend, backend, and database systems.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <a
                  href="/documents/Kyle_Francis_Eva_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 text-center w-full sm:w-auto"
                >
                  View CV
                </a>

                <a
                  href="https://github.com/averageCoder-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-black transition-colors hover:border-black text-center w-full sm:w-auto"
                >
                  GitHub
                </a>
              </div>
            </div>

            <Profile />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
