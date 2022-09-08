import Link from 'next/link';

import Email from '../../public/images/email.svg';
import Logo from '../../public/images/logo.svg';
import Location from '../../public/images/lokacija.svg';
import Hours from '../../public/images/radnovreme.svg';
import Symbol from '../../public/images/simbol-02.svg';
import Phone from '../../public/images/telefon.svg';

export interface NavigationItem {
  to: string;
  name: string;
}

export interface Props {
  item: NavigationItem;
  onClickItem?: (e: unknown) => void;
  value?: string;
}

export const LANGUAGES = {
  en: { nativeName: 'English', emoji: 'GB' },
  hr: { nativeName: 'Hrvatski', emoji: 'HR' },
  it: { nativeName: 'Italiano', emoji: 'IT' },
  fr: { nativeName: 'Français', emoji: 'FR' },
  es: { nativeName: 'Español', emoji: 'ES' },
  de: { nativeName: 'Deutsch', emoji: 'DE' },
};

export const office = {
  id: '1',
  field_address: {
    locality: 'Novalja',
    postal_code: '53291',
    address_line1: 'Ulica Kralja Zvonimira ',
    address_line2: '11',
    latitude: 44.55705012999859,
    longitude: 14.884329755824055,
    zoom: 15,
  },
};

export const MenuItem = ({ item, onClickItem }: Props) => (
  <Link href={item.to} onClick={onClickItem}>
    <div className="group flex items-center text-primary-light text-base whitespace-nowrap hover:text-secondary-main cursor-pointer">
      {item.name}
    </div>
  </Link>
);

export const symbol = Symbol;
export const backgroundImage = Logo;
export const email = Email;
export const location = Location;
export const hour = Hours;
export const phone = Phone;
