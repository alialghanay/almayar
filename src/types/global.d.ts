
declare module 'global' {
    import {  Messages, PageKeys } from "local";

    interface Navs  {
        [P : PageKeys]: {
          title: string;
          url: string;
        };
      };

}