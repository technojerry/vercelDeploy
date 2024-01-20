
import React from 'react'
import Fetch from './api/Fetch';
const FullEvent = () => {


    return (
        <>
            <main className='xl:px-12'>
                <h1 className='text-4xl mb-16 mt-8 flex justify-start pl-0'><b>FOR YOU</b></h1>
                <div className="forYou rounded-3xl px-7 bg-purple-500 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch />
                </div>
                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>Latest Events</b></h1>
                <div className="latest rounded-3xl px-7 bg-purple-500 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch />
                </div>

                <h1 className='text-4xl my-16 flex justify-start pl-0'><b>History</b></h1>
                <div className="history rounded-3xl px-7 bg-purple-500 ">
                    <hr className='h-0 bg-black ' />
                    <Fetch />
                </div>
            </main>
        </>
    )
}

export default FullEvent;

