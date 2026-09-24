import type { ReactNode } from "react";

export type PlaceholderTone = "night" | "graphite" | "walnut" | "stone";

type PlaceholderProps = {
  label: string;
  tone?: PlaceholderTone;
};

export function Placeholder({ label, tone = "graphite" }: PlaceholderProps) {
  return (
    <div className={`ph is-${tone}`} role="img" aria-label={label}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

type FrameVariant =
  | "hero"
  | "identity"
  | "project"
  | "team"
  | "process"
  | "matter"
  | "detail"
  | "map";

type FrameProps = {
  variant: FrameVariant;
  children: ReactNode;
  className?: string;
};

export function Frame({ variant, children, className }: FrameProps) {
  return <div className={["frame", `frame-${variant}`, className].filter(Boolean).join(" ")}>{children}</div>;
}
