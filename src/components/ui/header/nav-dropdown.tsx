import { useState } from "react";
import { ChevronDown } from "lucide-react";
import NavItem from "./nav-item";
import { DropdownNavItem, LinkNavItem } from "global";

const NavDropdown = ({ page }: { page: DropdownNavItem }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div
      className="group relative cursor-pointer "
      onClick={handleToggle}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-expanded={open}
    >
      <ChevronDown
        className={`absolute -right-6 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
      />
      <span className="font-semibold">{page.title}</span>
      <ul
        className={`absolute bg-white shadow-md rounded-md border p-1 ${
          open ? "block animate-in" : "hidden animate-out"
        }`}
      >
        {Object.entries(page.children).map(([childKey, child]) => {
          const typedChild = child as LinkNavItem;
          return (
            <li key={childKey} className="p-2 hover:bg-gray-200">
              <NavItem title={typedChild.title} url={typedChild.url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDropdown;
