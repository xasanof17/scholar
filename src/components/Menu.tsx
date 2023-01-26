import Link from "next/link";
import { links } from "../constants";

const Menu = () => {
  return (
    <div className="absolute top-0 left-0 z-10 mt-[15.2%] flex min-h-screen w-screen flex-col items-center justify-center bg-white sm:mt-[17.2%] md:mt-[13%] lg:hidden">
      <ul className="flex flex-col items-center space-y-5">
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className="link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
