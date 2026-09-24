import type { NavItem } from "./types.ts";

export const siteConfig = {
  empresa: {
    nome: "Engwood Móveis de Alto Padrão",
    nomeCurto: "Engwood",
    slogan: "Móveis de alto padrão",
    descricao:
      "Móveis sob medida de alto padrão para arquitetura, interiores e decorados em Curitiba e Região Metropolitana.",
    logo: "/images/branding/logo-dark.png",
    logoClaro: "/images/branding/logo-light.png",
    logoMonograma: "/images/branding/logo-monograma.png",
    logoMonogramaHero: "/images/branding/ew-logo.png",
    favicon: "/favicon.svg",
  },

  contato: {
    telefone: "(41) 98468-9197",
    telefoneDigitos: "5541984689197",
    whatsapp: "5541984689197",
    email: "",
    endereco: "Rua Comendador Antônio Barros, 12",
    bairro: "Bonfim",
    cidade: "Almirante Tamandaré",
    estado: "PR",
    cep: "83507-010",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ENGWOOD+M%C3%93VEIS+DE+ALTO+PADR%C3%83O,+R.+Comendador+Ant%C3%B4nio+Barros,+12+-+Bonfim,+Alm.+Tamandar%C3%A9+-+PR,+83507-010",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=-25.3426419,-49.2852846&hl=pt-BR&z=17&output=embed",
    horario: "A partir das 08:00",
    notaGoogle: "4,8",
    avaliacoesGoogle: 11,
    mensagemPadrao:
      "Olá! Vi o site da Engwood e gostaria de conversar sobre um projeto de móveis de alto padrão.",
  },

  redesSociais: {
    instagram: "https://www.instagram.com/engwood_moveis/",
    instagramHandle: "@engwood_moveis",
    facebook: "",
    linkedin: "https://www.linkedin.com/company/engwood",
    pinterest: "",
  },

  seo: {
    titulo: "Engwood | Móveis de alto padrão em Curitiba",
    descricao:
      "Marcenaria sob medida de alto padrão para arquitetura, interiores e decorados. Alma, técnica e design. Almirante Tamandaré, RMC.",
    keywords: [
      "Engwood",
      "móveis de alto padrão",
      "marcenaria Curitiba",
      "móveis sob medida",
      "Almirante Tamandaré",
    ],
    canonical: "",
    robots: "noindex, nofollow",
    imagemCompartilhamento: "/images/hero.jpg",
    locale: "pt_BR",
  },
} as const;

export const defaultNav: NavItem[] = [
  { label: "A Engwood", href: "#engwood" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];
