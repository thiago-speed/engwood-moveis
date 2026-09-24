import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { CountUp } from "../components/CountUp";
import { Contact } from "../components/home/Contact";
import { Matter } from "../components/home/Matter";
import { Process } from "../components/home/Process";
import { Reviews } from "../components/home/Reviews";
import { Frame } from "../components/Placeholder";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { homeContent } from "../config/content";
import { isMotionEnabled } from "../config/design";
import { siteConfig } from "../config/site";
import { getContactHref, getContactLabel } from "../lib/cta";
import { getWhatsAppLink } from "../lib/whatsapp";

export function HomePage() {
  const { hero, identity, projects, team, process, matter, reviews, contact } = homeContent;

  return (
    <>
      <Hero />

      <section className="identity band-paper section" id={identity.id}>
        <div className="wrap identity-grid">
          <Reveal className="identity-media" from="zoom">
            <Frame variant="identity">
              <Photo {...identity.image} />
              <p className="identity-caption">{identity.caption}</p>
            </Frame>
          </Reveal>
          <div className="identity-copy">
            <Reveal className="identity-head">
              <p className="label">{identity.label}</p>
              <h2 className="display">{identity.title}</h2>
            </Reveal>
            <Reveal className="identity-note" delay={0.08}>
              <blockquote>
                <p>“{identity.quote}”</p>
                <footer>{identity.quoteAuthor}</footer>
              </blockquote>
              <p className="since">{identity.since}</p>
              <ul className="facts">
                {identity.facts.map((fact) => (
                  <li key={fact.label}>
                    <strong>
                      <CountUp to={fact.value} prefix={fact.prefix} />
                    </strong>
                    {fact.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="projects band-stone" id={projects.id}>
        <div className="projects-intro">
          <Reveal>
            <p className="label">{projects.label}</p>
            <h2 className="display">{projects.title}</h2>
          </Reveal>
        </div>
        <div className="projects-mosaic">
          {projects.items.map((project, index) => {
            const href = getWhatsAppLink(
              `Olá! Vi o projeto ${project.title} no preview da Engwood e gostaria de conversar.`,
            );
            const variant = [
              "project",
              index % 2 === 1 ? "is-flip" : "",
              project.images.length > 1 ? "is-mosaic" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <article key={project.index} className={variant}>
                <Reveal className="project-media" from="zoom">
                  {project.images.map((image) => (
                    <div className="project-shot" key={image.src}>
                      <Photo {...image} />
                    </div>
                  ))}
                </Reveal>
                <div className="project-copy">
                  <Reveal delay={0.06}>
                    <div className="project-kicker">
                      <span className="project-index">{project.index}</span>
                      <span className="label">{project.kind}</span>
                    </div>
                    <h3 className="display">{project.title}</h3>
                    <p className="meta">{project.meta}</p>
                    {href ? (
                      <a className="text-link" href={href} target="_blank" rel="noreferrer">
                        Ver projeto <span aria-hidden="true">→</span>
                      </a>
                    ) : null}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="team band-dark" id={team.id}>
        <div className="team-layout">
          <div className="team-media">
            <Photo {...team.image} />
          </div>
          <div className="team-copy">
            <Reveal>
              <p className="label">{team.label}</p>
              <h2 className="display">{team.title}</h2>
              <p className="measure">{team.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <Process {...process} />

      <Matter {...matter} />

      <Reviews {...reviews} />

      <Contact {...contact} />
    </>
  );
}

function Hero() {
  const { hero } = homeContent;
  const contactHref = getContactHref();
  const reduce = useReducedMotion() || !isMotionEnabled();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section className="hero" aria-label="Abertura" ref={ref}>
      <div className="frame frame-hero">
        <motion.div className="hero-zoom" style={reduce ? undefined : { y }}>
          <Photo {...hero.image} priority />
        </motion.div>
      </div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <div className="hero-lead">
          <div className="hero-mark-wrap">
            <img
              className="hero-mark"
              src={siteConfig.empresa.logoMonogramaHero}
              alt=""
              width={1386}
              height={622}
            />
          </div>
          <h1 className="display">{hero.title}</h1>
        </div>
        <p className="measure">{hero.subtext}</p>
        {contactHref ? (
          <ButtonLink href={contactHref} target="_blank" rel="noreferrer">
            {getContactLabel()}
          </ButtonLink>
        ) : null}
        <p className="hero-meta">
          {hero.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
      <a className="scroll-hint" href={`#${homeContent.identity.id}`}>
        <span className="sr-only">Continuar</span>
        Rolar
        <span className="scroll-hint-line" aria-hidden="true" />
      </a>
    </section>
  );
}
