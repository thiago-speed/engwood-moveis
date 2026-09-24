import { useEffect, useRef } from "react";
import { homeContent } from "../../config/content";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";

type MatterContent = typeof homeContent.matter;

const SPEED = 5;
const EDGE = 200;
const IDLE_MS = 4000;

export function Matter({ id, label, title, items }: MatterContent) {
  const viewRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const view = viewRef.current;
    const rail = railRef.current;
    if (!view || !rail) return;

    let raf = 0;
    let last = 0;
    let dir = 1;
    let offset = view.scrollLeft;
    let paused = false;
    let idleTimer = 0;

    const maxScroll = () => Math.max(0, rail.scrollWidth - view.clientWidth);

    const paint = (value: number) => {
      const max = maxScroll();
      offset = Math.min(max, Math.max(0, value));
      rail.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const toScroll = () => {
      rail.style.transform = "";
      view.classList.remove("is-drifting");
      view.scrollLeft = offset;
    };

    const toDrift = () => {
      offset = view.scrollLeft;
      view.scrollLeft = 0;
      view.classList.add("is-drifting");
      paint(offset);
    };

    const pause = () => {
      if (paused) {
        offset = view.classList.contains("is-drifting") ? offset : view.scrollLeft;
      } else if (view.classList.contains("is-drifting")) {
        toScroll();
      } else {
        offset = view.scrollLeft;
      }
      paused = true;
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        paused = false;
        last = 0;
      }, IDLE_MS);
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (paused) {
        last = now;
        return;
      }

      const max = maxScroll();
      if (max < 12) {
        last = now;
        if (view.classList.contains("is-drifting")) toScroll();
        return;
      }

      const rect = view.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
        last = now;
        return;
      }

      if (!view.classList.contains("is-drifting")) toDrift();
      if (!last) last = now;
      const dt = Math.min(50, now - last);
      last = now;

      const room = dir > 0 ? max - offset : offset;
      const ease = room < EDGE ? Math.max(0.22, room / EDGE) : 1;
      paint(offset + dir * SPEED * ease * (dt / 1000));

      if (offset >= max) dir = -1;
      else if (offset <= 0) dir = 1;
    };

    raf = requestAnimationFrame(tick);
    view.addEventListener("pointerdown", pause);
    view.addEventListener("touchstart", pause, { passive: true });
    view.addEventListener("wheel", pause, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
      rail.style.transform = "";
      view.classList.remove("is-drifting");
      view.removeEventListener("pointerdown", pause);
      view.removeEventListener("touchstart", pause);
      view.removeEventListener("wheel", pause);
    };
  }, []);

  return (
    <section className="matter band-stone" id={id}>
      <div className="matter-head wrap">
        <Reveal>
          <p className="label">{label}</p>
          <h2 className="display">{title}</h2>
        </Reveal>
      </div>
      <div ref={viewRef} className="matter-trio">
        <div className="matter-rail" ref={railRef}>
          {items.map((item, index) => (
            <Reveal key={item.title} className="matter-item" delay={index * 0.06} from="zoom">
              <div className="matter-shot">
                <Photo {...item.image} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
