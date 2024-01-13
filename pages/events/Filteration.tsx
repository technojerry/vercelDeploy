import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

interface FilterationProps {
    // Additional props can be added here as needed
}

const Filteration: React.FC<FilterationProps> = () => {
    const [lookingFor, setLookingFor] = useState('');
    const [inPlace, setInPlace] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [showEvents, setShowEvents] = useState(false);
    const [dateOptions, setDateOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        // Generate date options dynamically for the next 5 days
        const today = new Date();
        const options: { value: string; label: string }[] = [];

        for (let i = 0; i < 5; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const formattedDate = currentDate.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });

            options.push({
                value: formattedDate,
                label: formattedDate,
            });
        }

        setDateOptions(options);
    }, []);

    const handleFilter = () => {
        // Replace this with your actual event filtering logic
        if (!lookingFor || !inPlace || !selectedDate) {
            setShowEvents(false);
            alert('Please fill the entire form');
            return;
        }

        alert('Form is filled correctly');
        console.log('Looking For:', lookingFor);
        console.log('In Place:', inPlace);
        console.log('Selected Date:', selectedDate);

        // Perform filtering logic with the received data
        // ...

        // For now, let's just log the selected options
    };

    return (
        <div className="container rounded-xl lg:h-2/4 flex justify-between items-center gap-4 p-2">
            <div className="looking_for text-white">
                <p className="text-sm">Looking For</p>
                <input
                    type="text"
                    placeholder="eg.. Event Title"
                    className="w-56 outline-none border-b-2 bg-transparent border-purple-600 p-2"
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                />
            </div>
            <div className="in_place text-white">
                <p className="text-sm">In</p>
                <input
                    type="text"
                    placeholder="eg., Venue"
                    className="w-56 outline-none border-b-2 bg-transparent border-purple-600 p-2"
                    value={inPlace}
                    onChange={(e) => setInPlace(e.target.value)}
                />
            </div>
            <div className="date text-white">
                <p className="text-sm">Date</p>
                <select
                    name="Dates"
                    id="date"
                    className="w-56 outline-none bg-transparent border-b-2 p-2 border-purple-600"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                >
                    <option className="outline-none text-black border-b-2 border-purple-600" value="">
                        Select Date
                    </option>
                    {dateOptions.map((option) => (
                        <option
                            key={option.value}
                            className="outline-none text-black border-b-2"
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="search_icon bg-purple-600 rounded-xl p-3">
                <FaSearch size={20} color={'white'} className="cursor-pointer" onClick={handleFilter} />
            </div>
        </div>
    );
};

export default Filteration;
