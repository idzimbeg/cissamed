import { useTranslation } from 'next-i18next';

import { HeaderTitleLayout } from '../src/Layouts';
import { symbol } from '../src/consts/consts';

export function WorkPage() {
  const { t } = useTranslation();
  const menuOptions1 = [
    {
      id: '1',
      label: t('work:firstMenuEntry'),
    },
    {
      id: '2',
      label: t('work:eightMenuEntry'),
    },
    {
      id: '3',
      label: t('work:thirdMenuEntry'),
    },
    {
      id: '4',
      label: t('work:thirteenthMenuEntry'),
    },
    {
      id: '5',
      label: t('work:fifthMenuEntry'),
    },
    {
      id: '6',
      label: t('work:sixthMenuEntry'),
    },
  ];
  const menuOptions2 = [
    {
      id: '7',
      label: t('work:seventhMenuEntry'),
    },
    {
      id: '8',
      label: t('work:secondMenuEntry'),
    },
    {
      id: '9',
      label: t('work:ninthMenuEntry'),
    },
    {
      id: '10',
      label: t('work:fourthMenuEntry'),
    },
    {
      id: '11',
      label: t('work:eleventhMenuEntry'),
    },
    {
      id: '12',
      label: t('work:twelfthMenuEntry'),
    },
    {
      id: '13',
      label: t('work:tenthMenuEntry'),
    },
  ];
  return (
    <HeaderTitleLayout description={t('work:mainTitle')} className="-mt-8 bg-secondary-main">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between xl:max-w-3xl text-center">
          {menuOptions1.map((item) => (
            <div
              className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 cursor-default ..."
              key={item.id}
            >
              <div className="md:m-2 m-1 text-sm md:text-lg">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between xl:max-w-3xl text-center">
          {menuOptions2.map((item) => (
            <div
              className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 cursor-default ..."
              key={item.id}
            >
              <div className="m-1 md:m-2 text-sm md:text-lg">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="w-[400px] my-50 mx-auto xl:mx-0">
          <img className="object-contain -mt-40" src={symbol.src} alt="Symbol" />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default WorkPage;
