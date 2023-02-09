import Image from "next/image";
import { useRouter } from "next/router";
import { PriceButton } from "../widgets";

interface Props {
  info: string[];
  img: string;
  price: string;
}

const TabBlock = ({ info, img, price }: Props) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-12 gap-y-14 gap-x-0 md:gap-y-0 lg:gap-x-4">
      <div className="col-span-12 flex flex-col space-y-7 lg:col-span-4 lg:justify-between lg:space-y-0">
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
        <PriceButton title="Sign Up" onClick={() => router.push("/signup")} />
      </div>{" "}
      <div className="relative col-span-12 hidden h-[600px] sm:block lg:col-span-8">
        <Image src={img} alt="scholar" fill />
      </div>
    </div>
  );
};

export default TabBlock;
