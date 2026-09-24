import { homeContent } from "../config/content";
import { defaultNav, siteConfig } from "../config/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-bar">
        <Logo />
        <nav className="footer-nav" aria-label="Rodapé">
          {defaultNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="footer-social"
          href={siteConfig.redesSociais.instagram}
          target="_blank"
          rel="noreferrer"
        >
          {siteConfig.redesSociais.instagramHandle}
        </a>
      </div>
      <p className="footer-note">
        © {new Date().getFullYear()} {siteConfig.empresa.nome}. {homeContent.footer.disclaimer}
      </p>
    </footer>
  );
}
