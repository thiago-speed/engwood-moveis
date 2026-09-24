import { siteConfig } from "../config/site";

export function Logo() {
  return (
    <a className="brand" href="#topo" aria-label={siteConfig.empresa.nome}>
      <img className="brand-on-dark" src={siteConfig.empresa.logoClaro} alt="" width={640} height={140} />
      <img className="brand-on-light" src={siteConfig.empresa.logo} alt="" width={640} height={140} />
    </a>
  );
}
