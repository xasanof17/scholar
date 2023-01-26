import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLanguage } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import { Ad, Menu } from "../components";
import { MdClose } from "react-icons/md";
import { Listbox } from "@headlessui/react";
import { Button } from "../widgets";
import { links } from "../constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white shadow-md ${
        scroll ? "shadow-md" : "shadow-none"
      }`}
    >
      <Ad />
      <nav className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image src="/vercel.svg" alt="Logo" width={150} height={80} />
          </Link>
          <ul className="navList">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`link ${asPath === link.href && "active"}`}
                  onClick={() => setActive((prev) => !prev)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center sm:space-x-3">
            <button className="btn-yellow hidden sm:inline">
              Online payment
            </button>
            <Button onClick={() => router.push("/signup")} type="button" title="Sign up" className="hidden sm:flex" />
            <button
              className="inline lg:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              {menu ? (
                <MdClose fontSize={30} className="text-black" />
              ) : (
                <RxHamburgerMenu fontSize={30} className="text-black" />
              )}
            </button>
          </div>
          {menu && <Menu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
