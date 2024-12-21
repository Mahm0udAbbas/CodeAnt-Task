import {
  BookOutlined,
  CloudOutlined,
  CodeOutlined,
  HomeOutlined,
  LoginOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
const navItems = [
  { name: "Repositories", path: "/repositories", icon: <HomeOutlined /> },
  { name: "AI Code Review", path: "/codeReview", icon: <CodeOutlined /> },
  { name: "Cloud Security", path: "/cloudSecurity", icon: <CloudOutlined /> },
  { name: "How To Use", path: "/howToUse", icon: <BookOutlined /> },
  { name: "Setting", path: "/setting", icon: <SettingOutlined /> },
  { name: "Support", path: "/help", icon: <PhoneOutlined /> },
  { name: "Log out", path: "/login", icon: <LoginOutlined /> },
];

export default function MobileMenu({ isOpen }) {
  return (
    <nav
      className={`fixed z-10 flex w-full flex-col bg-white transition-all duration-300 ${isOpen ? "translate-y-[90px]" : "-translate-y-[100%]"}`}
    >
      <section className="my-3 px-3">
        <DropDownMenu />
      </section>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              className={({ isActive }) =>
                `flex items-center justify-start gap-x-4 rounded-lg px-[14px] py-[10px] text-base font-semibold ${isActive ? "shadow-navLink drop-shadow-navLinkInner border-2 bg-[#1570EF] text-white" : ""}`
              }
              to={item.path}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
