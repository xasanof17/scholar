import Image from "next/image";
import { Button, PriceButton } from "../widgets";

interface Props {
  info: string[];
  img: string;
  price: string;
}

const TabBlock = ({ info, img, price }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-5 flex flex-col justify-between">
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
      <div className="relative col-span-7 h-[600px]">
        <Image src={img} alt="scholar" fill priority />
      </div>
    </div>
  );
};

export default TabBlock;
