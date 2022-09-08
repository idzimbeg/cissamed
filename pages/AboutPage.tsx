import { useTranslation } from 'next-i18next';

import { HeaderTitleLayout } from '../src/Layouts';
import { Map } from '../src/map';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <HeaderTitleLayout className="md:mt-10 pt-32 sm:shrink xs:scroll-mt-20" description={t('about:accessibility')}>
      <div className="bg-secondary-main flex justify-center items-center rounded-lg">
        <Map />
      </div>
    </HeaderTitleLayout>
  );
}

export default AboutPage;
