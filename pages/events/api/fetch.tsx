import React from "react";
import { EventData, useEvent } from "../context/EventContext";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from "../Card";
import Filteration from "../filteration";

const Fetch: React.FC = () => {
  const { events } = useEvent();

  return (
    <>
      <Card cardEvents={events} />
    </>
  );
};

export default Fetch;
