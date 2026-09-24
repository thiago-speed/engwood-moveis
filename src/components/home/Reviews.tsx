import { Star } from "@phosphor-icons/react";
import { homeContent } from "../../config/content";
import { Reveal } from "../Reveal";

type ReviewsContent = typeof homeContent.reviews;
type ReviewItem = ReviewsContent["items"][number];

function Stars({ value }: { value: number }) {
  return (
    <p className="reviews-stars" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} weight="fill" aria-hidden className={index < value ? "is-on" : "is-off"} />
      ))}
    </p>
  );
}

function hasText(item: ReviewItem): item is ReviewItem & { text: string } {
  return "text" in item && Boolean(item.text);
}

export function Reviews({ id, label, title, items }: ReviewsContent) {
  const quoted = items.filter(hasText);
  const silent = items.filter((item) => !hasText(item));

  return (
    <section className="reviews" id={id} aria-label={title}>
      <div className="wrap">
        <Reveal className="reviews-head">
          <p className="label">{label}</p>
          <h2 className="display">{title}</h2>
        </Reveal>

        <div className="reviews-quotes">
          {quoted.map((item, index) => (
            <Reveal key={item.name} className="reviews-quote" delay={index * 0.06}>
              <Stars value={item.stars} />
              <blockquote>
                <p>“{item.text}”</p>
              </blockquote>
              <p className="reviews-name">{item.name}</p>
            </Reveal>
          ))}
        </div>

        {silent.length ? (
          <div className="reviews-silent">
            {silent.map((item, index) => (
              <Reveal key={item.name} className="reviews-silent-item" delay={0.08 + index * 0.03}>
                <p className="reviews-name">{item.name}</p>
                <Stars value={item.stars} />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
