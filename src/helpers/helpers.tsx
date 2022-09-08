import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ReactCountryFlag from 'react-country-flag';

import { LANGUAGES, MenuItem, NavigationItem } from '../consts';

export const resolvedNavigation = () => {
  const { t } = useTranslation();
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

  return NAVIGATION.map((item) => <MenuItem item={item} key={item.name} />);
};

export const languageSelected = () => {
  switch (true) {
    case i18n?.language === 'en':
      return <ReactCountryFlag countryCode="GB" svg />;
    case i18n?.language === 'hr':
      return <ReactCountryFlag countryCode="HR" svg />;
    case i18n?.language === 'it':
      return <ReactCountryFlag countryCode="IT" svg />;
    case i18n?.language === 'fr':
      return <ReactCountryFlag countryCode="FR" svg />;
    case i18n?.language === 'es':
      return <ReactCountryFlag countryCode="ES" svg />;
    case i18n?.language === 'de':
      return <ReactCountryFlag countryCode="DE" svg />;
  }
};

export const resolvedLanguages = () => {
  const router = useRouter();
  return Object.keys(LANGUAGES).map((language) => (
    <li key={language}>
      <button
        key={language}
        type="submit"
        onClick={() => {
          router.push(`${language}`);
        }}
        className="bg-primary-light p-1 rounded-md text-secondary-main hover:text-secondary-light"
      >
        <>
          <ReactCountryFlag countryCode={LANGUAGES[language].emoji} svg /> {LANGUAGES[language].nativeName}
        </>
      </button>
    </li>
  ));
};
