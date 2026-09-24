import type { ReactNode } from "react";
import { Grain } from "./Grain";
import { Seo } from "./Seo";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SmoothScroll } from "./SmoothScroll";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Seo />
      <a className="skip" href="#topo">
        Ir para o conteúdo
      </a>
      <Grain />
      <SiteHeader />
      <main id="topo">{children}</main>
      <SiteFooter />
    </SmoothScroll>
  );
}
