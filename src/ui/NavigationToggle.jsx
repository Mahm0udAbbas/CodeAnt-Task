import { useState } from "react";
import Logo from "./Logo";
import { CloseOutlined } from "@ant-design/icons";
import MobileMenu from "./MobileMenu";
import Overlay from "./Overlay";

export default function NavigationToggle({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav
        className={`fixed z-20 flex h-[90px] w-full items-center justify-between border-b bg-white p-3 md:hidden ${!isOpen ? "" : ""} `}
      >
        <Logo />
        {!isOpen ? (
          <div className="flex items-center justify-between p-4">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              &#9776;
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Close Menu"
            >
              <CloseOutlined />
            </button>
          </div>
        )}
      </nav>
      <Overlay state={isOpen} />
      <div className="hidden md:flex">{children}</div>
      <div className="w-full md:hidden">{<MobileMenu isOpen={isOpen} />}</div>
    </>
  );
}
