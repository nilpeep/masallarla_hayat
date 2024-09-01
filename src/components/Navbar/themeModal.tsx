import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeTheme } from "../../redux/theme/themeSlice";
import { colors } from "../../data/colors";

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (theme: string) => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  const handleThemeChange = (theme: string) => {
    dispatch(changeTheme(theme));
  };

  return (
    <>
      <div className="bg-accent">
        <div className="text-center font-bold py-2">SELECT A THEME</div>

        <div>
          <div className="flex p-4 items-center overflow-scroll gap-3 ">
            {Object.entries(colors).map(([theme, colorValues], index) => (
              <div
                key={index}
                onClick={() => handleThemeChange(theme)}
                style={{
                  backgroundColor: colorValues.bg,
                  color: colorValues.text,
                  border:
                    currentTheme === theme
                      ? `2px solid ${colorValues.highlight}`
                      : "",
                }}
                className="p-3 w-44 rounded-lg cursor-pointer flex justify-center items-center gap-3 transform transition-transform duration-200 hover:scale-110"
              >
                <div>
                  <div className="text-center font-semibold">
                    {theme.toUpperCase()}
                  </div>
                  <div className="flex relative ml-[10px]">
                    {Object.values(colorValues).map(
                      (color, index) =>
                        index > 2 && (
                          <div
                            key={index}
                            className="w-6 h-6 border-2 border-white rounded-full top-0"
                            style={{
                              backgroundColor: color,
                              marginLeft: index === 0 ? "0px" : "-10px",
                            }}
                          ></div>
                        )
                    )}
                  </div>
                </div>
                {currentTheme === theme && (
                  <div className="absolute -bottom-3 left-[44%] text-highlight triangle-up"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div onClick={onClose} className="absolute right-1 top-1">
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

export default ThemeModal;
