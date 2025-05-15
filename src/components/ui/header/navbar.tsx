import { Navs } from "global";
import Link from "next/link";
import LocaleSwitcher from "../locale-switcher";

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
            <Link className="font-semibold" href={page.url}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
      <LocaleSwitcher />
    </nav>
  );
};

export default NavBar;
