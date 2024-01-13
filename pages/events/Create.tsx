// components/EventPopup.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoX } from "react-icons/go";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EventPopupProps {
  onClose: () => void;
}

const Create: React.FC<EventPopupProps> = ({ onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [isWritingDescription, setIsWritingDescription] = useState(false);
  const [venueType, setVenueType] = useState('online');
  const [venueDetails, setVenueDetails] = useState('');
  const [eventDateFrom, setEventDateFrom] = useState('');
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // this is the notification after submitting the form

  const handleCreateEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Validate input data
      if (!eventName) {
        throw new Error("Event Name is required");
      }

      // Display a success notification
      toast.success('Event created successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Close the popup after submission
      onClose();
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error creating event:", error);

      // Display an error notification
      toast.error('Please fill the form correctly', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleWriteDescription = () => {
    setIsWritingDescription(true);
  };

  const handleBackToEventName = () => {
    setIsWritingDescription(false);
  };

  return (
    <div className=" fixed rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-50 p-6 bg-white z-50">
      <span className="absolute top-2 right-2 p-1 border-2 border-gray-50 rounded-md text-lg cursor-pointer" onClick={onClose}>
        <GoX size={20} />
      </span>
      <h2 className="text-xl font-bold mb-4">Create Event</h2>

      {/* here we are starting the code for form making */}
      <form onSubmit={handleCreateEvent} className="mb-4 w-[40vw]">
        {isWritingDescription && (
          <button
            type="button"
            onClick={handleBackToEventName}
            className=" text-black"
          >
            <IoMdArrowRoundBack size={20} />
          </button>
        )}
        <label htmlFor="eventInput" className="block text-sm font-semibold mb-2">
          {isWritingDescription ? 'Event Description' : 'Event Name'}
        </label>

        {isWritingDescription ? (
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            rows={4}
            className="w-full border p-2 mb-2"
            placeholder="Enter event description..."
          />
        ) : (
          <div className="flex items-center rounded-md bg-gray-50 border-2 border-gray-50 w-full mb-4">
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full outline-none bg-gray-50 border-0 text-sm p-2 py-[19px]"
              placeholder="Enter event name..."
            />
            <button
              type="button"
              onClick={handleWriteDescription}
              className="bg-white  text-black text-sm w-[18rem] p-2 px-1 rounded-lg border mr-2 my-1"
            >
              Add Description
            </button>
          </div>
        )}

        <div className="venue">
          <div className="venues w-full flex gap-2 flex-wrap items-center">
            <div className="mb-4">
              <label htmlFor="venueType" className="block font-bold  text-sm mb-2">
                Type:
              </label>
              <select
                id="venueType"
                name="venueType"
                value={venueType}
                onChange={(e) => setVenueType(e.target.value)}
                className="w-full text-sm bg-gray-50 rounded-md  border p-2"
              >
                <option className='text-sm bg-gray-50' value="online">Online</option>
                <option className='text-sm bg-gray-50' value="offline">Offline</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="venueDetails" className="block text-sm font-semibold mb-2">
                Details:
              </label>
              <input
                type="text"
                id="venueDetails"
                name="venueDetails"
                value={venueDetails}
                onChange={(e) => setVenueDetails(e.target.value)}
                className="w-full rounded-md text-sm bg-gray-50 border p-2"
                placeholder={venueType === 'online' ? 'Enter event link...' : 'eg..Anand Vihar, Delhi'}
              />
            </div>
          </div>
        </div>

        <div className="Events_date flex flex-col">
          <div className="dates flex flex-wrap gap-3 items-center">
            <div className="mb-4">
              <label className="block font-bold text-sm mb-2">
                Date:
              </label>
              <input
                type="date"
                id="eventDateFrom"
                name="eventDateFrom"
                value={eventDateFrom}
                onChange={(e) => setEventDateFrom(e.target.value)}
                className="w-full rounded-md bg-gray-50 text-sm border p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="eventDateTo" className="block text-sm font-bold mb-2">
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-md bg-gray-50 text-sm border p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="duration" className="block text-sm font-bold mb-2">
                Duration:
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full rounded-md bg-gray-50 text-sm border p-2"
              />
            </div>
          </div>
        </div>
        <p>This event will take place on the {eventDateFrom} from {time} until {time}</p>

        <div className="attachment mb-4">
          <label htmlFor="attachment" className="block text-sm font-bold mb-2">
            <p><strong> Upload Attachment:</strong></p>
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={(e) => setAttachment(e.target.files?.[0] || null)}
            className="w-full rounded-md text-sm bg-gray-50 border p-2"
          />
        </div>

        {/* #F8FAFB */}
        <div className="submit_btn flex justify-end">
          <button className="bg-[#7C3AED] text-white text-sm py-2 px-4 rounded">
            Create Event
          </button>
        </div>
      </form>

      {/* this is the notification codd for creating the event */}
      {notification && (
        <div className="bg-green-500 text-white p-2 mt-4 rounded">
          {notification}
        </div>
      )}

    </div>
  );
};

export default Create;
