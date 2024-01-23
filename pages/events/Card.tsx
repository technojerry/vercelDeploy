// Card.tsx
"client"
import React from "react";
import Image from "next/image";
import { FaUser, FaStar } from "react-icons/fa";
import { useRouter } from "next/router";
import { EventData } from "./context/EventContext";

interface CardProps {
    eventData: EventData;
}

const Card: React.FC<CardProps> = ({ eventData }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/events/${eventData._id}`);
    };

    return (
        <div className="register border-purple-500 bg-purple-500">
            <div className="content my-24 mb-10 relative h-100 rounded-xl bg-white border-sky-500">
                <div className="overflow-hidden rounded-xl bg-gray-100">
                    {eventData.image ? (
                        <Image
                            alt="Event_image"
                            width={100}
                            height={100}
                            className="position-absolute w-75 sm:w-50 rounded-lg translate-middle top-0 start-50"
                            src={eventData.image}
                        />
                    ) : (
                        <div className="image-placeholder"></div>
                    )}
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
                    <div><b>Title:</b> {eventData.title}</div>
                    <div><b>Venue:</b> {eventData.venue}</div>
                    <div><b>EventType:</b> {eventData.eventType}</div>
                    <div><b>Description: </b>{eventData.description}</div>
                    <div><b>{eventData.dayOfEvent}</b></div>
                    <div className="register btn btn-primary position-absolute top-100 start-50 translate-middle">
                        <button onClick={handleClick} className="btn text-white">REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
