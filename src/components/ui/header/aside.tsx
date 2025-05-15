import { Navs } from "global";
import Link from "next/link";

const Aside = ({
  data,
  isOpen,
  pathname,
}: {
  data: Navs;
  isOpen: boolean;
  pathname: string;
}) => {
  return (
    <aside
      className={`fixed bottom-0 left-0 w-full bg-card rounded-t-2xl shadow transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } h-[85dvh] z-40 flex flex-col justify-between items-center p-4`}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <ul className="flex flex-col justify-center items-center gap-4">
          {Object.entries(data).map(([pageKey, page]) => (
            <li
              key={pageKey}
              className={
                pathname == page.url ? "text-primary" : "hover:text-primary"
              }
            >
              <Link href={page.url}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
