import React from "react";
interface Props {
  title: string;
  type?: string;
  onClick?: () => void;
  className?: string;
}
const Button = ({ type, title, onClick, className }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-100 px-5 py-2.5 text-lg font-medium text-gray-600 shadow-inner`}
      >
        <span className="ease absolute top-0 left-0 h-0 w-0 border-t-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-gray-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute top-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-full bg-gray-600 transition-all delay-200 duration-300 group-hover:h-full"></span>
        <span className="absolute inset-0 h-full w-full bg-gray-900 opacity-0 delay-300 duration-300 group-hover:opacity-100"></span>
        <span className="ease relative transition-colors delay-200 duration-300 group-hover:text-white">
          {title}
        </span>
      </button>
    </>
  );
};

export default Button;
