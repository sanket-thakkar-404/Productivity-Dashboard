import { NavLink } from "react-router-dom";
import { SidebarSection } from "../../data/SidebarData";

const MenuSection = () => {
  return (
    <aside className="sidebar p-4 h-full flex flex-col gap-6">
      {SidebarSection.map((section, sectionIndex) => (
        <div key={sectionIndex} className="menu flex flex-col gap-2">
          <h6 className="text-sm uppercase opacity-50">{section.title}</h6>

          {section.items.map((item, idx) => (
            <NavLink
              key={`${sectionIndex}-${idx}`}
              to={item.route}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-2xl px-3 font-medium py-2 transition-all
                ${
                  isActive
                    ? "bg-[#262626] text-[#fdfdfd]"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <i className={`${item.icon} text-lg`} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default MenuSection;