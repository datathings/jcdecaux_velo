import HouseIcon from '@tabler/icons/outline/home.svg';
import Logout from '@tabler/icons/outline/logout.svg';
import Sun from '@tabler/icons/outline/sun.svg';
import Moon from '@tabler/icons/outline/moon.svg';
import { sl } from '@greycat/web';

// Those icons will be available in any shoelace component
// by using the "tabler" library:
//
// eg.
//  <sl-icon library="tabler" name="heart" />
//
// add/del icons fitting your needs
// the full list is available at https://tabler.io/icons
const ICONS: Record<string, string | undefined> = {
  house: HouseIcon,
  logout: Logout,
  sun: Sun,
  moon: Moon,
};

sl.registerIconLibrary('default', {
  resolver: (name) => {
    return ICONS[name] ?? '';
  },
});
