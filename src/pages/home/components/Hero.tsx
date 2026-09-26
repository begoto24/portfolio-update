
import { Icon } from "@/components/Icon";

const WHATSAPP_URL =
  "https://wa.me/237688084974?text=" +
  encodeURIComponent("Bonjour, je viens de votre portfolio et j'aimerais discuter d'un projet.");

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0a] flex items-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <p className="text-[#E85D04] font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-in">
              Bonjour, je suis Begoto
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Développeur{" "}
              <span className="text-[#E85D04]">Frontend</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              Passionné de programmation et design, je crée des interfaces intuitives
              et esthétiques. Chaque projet vise une expérience utilisateur fluide et une
              performance optimale, du prototype à la mise en ligne. Bienvenue dans
              mon univers où chaque pixel et chaque ligne de code ont leur importance.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E85D04] hover:bg-[#c94d03] text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <Icon name="whatsapp" className="text-lg" />
                Contactez moi
              </a>
              <button
                onClick={() => scrollTo("#competences")}
                className="flex items-center gap-2 border border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <Icon name="arrowDown" className="text-lg" />
                Voir mes compétences
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {([
                { icon: "github", href: "https://github.com/begoto24", label: "GitHub" },
                { icon: "linkedin", href: "https://www.linkedin.com/in/stofil-begoto-047753345/", label: "LinkedIn" },
                { icon: "gitlab", href: "https://gitlab.com/begoto", label: "GitLab" },
              ] as const).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-300 hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200 cursor-pointer"
                >
                  <Icon name={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#E85D04]/30 scale-110 animate-pulse-slow"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#2a2a2a] relative z-10">
                <img
                  src="/assets/images/profil.w800.webp"
                  alt="Begoto, développeur frontend à Yaoundé"
                  className="w-full h-full object-cover object-top"
                  width={384}
                  height={384}
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#C54B03] text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 whitespace-nowrap">
                &lt;Dev /&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#1e1e1e]">
          {[
            { value: "1+", label: "Années d'expérience" },
            { value: "12+", label: "Projets réalisés" },
            { value: "10+", label: "Technologies maîtrisées" },
            { value: "100%", label: "Satisfaction client" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#E85D04]">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
