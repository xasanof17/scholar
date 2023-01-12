import { MdClose } from "react-icons/md";

const Ad = () => {
  return (
    <div className="hidden w-full overflow-x-scroll bg-yellow py-3 transition-all duration-300 sm:block sm:overflow-x-hidden">
      <div className="container flex items-center justify-between">
        <h4 className="flex-1 text-center text-lg font-bold text-black md:text-xl">
          Are you a university or school looking for an online tutoring
          partnership ?
        </h4>
        <button className="flex items-center">
          <MdClose fontSize={25} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default Ad;
