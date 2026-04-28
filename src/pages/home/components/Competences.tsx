import { Icon } from "@/components/Icon";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "code",
    skills: [
      { name: "React.js", level: 92, icon: "react" },
      { name: "Next.js", level: 88, icon: "layout" },
      { name: "TypeScript", level: 85, icon: "fileCode" },
      { name: "JavaScript", level: 90, icon: "javascript" },
    ] as const,
  },
  {
    category: "Styling & UI",
    icon: "brush",
    skills: [
      { name: "TailwindCSS", level: 95, icon: "brush" },
      { name: "Bootstrap", level: 85, icon: "layout" },
      { name: "CSS / HTML", level: 95, icon: "html5" },
      { name: "Ant Design", level: 80, icon: "apps" },
    ],
  },
  {
    category: "UI Libraries & Design",
    icon: "brush",
    skills: [
      { name: "Shadcn/UI", level: 82, icon: "layers" },
      { name: "DaisyUI", level: 78, icon: "brush" },
      { name: "Figma", level: 85, icon: "paintbrush" },
      { name: "Canva", level: 88, icon: "image" },
    ] as const,
  },
  {
    category: "Outils & Versionnage",
    icon: "gitBranch",
    skills: [
      { name: "Git", level: 90, icon: "gitBranch" },
      { name: "GitHub / GitLab", level: 88, icon: "github" },
      { name: "Clerk (Auth)", level: 80, icon: "shield" },
      { name: "IA Tools", level: 85, icon: "robot" },
    ] as const,
  },
] as const;


function SkillBar({ level, animated }: { level: number; animated: boolean }) {
  return (
    <div className="w-full bg-[#1e1e1e] rounded-full h-2 mt-2">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-[#E85D04] to-[#f4a25d] transition-all duration-1000 ease-out"
        style={{ width: animated ? `${level}%` : "0%" }}
      ></div>
    </div>
  );
}

export default function Competences() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="competences" className="bg-[#0f0f0f] py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
            Mes Compétences
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-3">
            Stack Technique
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Des technologies frontend modernes aux outils de design, voici mon arsenal pour créer des interfaces performantes et esthétiques.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#E85D04]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E85D04]/10 text-[#E85D04]">
                  <Icon name={cat.icon} className="text-xl" />
                </div>
                <h3 className="text-white font-semibold text-base">{cat.category}</h3>
              </div>

              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Icon name={skill.icon} className="text-[#E85D04] text-sm" />
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[#E85D04] text-xs font-bold">{skill.level}%</span>
                    </div>
                    <SkillBar level={skill.level} animated={animated} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Également à l&apos;aise avec :</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Java", "REST API", "Responsive Design", "Accessibilité Web", "SEO", "Performance Web", "Atomic Design", "Component Library"].map((tag) => (
              <span
                key={tag}
                className="border border-[#2a2a2a] text-gray-300 text-xs px-4 py-1.5 rounded-full hover:border-[#E85D04] hover:text-[#E85D04] transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
