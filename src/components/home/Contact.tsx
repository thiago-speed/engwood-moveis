import { CaretRight } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { homeContent } from "../../config/content";
import { siteConfig } from "../../config/site";
import { getAddressLines, getMapsEmbedUrl, getMapsUrl, getPhoneLink, getSocialLinks } from "../../lib/links";
import { buildQuizMessage, getWhatsAppLink } from "../../lib/whatsapp";
import { ButtonLink } from "../ButtonLink";
import { Reveal } from "../Reveal";

type ContactContent = typeof homeContent.contact;

export function Contact({ id, label, title, intro, quiz }: ContactContent) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = quiz.questions;
  const total = questions.length;
  const done = step >= total;
  const current = questions[Math.min(step, total - 1)];
  const selected = answers[current.id];

  const message = useMemo(() => buildQuizMessage(answers, quiz), [answers, quiz]);
  const whatsapp = getWhatsAppLink(message);
  const maps = getMapsUrl();
  const embed = getMapsEmbedUrl();
  const phone = getPhoneLink();
  const socials = getSocialLinks();
  const address = getAddressLines();

  const choose = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: optionId }));
    setStep((prev) => prev + 1);
  };

  return (
    <section className="contact" id={id} aria-label={title}>
      <div className="contact-layout">
        <div className="contact-quiz">
          <Reveal>
            <p className="label">{label}</p>
            <h2 className="display">{done ? quiz.doneTitle : title}</h2>
            <p className="measure">{done ? quiz.doneText : intro}</p>
          </Reveal>

          <div className="contact-progress">
            <span>
              {String(Math.min(step + 1, total)).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="contact-dots" aria-hidden="true">
              {questions.map((question, index) => (
                <i key={question.id} className={index < step || done ? "is-on" : index === step ? "is-now" : undefined} />
              ))}
            </span>
          </div>

          {done ? (
            <div className="contact-recap">
              <ul>
                {questions.map((question) => {
                  const option = question.options.find((item) => item.id === answers[question.id]);
                  if (!option) return null;
                  return (
                    <li key={question.id}>
                      <p className="label">{question.prompt}</p>
                      <p>{option.label}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="contact-quiz-nav">
                <button type="button" onClick={() => setStep(total - 1)}>
                  {quiz.back}
                </button>
                {whatsapp ? (
                  <ButtonLink href={whatsapp} target="_blank" rel="noreferrer">
                    {quiz.submit}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="contact-step" aria-live="polite">
              <p className="contact-prompt">{current.prompt}</p>
              <div className="contact-options">
                {current.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={option.id === selected ? "is-on" : undefined}
                    onClick={() => choose(option.id)}
                  >
                    <span className="contact-option-mark" aria-hidden="true" />
                    {option.label}
                    <CaretRight aria-hidden weight="bold" />
                  </button>
                ))}
              </div>
              {step > 0 ? (
                <div className="contact-quiz-nav">
                  <button type="button" onClick={() => setStep(step - 1)}>
                    {quiz.back}
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>

        <aside className="contact-aside">
          <div className="contact-map">
            <iframe
              title="Mapa da Engwood em Almirante Tamandaré"
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="contact-card">
            <p className="label">Localização e contato</p>
            <p className="contact-place-name">{siteConfig.empresa.nome}</p>
            <address>
              {address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <span>{siteConfig.contato.cep}</span>
            </address>
            <ul className="contact-points">
              <li>
                <p className="label">Google</p>
                <p>
                  {siteConfig.contato.notaGoogle} · {siteConfig.contato.avaliacoesGoogle} avaliações
                </p>
              </li>
              {phone ? (
                <li>
                  <p className="label">Telefone</p>
                  <a href={phone}>{siteConfig.contato.telefone}</a>
                </li>
              ) : null}
              <li>
                <p className="label">Horário</p>
                <p>{siteConfig.contato.horario}</p>
              </li>
              {socials
                .filter((item) => item.id === "instagram")
                .map((item) => (
                  <li key={item.id}>
                    <p className="label">Instagram</p>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
            {maps ? (
              <a className="text-link" href={maps} target="_blank" rel="noreferrer">
                Rotas no Google Maps <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </div>
        </aside>
      </div>
    </section>
  );
}
