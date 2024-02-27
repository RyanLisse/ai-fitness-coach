import { SidebarLink } from "@/components/SidebarItems";
import { Cog, Globe, HomeIcon } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/", title: "Chat", icon: HomeIcon },
  { href: "/profile", title: "Profile", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
