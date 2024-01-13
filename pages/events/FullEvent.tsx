"use client"
import React from 'react'
import FetchEvent from './api/fetch';

import { useState } from 'react';
const FullEvent = () => {


    return (
        <>
            {/* <div className="search flex justify-end px-10">
           <input type="text" placeholder='Search something here' className='p-2 outline-none text-lg border-r-none border-2 border-black rounded-l-md' /> <button className='p-2 outline-none text-xl text-white cursor-pointer rounded-r-md bg-blue-500'>Search</button>
        </div> */}
            <main className='xl:px-12'>
                <h1 className='text-4xl mb-16 mt-8 flex justify-start pl-0'><b>FOR YOU</b></h1>
                <div className="forYou rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <FetchEvent />
                </div>
                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>Latest Events</b></h1>
                <div className="latest rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <FetchEvent />
                </div>

                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>History</b></h1>
                <div className="history rounded-3xl px-7 bg-purple-100 ">
                    <hr className='h-0 bg-black ' />
                    <FetchEvent />
                </div>
            </main>
        </>
    )
}

export default FullEvent;

