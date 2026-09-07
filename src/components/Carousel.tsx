const technologies = [
  { name: "React", src: "/tech/react.png" },
  { name: "TypeScript", src: "/tech/typescript.png" },
  { name: "JavaScript", src: "/tech/javascript.png" },
  { name: "HTML", src: "/tech/html.png" },
  { name: "CSS", src: "/tech/css.png" },
  { name: "Python", src: "/tech/python.png" },
  { name: "FastAPI", src: "/tech/fastapi.png" },
  { name: "PostgreSQL", src: "/tech/postgresql.png" },
  { name: "Supabase", src: "/tech/supabase.png" },
  { name: "Docker", src: "/tech/docker.png" },
  { name: "Cloudflare", src: "/tech/cloudflare.png" },
  { name: "Git", src: "/tech/git.png" },
  { name: "GitHub", src: "/tech/github.png" },
  { name: "Tailwind CSS", src: "/tech/tailwindcss.png" },
  { name: "Vite.js", src: "/tech/vitejs.png" },
  { name: "NGINX", src: "/tech/nginx.png" },
  { name: "DBeaver", src: "/tech/beaver.png" },
  { name: "Apache Airflow", src: "/tech/airflow.png" },
  { name: "MySQL", src: "/tech/mysql.png" },
];

export default function Carousel() {
  const items = [...technologies, ...technologies];

  return (
    <div className="group relative w-full overflow-hidden">
      <div className="flex w-max animate-[tech-scroll_30s_linear_infinite] gap-12 py-4 group-hover:[animation-play-state:paused]">
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex w-24 shrink-0 flex-col items-center gap-3"
          >
            <div className="flex h-21 w-21 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3">
              <img
                src={tech.src}
                alt={tech.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-xs font-medium text-neutral-500">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
