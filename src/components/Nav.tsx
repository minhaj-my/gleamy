import { Fragment } from "react";
import { logo, orangeDot, vector, searchIcon } from "../assets";
import { Sidebar } from "./Sidebar";

export const Nav = () => {
  const navItems = [
    { label: "FB", href: "https://facebook.com" },
    { label: "IN", href: "https://instagram.com" },
    { label: "DR", href: "https://dribbble.com" },
    { label: "BE", href: "https://behance.net" },
  ];

  return (
    <nav className="flex   animate-fade-in items-center  justify-between p-4">
      {" "}
      <ul className="flex items-center gap-2">
        {navItems.map((item, index) => (
          <Fragment key={item.label}>
            <li className="navbar-text">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
            {index < navItems.length - 1 && (
              <img
                src={orangeDot}
                className="max-sm:hidden"
                alt=""
                aria-hidden="true"
              />
            )}
          </Fragment>
        ))}
      </ul>
      <img
        src={logo}
        alt="Logo"
        className="h-8  animate-fade-pulse ax-md:h6 max-sm:h5 w-auto object-contain"
      />
      <div className="flex items-center justify-center  ">
        <a className="pr-8 max-md:pr-4 max-sm:pr-2">
          <img
            className="hover:brightness-50 transition-all cursor-pointer"
            src={searchIcon}
            width={18}
            height={18}
          />
        </a>

        <img src={vector} />
        <div className="flex">
          <a className="hover:text-orange-500 transition-colors">
            <p className="font-poppins pl-8 max-md:hidden ">MENU</p>
          </a>
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};
