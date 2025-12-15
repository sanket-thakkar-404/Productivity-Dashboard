import { useState } from "react";
import { SidebarSection } from "../../data/SidebarData";
import { NavLink } from "react-router-dom";

const MenuSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <aside className="sidebar p-4 h-full flex flex-col gap-6">
      {SidebarSection.map((section, sectionIndex) => (
        <div key={sectionIndex} className="menu flex flex-col gap-2">
          <h6 className="text-sm uppercase opacity-50">{section.title}</h6>

          {section.items.map((item, idx) => {
            const currentKey = `${sectionIndex}-${idx}`;

            return (
              <NavLink
                to={item.route}
                key={currentKey}
                onClick={() => setActiveItem(currentKey)}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 cursor-pointer transition
                  ${
                    activeItem === currentKey
                      ? "bg-[#262626] text-[#fdfdfd]"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
              >
                <i className={`${item.icon} text-lg`} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default MenuSection;
