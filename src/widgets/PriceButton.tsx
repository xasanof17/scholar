interface Props {
  title: string;
  onClick: () => void;
}

const PriceButton = ({ title, onClick }: Props) => {
  return (
    <button
      type="button"
      className="group relative w-full overflow-hidden rounded bg-yellow px-5 py-2.5 text-[23px] font-bold text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#FFCF00] hover:to-[#FFCF00] hover:ring-2 hover:ring-[#FFCF00] hover:ring-offset-2 md:text-2xl"
      onClick={onClick}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
      <span className="relative">{title}</span>
    </button>
  );
};

export default PriceButton;
