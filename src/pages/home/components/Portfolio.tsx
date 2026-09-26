import { Icon } from "@/components/Icon";
import { useState } from "react";

const categories = ["Tous", "React/Next.js", "UI Design", "Full Stack", "Landing Page"];

const projects = [
  {
    id: 1,
    title: "E-School Dashboard",
    category: "React/Next.js",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/assets/images/project-1.jpg",
    github: "https://gitlab.com/begoto",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce",
    category: "Landing Page",
    tags: ["HTML", "CSS", "JS"],
    image: "/assets/images/project-2.jpg",
    github: "https://github.com/begoto",
    live: "",
    featured: false,
  },
  {
    id: 3,
    title: "App de Gestion RH",
    category: "Full Stack",
    tags: ["CSS", "HTML", "JS"],
    image: "/assets/images/project-3.jpg",
    github: "https://github.com/begoto",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Flashcards-en",
    category: "Landing Page",
    tags: ["React", "TailwindCSS", "Shadcn/UI"],
    image: "/assets/images/project-4.jpg",
    github: "https://github.com/begoto",
    live: "https://flashcards-en-stofil.netlify.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Task-Flow",
    category: "UI Design",
    tags: ["Nextjs", "Shadcn", "json-server"],
    image: "/assets/images/project-5.jpg",
    github: "https://github.com/begoto",
    live: "",
    featured: false,
  },
  {
    id: 6,
    title: "Auth-G-email",
    category: "React/Next.js",
    tags: ["Next.js", "postgresql", "Nodejs"],
    image: "/assets/images/project-6.jpg",
    github: "https://github.com/begoto",
    live: "",
    featured: false,
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
            Mes Réalisations
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Portfolio</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Une sélection de projets qui illustrent mon expertise en développement frontend et en design d&apos;interfaces.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-[#E85D04] text-white"
                  : "border border-[#2a2a2a] text-gray-400 hover:border-[#E85D04] hover:text-[#E85D04]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#111111] rounded-xl overflow-hidden border border-[#1e1e1e] hover:border-[#E85D04]/40 transition-all duration-300"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-3 right-3 z-20 bg-[#C54B03] text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Featured
                </span>
              )}

              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${project.image.replace(".jpg", ".w400.webp")} 400w, ${project.image.replace(".jpg", ".w800.webp")} 800w`}
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  />
                  <img
                    src={project.image.replace(".jpg", ".w800.jpg")}
                    alt={`Aperçu du projet ${project.title}`}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={project.github.includes('gitlab') ? 'GitLab' : 'GitHub'}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E85D04] text-white hover:bg-[#c94d03] transition-colors cursor-pointer"
                >
                  <Icon name={project.github.includes('gitlab') ? 'gitlab' : 'github'} className="text-lg" />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le projet ${project.title} en ligne`}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    <Icon name="externalLink" className="text-lg" />
                  </a>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#E85D04]/10 text-[#E85D04] text-xs font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/begoto"
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <Icon name="github" className="text-base" />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
