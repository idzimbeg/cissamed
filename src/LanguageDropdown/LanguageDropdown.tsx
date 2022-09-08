import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { Fragment } from 'react';

import { symbol } from '../consts';
import { languageSelected, resolvedLanguages } from '../helpers';

export const LanguageDropdown = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <img className="hidden lg:block h-8 w-8 rounded-full" src={symbol.src} alt="Symbol" />
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="flex-row text-md text-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary-main focus:ring-secondary-light">
            <div className="mr-1">
              <>{languageSelected()}</>
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
            <ol>{resolvedLanguages()}</ol>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
