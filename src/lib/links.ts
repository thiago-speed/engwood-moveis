import { siteConfig } from "../config/site";

export function getPhoneLink() {
  const digits = siteConfig.contato.telefoneDigitos.replace(/\D/g, "");
  return digits ? `tel:+${digits}` : "";
}

export function getMapsEmbedUrl() {
  return siteConfig.contato.mapsEmbedUrl;
}

export function getMapsUrl() {
  if (siteConfig.contato.mapsUrl) return siteConfig.contato.mapsUrl;

  const query = [
    siteConfig.contato.endereco,
    siteConfig.contato.bairro,
    `${siteConfig.contato.cidade} - ${siteConfig.contato.estado}`,
    siteConfig.contato.cep,
  ]
    .filter(Boolean)
    .join(", ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getAddressLines() {
  const { endereco, bairro, cidade, estado } = siteConfig.contato;
  return [endereco, bairro, `${cidade} - ${estado}`].filter(Boolean);
}

export function getSocialLinks() {
  const redes = siteConfig.redesSociais;
  const items: { id: string; href: string; label: string }[] = [];

  if (redes.instagram) {
    items.push({
      id: "instagram",
      href: redes.instagram,
      label: redes.instagramHandle || "Instagram",
    });
  }
  if (redes.linkedin) {
    items.push({ id: "linkedin", href: redes.linkedin, label: "LinkedIn" });
  }

  return items;
}
