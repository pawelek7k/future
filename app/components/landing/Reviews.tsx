"use client";

import reviewsData from "@/lib/arrays/json/reviews.json";
import Image from "next/legacy/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ReviewsProps {
  img: string;
  name: string;
  review: string;
}

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
          {reviewsData.reviews.map((review: ReviewsProps, index: number) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-100 w-52 h-32">
                <div>
                  <Image src={review.img} alt={review.name} layout="fill" />
                </div>
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
