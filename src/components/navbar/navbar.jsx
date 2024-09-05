import React from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  return (
    <div className="flex">
      {links.map((link) => (
        <div>
          <a href={link.path}>{link.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
