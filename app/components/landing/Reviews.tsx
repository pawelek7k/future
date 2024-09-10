"use client";

import reviewsData from "@/lib/arrays/json/reviews.json";
import Image from "next/legacy/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThirdHeading } from "../global/Heading";

interface ReviewsProps {
  img: string;
  name: string;
  review: string;
}

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 px-20 flex flex-col items-center gap-16 justify-center">
      <h2 className="text-neutral-100 font-semibold text-4xl">Reviews</h2>
      <div className="max-w-[1000px] flex justify-center items-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {reviewsData.reviews.map((review: ReviewsProps, index: number) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-100 rounded-md p-4 flex items-center justify-center flex-col gap-2 shadow-lg shadow-rose-400">
                <div className="relative overflow-hidden rounded-full w-24 h-24">
                  <Image
                    src={review.img}
                    alt={review.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="text-center">
                  <ThirdHeading>{review.name}</ThirdHeading>
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
