import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../assets/images/logo_acenda.png";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const menu = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Destination",
      link: "destination",
    },
    {
      name: "News",
      link: "news",
    },
    {
      name: "Blog",
      link: "blog",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="relative w-full bg-red-500 text-white">
      <nav
        className={`fixed top-0 w-full py-4 bg-primary/65d  z-[10] shadow-sma bg-gradient-to-r from-primary/95 to-primary/65`}
      >
        <div className="w-full lg:container flex justify-between items-center ">
          <div className="pl-3 cursor-pointer">
            <img
              src={Logo}
              alt="logo"
              className="w-[60px] md:w-[65px]  object-contain"
            />
          </div>
          <ul
            className={`lg:flex items-center lg:gap-4 z-[100]
            ${
              isOpen
                ? "bg-primary/65 rounded-b-3xl py-10 shadow-lg z-[10] flex flex-col items-start absolute top-[60px] w-full"
                : "hidden"
            }  `}
          >
            {menu.map((menu, index) => (
              <LinkScroll
                to={menu.link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
                key={index}
              >
                <li
                  className="hover:scale-95 inline-block py-4 px-4 cursor-pointer before-style"
                >
                  {menu.name}
                </li>
              </LinkScroll>
            ))}
          </ul>
          <div
            className="lg:hidden cursor-pointer pr-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseOutline className="text-3xl" />
            ) : (
              <CiMenuFries className="text-3xl" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
