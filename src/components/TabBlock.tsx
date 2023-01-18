import Image from "next/image";

interface Props {
  info: string[];
  img: string;
}

const TabBlock = ({ info, img }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-5">
        {info.map((info, i) => (
          <div key={i}>{info}</div>
        ))}
      </div>{" "}
      <div className="relative col-span-7 h-[600px]">
        <Image src={img} alt="scholar" fill priority />
      </div>
    </div>
  );
};

export default TabBlock;
