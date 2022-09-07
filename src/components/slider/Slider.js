import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./slider.css";

export const SliderComp = ({ data }) => {
  const [views, setviews] = useState(2);

  window.addEventListener("resize", () => {
    resize();
  });

  const resize = () => {
    const condition = window.innerWidth < 700;
    if (condition) {
      return views === 1 ? null : setviews(1);
    }
    if (views > 1) setviews(2);
  };

  useEffect(() => {
    resize();
  }, [views]);

  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={views}
        navigation
        pagination={{ clickable: true }}
        className="swiper"
      >
        {data.map((el, i) => {
          const { description, image, name } = el;
          return (
            <SwiperSlide key={i}>
              <div className="swiper__card">
                <img loading="lazy" src={image} alt={image} />
                <h3 className="swiper__name">{name}</h3>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
