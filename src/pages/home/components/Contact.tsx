import { Icon } from "@/components/Icon";
import { useState } from "react";

export default function Contact() {
  const [charCount, setCharCount] = useState(0);

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Contactez-moi</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Un projet en tête ? Une collaboration à envisager ? N&apos;hésitez pas à me contacter, je réponds rapidement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-2/5 space-y-6">
            {([
              {
                icon: "mail",
                title: "Email",
                value: "begotostofil@gmail.com",
                sub: "Réponse sous 24h",
              },
              {
                icon: "whatsapp",
                title: "WhatsApp",
                value: "+237 688 084 974",
                sub: "Disponible en semaine",
              },
              {
                icon: "mapPin",
                title: "Localisation",
                value: "Yaoundé, Cameroun",
                sub: "Disponible en remote",
              },
              {
                icon: "briefcase",
                title: "Disponibilité",
                value: "Freelance / CDI",
                sub: "Ouvert aux opportunités",
              },
            ] as const).map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-[#111111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#E85D04]/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E85D04]/10 text-[#E85D04] flex-shrink-0">
                  <Icon name={item.icon} className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{item.title}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {([
                { icon: "github", href: "https://github.com/begoto24", label: "GitHub" },
                { icon: "linkedin", href: "https://linkedin.com/feed/", label: "LinkedIn" },
                { icon: "gitlab", href: "https://gitlab.com/begoto24", label: "GitLab" },
              ] as const).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200 cursor-pointer"
                >
                  <Icon name={s.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Form - Version simple avec redirection */}
          <div className="flex-1">
            <form
              action="https://formsubmit.co/begotostofil@gmail.com"
              method="POST"
              className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-8"
            >
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nouveau message depuis votre portfolio" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-[#E85D04] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    required
                    placeholder="prénom"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E85D04] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[#E85D04] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    required
                    placeholder="nom de la famille"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E85D04] transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[#E85D04] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="mail@example.com"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E85D04] transition-colors duration-200"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-[#E85D04] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-label="Sujet du message"
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E85D04] transition-colors duration-200 cursor-pointer"
                >
                  <option value="">Choisir un sujet</option>
                  <option value="Projet Freelance">Projet Freelance</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Offre d'emploi">Offre d&apos;emploi</option>
                  <option value="Question technique">Question technique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[#E85D04] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={500}
                  placeholder="Décrivez votre projet ou votre demande..."
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E85D04] transition-colors duration-200 resize-none"
                />
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${charCount > 480 ? "text-[#E85D04]" : "text-gray-400"}`}>
                    {charCount}/500
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E85D04] hover:bg-[#c94d03] text-white font-bold py-3.5 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Icon name="send" className="text-base" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}