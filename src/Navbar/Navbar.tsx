import { Disclosure } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import { NextPage } from 'next';

import { LanguageDropdown } from '../LanguageDropdown';
import { backgroundImage } from '../consts/consts';
import { resolvedNavigation } from '../helpers';

export const Navbar: NextPage = () => {
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
                    <div className="flex space-x-4">{resolvedNavigation()}</div>
                  </div>
                </div>
                <LanguageDropdown />
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">{resolvedNavigation()}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
