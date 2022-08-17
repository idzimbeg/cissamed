import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import { NextPage } from 'next';
import { i18n, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ReactCountryFlag from 'react-country-flag';

import { LANGUAGES, backgroundImage, symbol } from '../consts/consts';

interface NavigationItem {
  to: string;
  name: string;
}

interface Props {
  item: NavigationItem;
  onClickItem?: (e: unknown) => void;
  value?: string;
}

const MenuItem = ({ item, onClickItem }: Props) => (
  <Link href={item.to} onClick={onClickItem}>
    <div className="group flex items-center text-primary-light text-base whitespace-nowrap hover:text-secondary-main cursor-pointer">
      {item.name}
    </div>
  </Link>
);

export const Navbar: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const NAVIGATION: NavigationItem[] = [
    {
      to: '/',
      name: t('common:Home'),
    },
    {
      to: '#work',
      name: t('common:Work'),
    },
    {
      to: '#contact',
      name: t('common:Where'),
    },
  ];
  const countryFlag = i18n ? i18n.language : '';
  return (
    <>
      <Disclosure as="nav" className="bg-secondary-light fixed w-full z-10 -left-0 top-0">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary-light hover:text-primary-light hover:bg-secondary-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-8 w-auto" src={backgroundImage.src} alt="CissaMed Logo" />
                    <img className="hidden lg:block h-8 w-auto" src={backgroundImage.src} alt="CissaMed Logo" />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {NAVIGATION.map((item) => (
                        <MenuItem item={item} key={item.name} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <>
                    {' '}
                    <img className="h-8 w-8 rounded-full" src={symbol.src} alt="Symbol" />
                    {/* Language Dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="flex-row text-md text-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-main focus:ring-secondary-light">
                          <div className="mr-1">
                            <ReactCountryFlag countryCode={countryFlag} svg />
                          </div>
                          <>{t('Languages')}</>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <ol>
                            {Object.keys(LANGUAGES).map((language) => (
                              <li key={language}>
                                <button
                                  key={language}
                                  type="submit"
                                  onClick={() => {
                                    router.push(`${language}`);
                                    // i18n.changeLanguage(language);
                                  }}
                                  className="bg-primary-light p-1 rounded-md text-secondary-main hover:text-secondary-light"
                                >
                                  <>
                                    <ReactCountryFlag countryCode={LANGUAGES[language].emoji} svg />{' '}
                                    {LANGUAGES[language].nativeName}
                                  </>
                                </button>
                              </li>
                            ))}
                          </ol>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                {NAVIGATION.map((item) => (
                  <MenuItem item={item} key={item.name} />
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
