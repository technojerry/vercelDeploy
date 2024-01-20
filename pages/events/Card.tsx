

// Card.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import { EventData, useEvent } from "./context/EventContext";

interface CardProps {
    cardEvents: EventData[];
}

const Card: React.FC<CardProps> = ({ cardEvents }) => {
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
                {cardEvents.map((data) => (
                    <SwiperSlide key={data._id} className="register border-purple-500 bg-purple-500">
                        <div className="content my-24 mb-10 relative h-100 rounded-xl bg-white border-sky-500">
                            <div className="overflow-hidden rounded-xl bg-gray-100">
                                <Image alt="Event_image" width={100} height={100} className="position-absolute w-75 sm:w-50 rounded-lg translate-middle top-0 start-50" src={data.image} />
                            </div>
                            <div className="px-3 h-100 py-md-46 rounded-xl py-16 pb-12">
                                <div className="changable flex justify-between px-0">
                                    <div className="users flex justify-start flex-col items-center">
                                        <FaUser size={20} color={"black"} /> 23
                                    </div>
                                    <div className="users flex flex-col justify-content-start align-middle">
                                        <FaStar size={20} color={"orange"} /> 3.5
                                    </div>
                                </div>
                                <div><b>Title:</b> {data.title}</div>
                                <div><b>Venue:</b> {data.venue}</div>
                                <div><b>EventType:</b> {data.eventType}</div>
                                <div><b>Description: </b>{data.description}</div>
                                <div><b>{data.dayOfEvent}</b></div>
                                <div className="register btn btn-primary position-absolute top-100 start-50 translate-middle">
                                    <button onClick={() => handleClick(data)} className="btn text-white">REGISTER</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
};

export default Card;
