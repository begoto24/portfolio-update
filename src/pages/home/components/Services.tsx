
import { Icon } from "@/components/Icon";

const services = [
  {
    icon: "codeBox",
    title: "Développement Web Frontend",
    description: "Création d'interfaces modernes, performantes et accessibles avec React, Next.js et TypeScript. Du design au code, chaque détail compte.",
    features: ["React / Next.js", "TypeScript & JavaScript", "APIs REST & GraphQL", "Optimisation SEO & Performance"],
    color: "#E85D04",
  },
  {
    icon: "brush",
    title: "Intégration UI/UX",
    description: "Transformation de maquettes Figma en interfaces pixel-perfect. Je maîtrise TailwindCSS, Bootstrap et les librairies de composants modernes.",
    features: ["TailwindCSS / Bootstrap", "Ant Design / Shadcn/UI", "Responsive Design", "Animations & micro-interactions"],
    color: "#E85D04",
  },
  {
    icon: "smartphone",
    title: "Design & Prototypage",
    description: "Conception de maquettes et prototypes interactifs avec Figma et Canva. Un design centré utilisateur, esthétique et fonctionnel.",
    features: ["Maquettes Figma", "Prototypes interactifs", "Design System", "Style Guide"],
    color: "#E85D04",
  },
  {
    icon: "gitBranch",
    title: "Versionnage & Collaboration",
    description: "Gestion de projet avec Git, GitHub et GitLab. Workflow professionnel avec branches, pull requests et code reviews.",
    features: ["Git Flow", "GitHub / GitLab", "Code Review", "CI/CD basique"],
    color: "#E85D04",
  },
  {
    icon: "shield",
    title: "Authentification & Sécurité",
    description: "Implémentation de systèmes d'authentification sécurisés avec Clerk. Gestion des rôles, sessions et protection des routes.",
    features: ["Clerk Authentication", "Auth Providers (OAuth)", "Gestion des rôles", "Routes protégées"],
    color: "#E85D04",
  },
  {
    icon: "robot",
    title: "Intégration IA & Outils Modernes",
    description: "Intégration d'outils d'intelligence artificielle dans les projets web. Maîtrise des outils IA pour accélérer le développement.",
    features: ["Intégration APIs IA", "Automatisation", "Outils de productivité IA", "Prompt Engineering"],
    color: "#E85D04",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
            Ce que je fais
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Mes Services</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Des solutions frontend complètes pour donner vie à vos projets digitaux, de la conception à la mise en ligne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#111111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#E85D04]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E85D04]/10 text-[#E85D04] mb-5 group-hover:bg-[#E85D04]/20 transition-colors duration-300">
                <Icon name={service.icon} className="text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                    <Icon name="check" className="text-[#E85D04] text-base" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 text-[#E85D04] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap group-hover:underline">
                En savoir plus <Icon name="arrowRight" className="text-base" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
