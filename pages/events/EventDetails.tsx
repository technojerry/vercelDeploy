import React from 'react';
import Image from 'next/image';
import { EventData } from './context/EventContext';
import Countdown from './Countdown'; // Assuming you have a Countdown component
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoTicket } from "react-icons/io5";

interface EventDetailsProps {
    data: EventData;
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
    return (
        <>
            <div className='text-black bg-gray-800 w-full h-full'>
                <div className="relative  w-full h-[60vh] sm:h-full overflow-hidden">
                    <Image height={100} width={100} className="w-full h-full md:h-[89vh] brightness-low" src={data.image} alt="Event_Detail" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70" />
                    <div className="absolute sm:top-[17%] sm:left-[4%] top-[5%] left-[2%] transform text-white font-bold brightness-high text-2xl md:text-5xl">
                        <div className="title md:text-5xl text-3xl w-3/4 sm:w-2/4   text-[#ae64f3]">
                            AI GETTING MORE DANGEROUS @Bitshala.in
                        </div>
                        <div className="timing flex my-3 w-min flex-col justify-start py-1 sm:flex-row md:text-lg text-sm text-white bg-gray-900 px-5 sm:py-3 rounded-full gap-2 sm:gap-5">
                            <div className="date flex  md:text-lg justify-start gap-2 ">
                                <FaRegCalendarAlt size={22} /><span className='text-purple-500 font-bold'>Date: </span>  {data.dayOfEvent}
                            </div>
                            <div className="place flex justify-start gap-2 ">
                                <span><MdLocationOn size={22} /> </span> <span className="text-purple-500 font-bold">Location: </span>
                                Mumbai,Maharashtra India.
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
            {/* here comes the description part */}
            <div className="sm:p-8 p-2 flex justify-center">
                {/* Description Section */}
                <div className="w-full sm:pr-8 pr-0">
                    <h1 className="text-4xl font-bold mb-4 text-purple-700">Page Title</h1>
                    <p className="text-gray-600 mb-8">
                        Your beautiful description goes here. Write about what your page is about.
                        Your beautiful description goes here. Write about what your page is about.
                    </p>

                    {/* Summary Section */}
                    <div className="bg-purple-700 text-white  sm:p-6 p-2 rounded">
                        <h2 className="text-2xl font-bold mb-4">Summary</h2>
                        <p className="text-base">
                            This is a summary of the page content. It provides a concise overview of
                            the key points discussed in the description section.
                            This is a summary of the page content. It provides a concise overview of
                            the key points discussed in the description section.
                            This is a summary of the page content. It provides a concise overview of
                            the key points discussed in the description section.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className=" h-full w-[70%] max-w-[50vh] hidden sm:block">
                    <Image width={100} height={100} src={data.image} alt="Description Image" className="w-full h-auto rounded shadow-lg" />
                </div>

            </div>
        </>
    );
};

export default EventDetails;
