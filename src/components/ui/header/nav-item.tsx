import { Link } from "@/lib/utils/i18n/navigation";

const NavItem = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link className="font-semibold" href={url}>
      {title}
    </Link>
  );
};

export default NavItem;
