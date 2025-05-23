import { Navs } from "global";
import LocaleSwitcher from "../locale-switcher";
import NavDropdown from "./nav-dropdown";
import NavItem from "./nav-item";

const NavBar = ({ data, pathname }: { data: Navs; pathname: string }) => {
  return (
    <nav className="hidden sm:flex justify-center items-center gap-10">
      <ul className="flex justify-center items-center gap-10">
        {Object.entries(data).map(([pageKey, page]) => (
          <li
            key={pageKey}
            className={
              pathname == page.url
                ? "text-lg underline underline-offset-4 decoration-2 decoration-blue-900"
                : "hover:text-lg"
            }
          >
            {page.type === "link" ? (
              <NavItem title={page.title} url={page.url} />
            ) : page.type === "dropdown" ? (
              <NavDropdown page={page} />
            ) : null}
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
    </nav>
  );
};

export default NavBar;
