// EventDetails.tsx
import React from 'react';
import Image from 'next/image';
import { EventData } from './context/EventContext';
import Countdown from './Countdown'; // Assuming you have a Countdown component
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { useRouter } from 'next/router'; // Import useRouter

interface EventDetailsProps {
    data: EventData;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
    const router = useRouter(); // Use useRouter to access the router

    // Check if there is an "id" in the URL
    const { id } = router.query;

    // If "id" is present and matches the current event's id, render the detailed view
    if (id && id === data._id) {
        return (
            <>
                <div className='text-black bg-gray-800 w-full h-full'>
                    <div className="relative  w-full h-[60vh] sm:h-full overflow-hidden">
                        <Image height={100} width={100} className="w-full h-full md:h-[89vh] brightness-low" src={data.image} alt="Event_Detail" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" />
                        <div className="absolute sm:top-[17%] sm:left-[4%] top-[5%] left-[2%] transform text-white font-bold brightness-high text-2xl md:text-5xl">
                            <div className="title md:text-5xl text-3xl w-3/4 sm:w-2/4   text-[#ae64f3]">
                                {data.title}
                            </div>
                            <div className="timing flex my-3 w-min flex-col justify-start py-1 sm:flex-row md:text-lg text-sm text-white bg-gray-900 px-5 sm:py-3 rounded-full gap-2 sm:gap-5">
                                <div className="date flex  md:text-lg justify-start gap-2 ">
                                    <FaRegCalendarAlt size={22} /><span className='text-purple-500 font-bold'>Date: </span>  {data.dayOfEvent}
                                </div>
                                <div className="place flex justify-start gap-2 ">
                                    <span><MdLocationOn size={22} /> </span> <span className="text-purple-500 font-bold">Location: </span>
                                    {data.venue}
                                </div>
                            </div>
                            <div className="apply flex items-center gap-3 my-3 ">
                                <div className="tickets border flex justify-center items-center gap-2 border-t-2 border-[#9333EA] hover:bg-gray-900 bg-gray-800 text-white md:text-lg text-sm font-semibold rounded-full cursor-pointer px-4 py-2">
                                    <span><IoTicket size={22} /></span> Tickets
                                </div>
                                <div className="Watch border flex justify-center items-center  md:text-lg text-sm  gap-2 border-t-2 border-[#9333EA] bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full cursor-pointer px-4 py-2 ">
                                    <span>
                                        <MdOutlineSlowMotionVideo size={24} />
                                    </span> Watch Video
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-7 left-1/2 transform brigtness-high text-sm md:bottom-1 -translate-x-1/2 text-white font-bold md:text-lg">
                            <Countdown targetDate={data.dayOfEvent} />
                        </div>
                    </div>
                </div>
                {/* ... (rest of your detailed view code) */}
            </>
        );
    }

    // If no "id" or "id" doesn't match the current event's id, render the summary view
    return (
        <>
            <div className='text-black bg-gray-800 w-full h-full'>
                <div className="relative  w-full h-[60vh] sm:h-full overflow-hidden">
                    <Image height={100} width={100} className="w-full h-full md:h-[89vh] brightness-low" src={data.image} alt="Event_Detail" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" />
                    <div className="absolute sm:top-[17%] sm:left-[4%] top-[5%] left-[2%] transform text-white font-bold brightness-high text-2xl md:text-5xl">
                        <div className="title md:text-5xl text-3xl w-3/4 sm:w-2/4   text-[#ae64f3]">
                            {data.title}
                        </div>
                        <div className="timing flex my-3 w-min flex-col justify-start py-1 sm:flex-row md:text-lg text-sm text-white bg-gray-900 px-5 sm:py-3 rounded-full gap-2 sm:gap-5">
                            <div className="date flex  md:text-lg justify-start gap-2 ">
                                <FaRegCalendarAlt size={22} /><span className='text-purple-500 font-bold'>Date: </span>  {data.dayOfEvent}
                            </div>
                            <div className="place flex justify-start gap-2 ">
                                <span><MdLocationOn size={22} /> </span> <span className="text-purple-500 font-bold">Location: </span>
                                {data.venue}
                            </div>
                        </div>
                        <div className="apply flex items-center gap-3 my-3 ">
                            <div className="tickets border flex justify-center items-center gap-2 border-t-2 border-[#9333EA] hover:bg-gray-900 bg-gray-800 text-white md:text-lg text-sm font-semibold rounded-full cursor-pointer px-4 py-2">
                                <span><IoTicket size={22} /></span> Tickets
                            </div>
                            <div className="Watch border flex justify-center items-center  md:text-lg text-sm  gap-2 border-t-2 border-[#9333EA] bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full cursor-pointer px-4 py-2 ">
                                <span>
                                    <MdOutlineSlowMotionVideo size={24} />
                                </span> Watch Video
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-7 left-1/2 transform brigtness-high text-sm md:bottom-1 -translate-x-1/2 text-white font-bold md:text-lg">
                        <Countdown targetDate={data.dayOfEvent} />
                    </div>
                </div>
            </div>
            {/* ... (rest of your summary view code) */}
        </>
    );
};

export default EventDetails;
