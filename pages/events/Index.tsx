// import Table from "@/components/util/Table";
import Tab from "@/components/util/Tab";
import FullEvent from "./FullEvent";
import { useState } from "react";
import TopEventbg from "./TopEventbg";
import { FaCirclePlus } from "react-icons/fa6";
import Create from "./create";
export default function Page() {
  const header = ["Event Name", "Description", "Date", "Created By"];
  const tabs = ["All Events", "My Events", "Registered Events", "Create Event"];
  const data = [
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
  ];

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className=" font-poppins">
        <div className="eventPageBg bg-[#f9f9f9]">
          <TopEventbg />
        </div>
        <div className="create_event flex bg-[#f9f9f9] px-10 pb-0 py-20 md:py-10 justify-end items-center">
          <button onClick={openPopup} className="px-3 flex outline-none hover:bg-violet-600 items-center justify-center gap-2 py-[12px] text-xl text-white bg-violet-500 rounded-md">
            <h6 className="mb-[0.1rem] "> Create Event</h6> <FaCirclePlus size={20} />
          </button>
          {isPopupOpen && <Create onClose={closePopup} />}
        </div>
        {/* <h1 className="px-4">Event Route</h1>
        <div className="text-sky-200 p-4">
          <Tab data={tabs} />
        </div> */}
        {/* <div className="p-4">
        <Table data={data} header={header} />
      </div> */}
        <div className="md:p-6 p-6 pt-0 bg-[#f9f9f9]">
          <FullEvent />
        </div>
      </div>
    </>
  );
}
