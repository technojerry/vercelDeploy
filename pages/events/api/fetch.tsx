// components/FetchEvent.tsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import Card from '../Card';
import { useAPI } from '../context/MyContext';
import { APIProvider } from '../context/MyContext';
import eventData from '../api/Events.postman_collection.json';

interface EventData {
  _id: string;
  eventType: string;
  link: string;
  venue: string;
  title: string;
  description: string;
  dayOfEvent: string;
  image: string;
  eventTiming: string;
  lastDateToRegister: string;
  fees: string;
}


const FetchEvent: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = eventData.item[1]?.response;
        if (!response) {
          throw new Error('Invalid response format');
        }

        const newEvents = Array.isArray(response)
          ? response.map((index) => {
            const parsedData = JSON.parse(index.body);
            return parsedData?.data?.documents;
          })
          : [];


        if (newEvents) {
          setEvents(newEvents.flat());
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        // You can display a user-friendly error message or take alternative action here
      }
    };

    fetchData();
  }, []);

  return (
    <>
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
        <div className="justify-center h-100 mt-5 bg-purple-100">
          {events.map((data) => (
            <SwiperSlide key={data._id} className="register border-purple-100 bg-purple-100 h-100">
              <Card data={data} />
            </SwiperSlide>
          ))}

        </div>
      </Swiper>
    </>
  );
};

export default FetchEvent;
