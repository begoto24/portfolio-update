import { Icon } from "@/components/Icon";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Compétences", href: "#competences" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#portfolio" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Le lien actif suit la section visible à l'écran
      const offset = window.scrollY + window.innerHeight / 3;
      let current = "#home";
      for (const { href } of navLinks) {
        const el = document.querySelector<HTMLElement>(href);
        if (el && el.offsetTop <= offset) current = href;
      }
      setActiveHref(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3 cursor-pointer"
          aria-label="BegotoDev - retour en haut de page"
        >
          <span className="w-10 h-10 rounded-lg bg-[#E85D04] flex items-center justify-center text-white font-extrabold text-lg">
            B
          </span>
          <span className="text-white font-extrabold text-xl tracking-tight">
            Begoto<span className="text-[#E85D04]">Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = activeHref === link.href;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-[15px] font-medium rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    active ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-[#E85D04] transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="/cv-begoto.pdf"
          download="CV-BegotoDev-Developpeur-Frontend.pdf"
          className="hidden lg:flex items-center gap-2 bg-[#E85D04] hover:bg-[#c94d03] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors duration-200 whitespace-nowrap"
        >
          <Icon name="download" className="text-base" />
          Mon CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white w-11 h-11 flex items-center justify-center rounded-md border border-white/10 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left py-3.5 text-base font-medium border-b border-white/5 cursor-pointer ${
                activeHref === link.href ? "text-[#E85D04]" : "text-gray-300"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/cv-begoto.pdf"
            download="CV-BegotoDev-Developpeur-Frontend.pdf"
            className="mt-5 flex items-center justify-center gap-2 bg-[#E85D04] text-white font-semibold py-3 rounded-md"
          >
            <Icon name="download" className="text-base" />
            Télécharger mon CV
          </a>
        </div>
      )}
    </nav>
  );
}
