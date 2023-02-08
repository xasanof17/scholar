import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const socials = [
  {
    href: "",
    icon: (
      <BsFacebook
        fontSize={25}
        className="text-black group-hover:text-yellow"
      />
    ),
    text: "Facebook",
  },
  {
    href: "",
    icon: (
      <BsInstagram
        fontSize={25}
        className="text-black group-hover:text-yellow"
      />
    ),
    text: "Instagram",
  },
  {
    href: "",
    icon: (
      <BsYoutube fontSize={27} className="text-black group-hover:text-yellow" />
    ),
    text: "YouTube",
  },
  {
    href: "",
    icon: (
      <FaTiktok fontSize={25} className="text-black group-hover:text-yellow" />
    ),
    text: "TikTok",
  },
  {
    href: "",
    icon: (
      <BsTelegram
        fontSize={25}
        className="text-black group-hover:text-yellow"
      />
    ),
    text: "Telegram",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-7 border-t border-gray-300">
      <div className="container py-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col">
            <Image src="/scholar.svg" alt="scholar" width={200} height={70} />
          </div>
          <div className="">scholar</div>
          <div className="">
            <h3 className="mb-2 text-[24px] font-bold capitalize">
              contact us
            </h3>
            <a href="tel:+998981103717" className="text-xl hover:text-yellow">
              +998 98 110-37-17
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-2 text-[24px] font-bold capitalize">
              Social Media
            </h3>
            <ul className="flex flex-col space-y-3">
              {socials.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-xl group-hover:text-yellow"
                  >
                    {link.icon}
                    <span className="group-hover:text-yellow">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-2 border-t border-gray-300 py-5 text-center text-base">
        All Rights Reserved {year}
      </p>
    </footer>
  );
};

export default Footer;
