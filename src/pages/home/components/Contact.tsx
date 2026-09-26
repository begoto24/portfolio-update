import { Icon } from "@/components/Icon";
import { useState, type FormEvent } from "react";

const WHATSAPP_URL =
  "https://wa.me/237688084974?text=" +
  encodeURIComponent("Bonjour, je viens de votre portfolio et j'aimerais discuter d'un projet.");

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<Status>("idle");

  // Envoi via Netlify Forms : le formulaire "contact" est aussi déclaré dans index.html
  // pour être détecté au build ; les notifications email se règlent dans Netlify.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setCharCount(0);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Contactez-moi</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
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
                href: "mailto:begotostofil@gmail.com",
              },
              {
                icon: "whatsapp",
                title: "WhatsApp",
                value: "+237 688 084 974",
                sub: "Cliquez pour m'écrire sur WhatsApp",
                href: WHATSAPP_URL,
              },
              {
                icon: "mapPin",
                title: "Localisation",
                value: "Yaoundé, Cameroun",
                sub: "Disponible en remote",
                href: undefined,
              },
              {
                icon: "briefcase",
                title: "Disponibilité",
                value: "Freelance / CDI",
                sub: "Ouvert aux opportunités",
                href: undefined,
              },
            ] as const).map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 bg-[#111111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#E85D04]/40 transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E85D04]/10 text-[#E85D04] flex-shrink-0">
                  <Icon name={item.icon} className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">{item.title}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                  <p className="text-gray-300 text-xs mt-0.5">{item.sub}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {([
                { icon: "github", href: "https://github.com/begoto24", label: "GitHub" },
                { icon: "linkedin", href: "https://www.linkedin.com/in/stofil-begoto-047753345/", label: "LinkedIn" },
                { icon: "gitlab", href: "https://gitlab.com/begoto", label: "GitLab" },
              ] as const).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-300 hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200 cursor-pointer"
                >
                  <Icon name={s.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Form - Netlify Forms */}
          <div className="flex-1">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" />
                </label>
              </p>
              
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
                  <span className={`text-xs ${charCount > 480 ? "text-[#E85D04]" : "text-gray-300"}`}>
                    {charCount}/500
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#E85D04] hover:bg-[#c94d03] disabled:opacity-60 disabled:cursor-wait text-white font-bold py-3.5 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Icon name="send" className="text-base" />
                {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {status === "success" && (
                <p role="status" className="mt-4 text-sm text-green-400 text-center">
                  Merci ! Votre message a bien été envoyé, je vous réponds rapidement.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mt-4 text-sm text-red-400 text-center">
                  L&apos;envoi a échoué. Réessayez ou écrivez-moi directement sur{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline text-[#E85D04]">
                    WhatsApp
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}