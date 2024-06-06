import { logout } from '@greycat/web';
import LogoutIcon from '@tabler/icons/outline/logout.svg?raw';
import BrightnessUpIcon from '@tabler/icons/outline/brightness-up.svg?raw';
import MoonIcon from '@tabler/icons/outline/moon.svg?raw';
import HomeIcon from '@tabler/icons/outline/home.svg?raw';
import LogoIcon from './logo.svg?raw';
import { icon } from '../../common/utils';
import { APP_LAYOUT_THEME } from '../../common/constants';
import './app-layout.css';

/**
 * Make sure to append this component to the DOM **after** GreyCat is initialized
 */
export class AppLayout extends HTMLElement {
  readonly main = document.createElement('main');

  /**
   * Relative path to parent page
   */
  get parent() {
    return this.getAttribute('parent') ?? '.';
  }

  set parent(parent: string) {
    this.setAttribute('parent', parent);
  }

  /**
   * Name of current page
   */
  get current() {
    return this.getAttribute('current') ?? 'index';
  }

  set current(current: string) {
    this.setAttribute('current', current);
  }

  connectedCallback() {
    console.log('AppLayout connected');

    this.main.replaceChildren(...this.childNodes);

    console.log('AppLayout connected 2');

    this.appendChild(
      <>
        <aside>
          <nav>
            <ul>
              <li className="brand">
                <a href={this.parent}>{icon(LogoIcon)}</a>
              </li>
              {this._pageNavItems('right')}
            </ul>
            <ul>{this._extraNavItems()}</ul>
          </nav>
        </aside>
        <nav className="responsive">
          <ul>
            <li className="brand">
              <a href={this.parent}>{icon(LogoIcon)}</a>
            </li>
            {this._pageNavItems('bottom')}
          </ul>
          <ul>{this._extraNavItems()}</ul>
        </nav>
        {this.main}
      </>,
    );
  }

  private _pageNavItems(placement: 'right' | 'bottom'): HTMLLIElement[] {
    const items = [this._createNavItem('Index', '.', icon(HomeIcon), this.parent, placement)];

    return items;
  }

  private _extraNavItems(): HTMLLIElement[] {
    const lightIcon = icon(BrightnessUpIcon);
    const darkIcon = icon(MoonIcon);
    const initialTheme = getCurrentTheme();

    const themeIcon = {
      dark: lightIcon,
      light: darkIcon,
    };

    function toggleTheme() {
      const curTheme = getCurrentTheme();
      const newTheme = curTheme === 'dark' ? 'light' : 'dark';
      toggleThemeBtn.replaceChildren(themeIcon[newTheme]);
      setCurrentTheme(newTheme);
      // remove focus after update
      toggleThemeBtn.blur();
    }

    const toggleThemeBtn = (
      <button role="link" onclick={toggleTheme}>
        {initialTheme === 'dark' ? lightIcon : darkIcon}
      </button>
    ) as HTMLButtonElement;

    return [
      <li>{toggleThemeBtn}</li>,
      <li>
        <button role="link" onclick={this.signout}>
          {icon(LogoutIcon)}
        </button>
      </li>,
    ] as HTMLLIElement[];
  }

  private _createNavItem(
    label: string,
    route: string,
    icon: SVGSVGElement,
    href = `${this.parent}/${route}/`,
    placement: 'right' | 'bottom',
  ): HTMLLIElement {
    return (
      <li>
        <a
          className={this.current === route ? 'active' : undefined}
          href={href}
          data-tooltip={label}
          data-placement={placement}
        >
          {icon}
        </a>
      </li>
    ) as HTMLLIElement;
  }

  disconnectedCallback() {
    this.replaceChildren();
  }

  async signout() {
    await logout();
    location.reload();
  }
}

function getCurrentTheme(): 'dark' | 'light' {
  let theme = localStorage.getItem(APP_LAYOUT_THEME);
  if (theme === 'dark' || theme === 'light') {
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  }

  theme = document.documentElement.getAttribute('data-theme') ?? 'dark';
  if (theme === 'light') {
    return 'light';
  }
  return 'dark';
}

function setCurrentTheme(theme: 'dark' | 'light') {
  localStorage.setItem(APP_LAYOUT_THEME, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

declare global {
  interface HTMLElementTagNameMap {
    'app-layout': AppLayout;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-layout': GreyCat.Element<AppLayout>;
    }
  }
}

if (!customElements.get('app-layout')) {
  customElements.define('app-layout', AppLayout);
}
