import React from 'react'
import EventBg from "@/public/images/event_bg.jpg"
import Image from 'next/image'
import Filteration from './Filteration'
import 'bootstrap/dist/css/bootstrap.min.css';

const TopEventbg = () => {
  return (

    <>
      {/* here we are importing image from our local folder */}
      <Image
        src={EventBg}
        className="h-screen mb-16 relative brightness-[0.3] w-full"
        alt=""
        width="100"
        height="100" />

      {/* Bg Title here */}
      <div className=" max-w-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 flex justify-center flex-col text-center items-center">
        <div className=" bg_eventTitle">
          <p className='text-5xl font-bold'>Make the Most of Your Time</p>
          <h5 className='text-xl'>
            Discover new skills, hobbies, and passions with our diverse and
            interactive events
          </h5>
        </div>
        <div className="explore_event_btn -translate-x-12" >
          <button className="absolute mt-4 font-semibold z-0 cursor-pointer bg-purple-500 px-3 py-2 hover:bg-purple-600 rounded-lg ">
            explore
          </button>
        </div>

        {/* Filteration Card here */}
      </div>
      <div className="filter_option rounded-xl position-absolute px-2 py-1 top-100 start-50 translate-middle  bg-gray-700 ">
        <Filteration />
      </div>
    </>
  )
}

export default TopEventbg