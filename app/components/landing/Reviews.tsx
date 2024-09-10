"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 px-12 flex flex-col items-center gap-16 justify-center">
      <h2 className="text-neutral-100 font-semibold text-4xl">Reviews</h2>
      <div className="w-[750px] flex justify-center items-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-neutral-100 w-52 h-32"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-neutral-100 w-52 h-32"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-neutral-100 w-52 h-32"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-neutral-100 w-52 h-32"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
