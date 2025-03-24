"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  setHovered: (value: boolean) => void;
};

export const Navbar: React.FC<Props> = ({ setHovered }) => {
  const lenis = useLenis();
  const links = [
    {
      id: 2,
      name: "Education",
      link: "#education",
    },
    {
      id: 4,
      name: "Experience",
      link: "#experience",
    },
    {
      id: 3,
      name: "Projects",
      link: "#projects",
    },
    {
      id: 5,
      name: "Contacts",
      link: "#contacts",
    },
  ];

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const Links = () => (
    <ul
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hidden md:flex gap-x-6  text-xl font-semibold font-sans relative"
    >
      {links.map(({ id, link, name }) => (
        <li onClick={() => lenis?.scrollTo(link)} key={id}>
          <Link href="">
            <p>{name.toUpperCase()}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="cursor-auto md:cursor-none w-full h-20 text-white mix-blend-difference">
      <div className="container mx-auto p-2 h-full">
        <div className="flex justify-between items-center h-full">
          <h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="font-sans font-semibold text-3xl "
          >
            Arunava Mondal
          </h1>
          <MenuIcon className="md:hidden" />
          <Links />
        </div>
      </div>
    </div>
  );
};
