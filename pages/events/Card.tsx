import React from "react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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

interface CardProps {
    data: EventData;
}

const Card: React.FC<CardProps> = ({ data }) => {
    // const data = events; // Get the first event from the array

    return (
        <div className='content my-24 mb-10 relative h-100 rounded-xl bg-white border-sky-600 '>
            <div className="overflow-hidden rounded-xl bg-gray-100">
                <Image width="100" height="100" className='position-absolute w-75 sm:w-50 rounded-lg translate-middle top-0 start-50 ' src={data.image} alt="eventImage" />
            </div>
            <div className='px-3 h-100 py-md-46 rounded-xl py-16 pb-12'>
                <div className="changable flex justify-between px-0">
                    <div className="users flex justify-start flex-col items-center">
                        <FaUser size={20} color={"black"} /> 23
                    </div>
                    <div className="users flex flex-col justify-content-start align-middle">
                        <FaStar size={20} color={"orange"} /> 3.5
                    </div>
                </div>
                <div className=''><b>Title:</b> {data.title}</div>
                <div><b>Venue:</b> {data.venue}</div>
                <div><b>EventType:</b> {data.eventType}</div>
                <div><b>Description: </b>{data.description}</div>
                <div><b>{data.eventTiming}</b></div>
                <button className='register btn btn-primary position-absolute top-100 start-50 translate-middle  '>
                    <Link className="btn text-white" href="/fullevent">REGISTER</Link>
                </button>
            </div>
        </div>
    );
};

export default Card;
