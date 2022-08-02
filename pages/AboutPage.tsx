import { useTranslation } from 'react-i18next';

import { HeaderTitleLayout } from '../src/components/Layouts';
import Map from '../src/components/map/Map';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <HeaderTitleLayout
      // title={t('touristMedicalOffice')}
      className="md:mt-10 sm:shrink xs:scroll-mt-20 bg-secondary-main rounded-lg"
      description={t('accessibility')}
    >
      <Map />
    </HeaderTitleLayout>
  );
}

export default AboutPage;
