import type { MediaImage } from "./types";

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
  objectPosition?: string,
): MediaImage => ({ src, alt, width, height, objectPosition });

export const homeContent = {
  hero: {
    title: "Móveis de alto padrão",
    subtext: "Móveis sob medida para arquitetura e interiores em Curitiba.",
    meta: ["Lounge GT Building", "CASACOR Paraná", "Mostra"],
    image: img(
      "/images/hero.jpg",
      "Lounge GT Building com marcenaria em madeira escura, sofá verde e poltronas de couro.",
      1049,
      700,
      "28% 48%",
    ),
  },

  identity: {
    id: "engwood",
    label: "A Engwood",
    title: "Engenharia e marcenaria na mesma casa.",
    quote:
      "Entregamos experiências, conforto e a certeza de que cada projeto carrega um pouco da nossa alma.",
    quoteAuthor: "Marlon Charneski",
    caption: "Marlon Charneski e Alexandre Mello",
    since: "Desde agosto de 2021",
    facts: [
      { value: 1100, prefix: "+", label: "projetos" },
      { value: 300, prefix: "", label: "clientes" },
      { value: 6, prefix: "", label: "estados" },
    ],
    image: img(
      "/images/founders.jpg",
      "Marlon Charneski e Alexandre Mello.",
      1428,
      1251,
      "center 22%",
    ),
  },

  projects: {
    id: "projetos",
    label: "Seleção",
    title: "Projetos selecionados",
    items: [
      {
        index: "01",
        kind: "Residencial",
        title: "Fluido e acolhedor",
        meta: "BST Arquitetura · TOPVIEW 2025",
        images: [
          img(
            "/images/project-01.png",
            "Living com forro de madeira, painel de terrazzo e rack baixo no apartamento NOAR.",
            1180,
            782,
          ),
        ],
      },
      {
        index: "02",
        kind: "Residencial",
        title: "Residencial em carvalho",
        meta: "Curitiba e região",
        images: [
          img(
            "/images/project-02.jpg",
            "Living e jantar com volume de madeira, adega e bancada iluminada.",
            1660,
            2254,
            "center 42%",
          ),
        ],
      },
      {
        index: "03",
        kind: "Mostra",
        title: "CASACOR Paraná",
        meta: "Arquitetare e Carol Bastos",
        images: [
          img(
            "/images/project-03.jpg",
            "Sala com painel de madeira, mármore e cristaleira sob medida.",
            1050,
            700,
          ),
        ],
      },
      {
        index: "04",
        kind: "Corporativo",
        title: "Madeira e luz",
        meta: "Portais, vidro e vegetação",
        images: [
          img(
            "/images/project-04.png",
            "Lounge com portais de madeira, vidro e plantas.",
            941,
            1672,
            "32% 78%",
          ),
          img(
            "/images/project-04b.png",
            "Lounge com volume de madeira, vitrine de vidro e móvel ripado.",
            954,
            1648,
            "center 40%",
          ),
          img(
            "/images/project-04c.png",
            "Recepção corporativa em madeira, mármore e marcenaria sob medida.",
            939,
            1675,
            "center 38%",
          ),
        ],
      },
    ],
  },

  team: {
    id: "equipe",
    label: "Nossa equipe",
    title: "Pessoas que entendem cada detalhe.",
    body: "Residências, decorados e mostras passam pela mesma casa.",
    image: img(
      "/images/team.jpg",
      "Equipe Engwood reunida na sede, em Almirante Tamandaré.",
      2048,
      1152,
      "center 30%",
    ),
  },

  process: {
    id: "processo",
    label: "Método",
    title: "Do projeto à entrega",
    image: img(
      "/images/process.jpg",
      "Suíte com painel de madeira, vitrine de vidro e marcenaria sob medida.",
      1920,
      2560,
      "center 35%",
    ),
    steps: [
      {
        index: "01",
        title: "Leitura",
        text: "O desenho do arquiteto define medida, encontro e material.",
      },
      {
        index: "02",
        title: "Detalhamento",
        text: "A engenharia de produção organiza o projeto para a fábrica.",
      },
      {
        index: "03",
        title: "Produção",
        text: "Fabricação própria em Almirante Tamandaré, com acabamento à mão.",
      },
      {
        index: "04",
        title: "Instalação",
        text: "O móvel termina quando o ambiente está pronto.",
      },
    ],
  },

  matter: {
    id: "materia",
    label: "Detalhe",
    title: "Matéria e acabamento",
    items: [
      {
        title: "Matéria",
        text: "Madeira, pedra e vidro escolhidos para o encontro.",
        image: img(
          "/images/matter-main.png",
          "Painel ripado em madeira clara com prateleiras e iluminação embutida.",
          974,
          1615,
          "center 35%",
        ),
      },
      {
        title: "Acabamento",
        text: "Luz, junta e superfície resolvidas à mão.",
        image: img(
          "/images/matter-02.png",
          "Detalhe de persiana e perfil de LED no encontro do móvel.",
          1679,
          937,
          "center 40%",
        ),
      },
      {
        title: "Precisão",
        text: "A medida do desenho chega intacta na instalação.",
        image: img(
          "/images/matter-01.png",
          "Detalhe da ilha em terrazzo e marcenaria clara.",
          524,
          663,
          "center 55%",
        ),
      },
    ],
  },

  reviews: {
    id: "avaliacoes",
    label: "Fonte: Google",
    title: "Avaliações dos nossos clientes",
    items: [
      {
        name: "Leonardo Czuika",
        stars: 5,
        text: "Atendimento impecavel e os móveis que produzem são incríveis!",
      },
      {
        name: "Tiago Nunes",
        stars: 5,
        text: "Atendimento top, proprietário Marlon tem mais 20 de experiência, empresa com produtos de ponta, alto padrão!!!",
      },
      {
        name: "Simone Niquele",
        stars: 5,
        text: "Móveis de alto padrão",
      },
      { name: "Rosana Mocelin", stars: 5 },
      { name: "Nahayana Alessi", stars: 5 },
      { name: "Eder Omena", stars: 5 },
      { name: "Jô Alves", stars: 5 },
      { name: "Renato Keller", stars: 5 },
      { name: "Jhonatan8", stars: 5 },
      { name: "Ismael Oliveira Junior", stars: 5 },
    ],
  },

  contact: {
    id: "contato",
    label: "Conversa",
    title: "Conte um pouco do projeto.",
    intro: "Quatro respostas rápidas.",
    quiz: {
      back: "Voltar",
      submit: "Entre em contato",
      doneTitle: "Pronto para conversar.",
      doneText: "A Engwood recebe o que você respondeu.",
      greeting: "Olá! Vim pelo site da Engwood.",
      closing: "Gostaria de conversar sobre a execução dos móveis.",
      questions: [
        {
          id: "perfil",
          prompt: "Com quem estamos falando?",
          options: [
            {
              id: "arquiteto",
              label: "Arquiteto ou designer",
              phrase: "Sou arquiteto ou designer.",
            },
            {
              id: "construtora",
              label: "Construtora",
              phrase: "Falo em nome de uma construtora.",
            },
            {
              id: "cliente",
              label: "Cliente particular",
              phrase: "Sou cliente particular.",
            },
          ],
        },
        {
          id: "tipo",
          prompt: "Qual o tipo de projeto?",
          options: [
            {
              id: "residencial",
              label: "Residencial",
              phrase: "O projeto é residencial.",
            },
            {
              id: "decorado",
              label: "Decorado ou área social",
              phrase: "O projeto é um decorado ou área social.",
            },
            {
              id: "corporativo",
              label: "Corporativo",
              phrase: "O projeto é corporativo.",
            },
            {
              id: "completo",
              label: "Projeto completo",
              phrase: "É um projeto completo, com vários ambientes.",
            },
          ],
        },
        {
          id: "etapa",
          prompt: "Em que etapa está?",
          options: [
            {
              id: "conversa",
              label: "Quero começar a conversar",
              phrase: "Ainda estamos no começo.",
            },
            {
              id: "projeto",
              label: "Já tenho projeto",
              phrase: "Já temos projeto em mãos.",
            },
            {
              id: "obra",
              label: "Obra em andamento",
              phrase: "A obra já está em andamento.",
            },
          ],
        },
        {
          id: "local",
          prompt: "Onde fica a obra?",
          options: [
            {
              id: "curitiba",
              label: "Curitiba",
              phrase: "A obra fica em Curitiba.",
            },
            {
              id: "rmc",
              label: "Região Metropolitana",
              phrase: "A obra fica na Região Metropolitana.",
            },
            {
              id: "outro",
              label: "Outro estado",
              phrase: "A obra fica fora da RMC.",
            },
          ],
        },
      ],
    },
  },

  footer: {
    disclaimer:
      "Preview comercial. Fotografias de projetos em que a Engwood executou a marcenaria.",
  },
} as const;
