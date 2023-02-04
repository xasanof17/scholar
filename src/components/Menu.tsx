import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../constants";
import { Button } from "../widgets";

const Menu = () => {
  const router = useRouter();
  return (
    <div className="absolute top-0 left-0 z-10 mt-[18.2%] flex min-h-screen w-screen flex-col items-center justify-center bg-white sm:mt-[19.2%] md:mt-[13%] lg:hidden">
      <ul className="mb-4 flex flex-col items-center space-y-5">
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className="link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="container flex flex-col justify-center space-y-4 sm:hidden">
        <button className="btn-yellow">Online payment</button>
        <Button
          onClick={() => router.push("/signup")}
          type="button"
          title="Sign up"
          className=""
        />
      </div>
    </div>
  );
};

export default Menu;
