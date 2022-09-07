import React from "react";
import { normaliceText } from "../../helpers/normaliceText";
import "./highlights.css";

export const Highlights = ({ data }) => {
  return (
    <section className="highlights">
      {data.map(({ title, content, image }, i) => {
        const par = i % 2 == 0;

        return (
          <div
            key={i}
            className={`highlights__content ${!par ? " row_reverse" : ""}`}
          >
            <article className="highlights__content-info">
              <h3 className="highlights__h3">{title}</h3>
              <p className="highlights__p"> {normaliceText(content)}</p>
            </article>
            <img src={image} alt={title} className="highlights__img" />
          </div>
        );
      })}
    </section>
  );
};
