declare module "global" {
  import { Messages, PageKeys } from "local";

  type NavType = "link" | "dropdown";

  type BaseNavItem = {
    title: string;
    url: string;
  };

  type LinkNavItem = BaseNavItem & {
    type: NavType;
    children?: never;
  };

  type DropdownNavItem = BaseNavItem & {
    type: NavType;
    children: Navs;
  };

  type NavItem = LinkNavItem | DropdownNavItem;

  interface Navs {
    [P in PageKeys]: NavItem;
  }
}
