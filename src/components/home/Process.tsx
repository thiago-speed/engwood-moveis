import { homeContent } from "../../config/content";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";

type ProcessContent = typeof homeContent.process;

export function Process({ id, label, title, image, steps }: ProcessContent) {
  return (
    <section className="process band-paper" id={id}>
      <div className="process-layout">
        <div className="process-copy">
          <Reveal>
            <p className="label">{label}</p>
            <h2 className="display">{title}</h2>
          </Reveal>
          <ol className="process-steps">
            {steps.map((step) => (
              <li key={step.index} className="process-step">
                <span className="process-index">{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="process-media">
          <Photo {...image} />
        </div>
      </div>
    </section>
  );
}
