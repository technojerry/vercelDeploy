import { useEffect, useState } from 'react';

interface CountdownProps {
    targetDate: string; // Target date in string format (e.g., '2024-12-31T23:59:59')
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [daysRemaining, setDaysRemaining] = useState<number>(0);
    const [hoursRemaining, setHoursRemaining] = useState<number>(0);
    const [minutesRemaining, setMinutesRemaining] = useState<number>(0);

    useEffect(() => {
        // Parse the target date string to a Date object
        const targetDateTime = new Date(targetDate);

        // Update the countdown every second
        const intervalId = setInterval(() => {
            // Get the current date and time
            const currentDate = new Date();

            // Calculate the difference in milliseconds
            const timeDifference = targetDateTime.getTime() - currentDate.getTime();

            // Calculate days, hours, and minutes
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            setDaysRemaining(days);
            setHoursRemaining(hours);
            setMinutesRemaining(minutes);
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className='flex gap-2 items-center justify-center'>
            <p className='p-2 bg-purple-500 text-white rounded-lg '>{daysRemaining}d</p>:
            <p className='p-2 bg-purple-500 text-white rounded-lg '>{hoursRemaining}h</p>:
            <p className='p-2 bg-purple-500 text-white rounded-lg '>{minutesRemaining}m</p>
        </div>
    );
};

export default Countdown;
