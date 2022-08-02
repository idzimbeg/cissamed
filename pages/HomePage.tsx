import { useTranslation } from 'react-i18next';

import { HeaderTitleLayout } from '../src/components/Layouts';
import { backgroundImage, email, hour, location, phone } from '../src/components/consts/consts';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <HeaderTitleLayout
      title={t('touristMedicalOffice')}
      description={t('address')}
      img={<img className="w-32 -my-5" alt="Location Marker Icon" src={location.src} />}
      bg={<img className="w-full -my-5" alt="CissaMed Logo" src={backgroundImage.src} />}
      className={'mt-4 bg-secondary-main flex-auto rounded-lg'}
    >
      <div className="mt-4 md:mx-56 text-lg text-center mb-10">
        <>{t('introText')}</>
      </div>
      <div className="xl:mt-5 justify-center items-center flex flex-col">
        <div className="text-2xl rounded-lg flex flex-col text-center">
          <div className="mb-5 flex-col">
            <div className="w-28 mx-auto">
              <img alt="Clock Icon" src={hour.src} />
            </div>
            <div className="uppercase mb-4">{`${t('workSchema')}`}</div>
            <div className="text-base">{`${t('workingHours')}`}</div>
          </div>
          <div className="mb-5 flex-col">
            <div className="w-28 mx-auto">
              <img alt="Phone Icon" src={phone.src} />
            </div>
            <div className="uppercase mb-2">{`${t('contact')}`}</div>
            <div className="text-base">{`${t('phone')}`}</div>
            <div className="mb-5 flex-col">
              <div className="w-28 mx-auto">
                <img alt="Email Icon" src={email.src} />
              </div>
              <div className="uppercase mb-4">{`${t('emailSchema')}`}</div>
              <div className="text-base">{`${t('email')}`}</div>
            </div>
          </div>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
