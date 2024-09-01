import CloseIcon from "./CloseIcon";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const MobileMenu = (props: {
  links: { link: string; path: string }[];
  isOpen: boolean;
  setShowMenu: (isOpen: boolean) => void;
}) => {
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    } else {
      document.body.style.overflow = "auto";
    }

    // Temizlik fonksiyonu ile stilin geri yüklenmesi
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.isOpen]);

  return (
    <div
      className={`fixed inset-0 flex bg-black text-white justify-center z-50 transition-transform duration-300 transform ${
        props.isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      } ${props.isOpen ? "visible" : "invisible"}`}
    >
      <div>
        <ul className="flex ml-[15%] flex-col justify-center h-full gap-10">
          {props.links.map((link, index) => (
            <li key={index} className="text-5xl w-screen">
              <NavLink
                to={link.path}
                onClick={() => props.setShowMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 text-white border-highlight"
                    : "text-white relative hover-effect"
                }
              >
                <span className="text-2xl font-thin text-white mx-auto mr-4">
                  0{index + 1}
                </span>
                {link.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => props.setShowMenu(false)}
        className="absolute right-6 top-6"
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
