import React from "react";
import menuIcon from '../assets/menuIcon.svg'
import menuIconActive from '../assets/menuIconActive.svg'
import { Link } from "react-router-dom";

type MenuItemProps = {
  label: string;
  link?: string;
  isActive?: boolean;
}

const menuItems = [
  {
    label: "Platform launch",
    link: "/board/1",
    isActive: true
  },
  {
    label: "Marketing plan",
    link: "/board/2",
    isActive: false
  },
  {
    label: "Enhancements",
    link: "/board/3",
    isActive: false
  }
]

const MenuItem: React.FC<MenuItemProps> = ({ label, link, isActive }) => {
  const icon = isActive ? menuIconActive : menuIcon;
  return (
    link ? <li>
    <a href={link} className={`flex justify-around items-center py-2 px-4 hover:bg-gray-700 rounded-tr-[20px] rounded-br-[20px] ${isActive ? "bg-[#645fc5]" : ""}`}>
      <img src={icon} alt="dashboard-icon" className="w-[24px] h-[24px]" />
      <span className={`font-semibold text-[15px] ${isActive ? 'text-white' : 'text-gray-500'}`}>{label}</span>
    </a>
  </li> : <div className="flex justify-around items-center py-2 px-4 hover:underline text-[#645fc5] cursor-pointer hover:bg-gray-700 rounded-tr-[20px] rounded-br-[20px]">
    <img src={menuIcon} alt="create new" className="w-[24px] h-[24px]" />
    <span className="text-[#645fc5]">{label}</span>
  </div>
  )
}

const Sidebar = () => {
    return (
      <div className="w-64 h-full fixed left-0 top-0 bg-[#2c2c37] p-4 border-r-[0.2px] border-gray-500 z-50 flex flex-col gap-[20px]">
        <Link to={"/"} className="text-xl font-bold mb-4">Boards</Link>
        {/* <h2 className="text-xl font-bold mb-4">Boards</h2> */}
        <h4 className="text-[14px] font-code font-semibold text-gray-500 font-source-code">ALL BOARDS (8)</h4>
        <ul className="flex flex-col justify-center gap-[10px]">
          {menuItems.map((item, index) => (
            <MenuItem key={item.label+index} label={item.label} link={item.link} isActive={item.isActive} />
          ))}
            <MenuItem label="+ Create board" />
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  