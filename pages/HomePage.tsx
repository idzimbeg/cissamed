import { useTranslation } from 'next-i18next';

import { HeaderTitleLayout } from '../src/Layouts';
import { backgroundImage, email, hour, location, phone } from '../src/consts/consts';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <HeaderTitleLayout
      title={t('common:touristMedicalOffice')}
      description={t('home:introText')}
      bg={<img className="w-full -my-5" alt="CissaMed Logo" src={backgroundImage.src} />}
      className={' bg-secondary-main xl:mt-5 justify-center items-center flex flex-col text-2xl text-center'}
    >
      <div className=" card-body mb-5">
        <div className="w-28 mx-auto">
          <img alt="Clock Icon" src={location.src} />
        </div>
        <div className="uppercase mb-4">{`${t('home:addressSchema')}`}</div>
        <div className="mb-4">{`${t('home:address')}`}</div>
      </div>
      <div className="mb-5">
        <div className="w-28 mx-auto">
          <img alt="Clock Icon" src={hour.src} />
        </div>
        <div className="uppercase mb-4">{`${t('home:workSchema')}`}</div>
        <div className="text-base">{`${t('home:workingHours')}`}</div>
      </div>
      <div className="mb-5">
        <div className="w-28 mx-auto">
          <img alt="Phone Icon" src={phone.src} />
        </div>
        <div className="uppercase mb-2">{`${t('home:contact')}`}</div>
        <div className="text-base">{`${t('home:phone')}`}</div>
        <div className="mb-5 flex-col">
          <div className="w-28 mx-auto">
            <img alt="Email Icon" src={email.src} />
          </div>
          <div className="uppercase mb-4">{`${t('home:emailSchema')}`}</div>
          <div className="text-base">{`${t('home:email')}`}</div>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
