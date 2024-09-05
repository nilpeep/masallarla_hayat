import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  return (
    <>
      <div className="hidden lg:flex gap-8">
        {links.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 text-text border-highlight"
                : "text-text relative hover-effect"
            }
          >
            <span className="text-accent font-thin mx-auto mr-4">
              0{index + 1}
            </span>
            {link.link}
          </NavLink>
        ))}
      </div>
      <div className="flex ">
        <div className={`rounded-full bg-accent p-2 mr-4`}>
          <svg
            fill="currentColor"
            width="242px"
            height="242px"
            viewBox="0 0 24.00 24.00"
            className="w-8 h-8 fill-current cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.288"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M10,20V16H5a1,1,0,0,1-1-1V12H20v3a1,1,0,0,1-1,1H14v3.893a2.075,2.075,0,0,1-1.664,2.08A2,2,0,0,1,10,20ZM20,3a1,1,0,0,0-1-1H12L10,6,8,2H5A1,1,0,0,0,4,3v7H20Z"></path>
            </g>
          </svg>
        </div>
        <div className={`rounded-full bg-accent p-2 lg:hidden`}>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 12 12"
            enable-background="new 0 0 12 12"
            className=" w-8 h-8  cursor-pointer"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <rect fill="currentColor" height="1" width="11" x="0.5" y="5.5" />

              <rect fill="currentColor" height="1" width="11" x="0.5" y="2.5" />

              <rect fill="currentColor" height="1" width="11" x="0.5" y="8.5" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
