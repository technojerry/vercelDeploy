import React from 'react'
import EventBg from "@/public/images/event_bg.jpg"
import Image from 'next/image'
import Filteration from './filteration'
import 'bootstrap/dist/css/bootstrap.min.css';

const TopEventbg = () => {
  return (

    <>
      {/* here we are importing image from our local folder */}
      <Image
        src={EventBg}
        className="md:h-screen h-[70vh] mb-16 relative brightness-[0.3] w-full"
        alt=""
        width="100"
        height="100" />

      {/* Bg Title here */}
      <div className=" md:max-w-5xl w-[80%]  absolute md:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 flex justify-center flex-col text-center items-center">
        <div className=" bg_eventTitle">
          <p className='md:text-5xl text-4xl font-bold'>Make the Most of Your Time</p>
          <h5 className='md:text-xl text-base'>
            Discover new skills, hobbies, and passions with our diverse and
            interactive events
          </h5>
        </div>
        <div className="explore_event_btn -translate-x-12" >
          <button className="absolute md:mt-4 mt-0 font-semibold z-0 cursor-pointer bg-purple-500 px-3 py-2 hover:bg-purple-600 rounded-lg ">
            explore
          </button>
        </div>

        {/* Filteration Card here */}
      </div>
      <div className="filter_option rounded-xl position-absolute px-2 py-1 top-[80%] md:top-[110%] start-50 translate-middle  bg-gray-700 ">
        <Filteration />
      </div>
    </>
  )
}

export default TopEventbg