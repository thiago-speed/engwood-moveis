import { homeContent } from "../config/content";
import { siteConfig } from "../config/site";

type Quiz = typeof homeContent.contact.quiz;

export function buildQuizMessage(
  answers: Record<string, string>,
  quiz: Quiz,
) {
  const phrases = quiz.questions
    .map((question) => {
      const option = question.options.find((item) => item.id === answers[question.id]);
      return option?.phrase;
    })
    .filter((phrase): phrase is string => Boolean(phrase));

  if (!phrases.length) return siteConfig.contato.mensagemPadrao;

  return `${quiz.greeting}\n\n${phrases.join(" ")}\n\n${quiz.closing}`;
}

export function getWhatsAppLink(message?: string) {
  const phone = siteConfig.contato.whatsapp.replace(/\D/g, "");
  if (!phone) return "";

  const text = encodeURIComponent(
    message?.trim() || siteConfig.contato.mensagemPadrao,
  );
  return `https://wa.me/${phone}?text=${text}`;
}
