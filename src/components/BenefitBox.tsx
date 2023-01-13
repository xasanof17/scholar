import Image from "next/image";

interface Props {
  title: string;
  text: string;
  icon: string;
}

const BenefitBox = ({ title, text, icon }: Props) => {
  return (
    <div className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-5 shadow-light hover:bg-white/40 hover:shadow-md">
      <div className="relative mb-4 h-10 w-10">
        <Image src={icon} alt="icon" fill />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 text-base text-light">{text}</p>
    </div>
  );
};

export default BenefitBox;
