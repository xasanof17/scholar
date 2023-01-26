import React from "react";
import { FaPhone } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="fixed bottom-3 right-3 z-10 sm:bottom-5 sm:right-5">
      <a
        href="tel:+998981103717"
        className="flex animate-bounce items-center justify-center rounded-full bg-yellow p-5 shadow-xl shadow-gray-300"
      >
        <FaPhone className="text-[25px] sm:text-[35px]" />
      </a>
    </div>
  );
};

export default Phone;
