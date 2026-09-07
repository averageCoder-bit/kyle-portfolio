export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL", "Supabase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Cloudflare"],
  },
];
