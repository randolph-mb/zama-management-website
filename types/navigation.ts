/**
 * Navigation-related types
 */

/**
 * Menu item for navigation
 */
export interface MenuItem {
  label: string;
  url: string;
  active?: boolean;
}

/**
 * Navigation link with optional children for dropdowns
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  children?: NavLink[];
}

/**
 * Footer link group
 */
export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}
