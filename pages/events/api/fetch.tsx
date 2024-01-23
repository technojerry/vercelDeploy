// Fetch.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaUser, FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import { EventData, useEvent } from "../context/EventContext";
import Card from "../Card";

const Fetch: React.FC = () => {
  const { events } = useEvent();
  const router = useRouter();

  const handleClick = (data: EventData) => {
    router.push(`/events/${data._id}`);
  };

  return (
    <Swiper
      navigation={true}
      spaceBetween={30}
      height={200}
      modules={[Navigation]}
      loop={false}
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        379: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        457: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        810: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        1320: {
          spaceBetween: 15,
          slidesPerView: 4,
        },
        1725: {
          spaceBetween: 30,
          slidesPerView: 5,
        },
        2236: {
          spaceBetween: 45,
          slidesPerView: 6,
        },
      }}
      className="mySwiper pb-3 pt-4 h-auto"
    >
      <div className="justify-center h-100 mt-5 bg-purple-500">
        {events.map((data) => (
          <SwiperSlide key={data._id}>
            <Card eventData={data} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Fetch;
