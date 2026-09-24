import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { useEffect, useId, useState } from "react";
import { defaultNav } from "../config/site";
import { isMotionEnabled } from "../config/design";
import { getContactHref, getContactLabel } from "../lib/cta";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion() || !isMotionEnabled();
  const titleId = useId();
  const lenis = useLenis();
  const contactHref = getContactHref();
  const solid = scrolled || open;

  useLenis((instance) => {
    setScrolled(instance.scroll > 48);
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className={open ? "site-header is-menu" : solid ? "site-header is-solid" : "site-header"}
        initial={reduce ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-header-inner">
          <Logo />

          <nav className="nav-desktop" aria-label="Principal">
            {defaultNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-end">
            {contactHref ? (
              <a className="header-cta" href={contactHref} target="_blank" rel="noreferrer">
                {getContactLabel()}
              </a>
            ) : null}

            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <span className="menu-toggle-bars" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            data-lenis-prevent
            aria-labelledby={titleId}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          >
            <p id={titleId} className="sr-only">
              Menu
            </p>
            {defaultNav.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={close}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + index * 0.06,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                {item.label}
              </motion.a>
            ))}
            {contactHref ? (
              <ButtonLink href={contactHref} target="_blank" rel="noreferrer" onClick={close}>
                {getContactLabel()}
              </ButtonLink>
            ) : null}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
