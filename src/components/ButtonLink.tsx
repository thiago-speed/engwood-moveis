import type { MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "line";
  className?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  const cls = ["btn", variant === "line" ? "is-line" : "is-solid", className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={cls} href={href} target={target} rel={rel} onClick={onClick}>
      {children}
    </a>
  );
}
