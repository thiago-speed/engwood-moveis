import { siteConfig } from "../config/site";

export function getJsonLd() {
  const { empresa, seo, redesSociais, contato } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: empresa.nome,
    description: seo.descricao,
    image: seo.imagemCompartilhamento,
    telephone: contato.telefone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contato.endereco,
      addressLocality: contato.cidade,
      addressRegion: contato.estado,
      postalCode: contato.cep,
      addressCountry: "BR",
    },
    sameAs: [redesSociais.instagram, redesSociais.linkedin].filter(Boolean),
  };
}
