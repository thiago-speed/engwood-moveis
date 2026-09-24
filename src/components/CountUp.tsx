import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { isMotionEnabled } from "../config/design";

type CountUpProps = {
  to: number;
  prefix?: string;
  duration?: number;
};

const formatBr = (value: number) => new Intl.NumberFormat("pt-BR").format(value);

export function CountUp({ to, prefix = "", duration = 2.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const reduce = useReducedMotion() || !isMotionEnabled();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, reduce, to]);

  return (
    <span ref={ref} className="count-up">
      {prefix}
      {formatBr(value)}
    </span>
  );
}
