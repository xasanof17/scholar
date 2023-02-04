import Image from "next/image";
import { Button, PriceButton } from "../widgets";

interface Props {
  info: string[];
  img: string;
  price: string;
}

const TabBlock = ({ info, img, price }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-y-14 gap-x-0 md:gap-y-0 lg:gap-x-5">
      <div className="col-span-12 flex flex-col space-y-7 lg:col-span-5 lg:justify-between lg:space-y-0">
        <ul className="infoList">
          {info.map((info, i) => (
            <li key={i} className="infoItem">
              {info}
            </li>
          ))}
        </ul>
        <div className="inline-block">
          <p className="inline border-b-[3px] border-yellow pb-1 text-xl font-normal">
            Price: <span className="text-3xl font-bold">{price} UZS</span>
          </p>
        </div>
        <PriceButton title="Sign Up" />
      </div>{" "}
      <div className="relative col-span-12 hidden h-[600px] sm:block lg:col-span-7">
        <Image src={img} alt="scholar" fill priority />
      </div>
    </div>
  );
};

export default TabBlock;
