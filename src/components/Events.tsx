import Image from "next/image";
import React from "react";
import { YellowTitle } from "../widgets";
import events from "../assets/img/sunday-event.jpg";
import cashBack from "../assets/img/cash-back.jpg";

const Events = () => {
  return (
    <section className="py-[3%]" id="events">
      <div className="container">
        <YellowTitle title="Events" subtitle="Sunday" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="hover:cursor-pointer">
            <Image src={events} alt="events" width={450} height={450} />
          </div>
          <div className="hover:cursor-pointer">
            <Image src={cashBack} alt="cash" width={450} height={450} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
