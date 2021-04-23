import Link from 'next/link';
import { useState } from 'react';
import { getStates } from '../lib/api';
import { humanize, parametreize } from '../lib/utils';
import Tabs from '../components/Tabs';
import Logo from '../components/Logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules,
} from '@fortawesome/free-solid-svg-icons';
import Selector from '../components/Selector';
import useLocale from '../hooks/use-locale';

let updateFilter = (setSelectedFilter, selection) =>
  setSelectedFilter(selection);

export default function Home() {
  const t = useLocale();

  const tabsInfo = [
    { name: t.oxygen, icon: faLungsVirus, link: '/oxygen', value: 'oxygen' },
    {
      name: t.medicine,
      icon: faCapsules,
      link: '/medicine',
      value: 'medicine',
    },
    {
      name: t.hospital,
      icon: faHospital,
      link: '/hospitals',
      value: 'hospitals',
    },
    {
      name: t.ambulance,
      icon: faAmbulance,
      link: '/ambulance',
      value: 'ambulance',
    },
    {
      name: t.helpline,
      icon: faPhoneAlt,
      link: '/helpline',
      value: 'helpline',
    },
    { name: t.plasma, icon: faSyringe, link: '/plasma', value: 'plasma' },
  ];
  const [selectedFilter, setSelectedFilter] = useState('oxygen');

  return (
    <div>
      <section className='flex flex-col items-center md:pt-20'>
        <Logo width={100} />
        <h1 className='mt-1 font-black text-6xl text-gray-900'>{t.name}</h1>
        <h2 className='mt-4 font-semibold text-xl text-gray-900 text-center'>
          {t.description}
        </h2>
        <div className='mt-4 '>
          <Tabs
            tabsInfo={tabsInfo}
            selectedFilter={selectedFilter}
            updateFilterCB={(e) => updateFilter(setSelectedFilter, e)}
          />
        </div>
        <div className='w-full md:w-3/4 px-2'>
          <Selector t={t} page={selectedFilter} />
        </div>
        <div className='flex flex-wrap items-center justify-evenly mt-6 '>
          {getStates(selectedFilter).map((s) => {
            return (
              <Link key={s} href={`[state]`} as={`${parametreize(s)}`}>
                <span className='p-2 text-sm md:text-md font-normal hover:font-bold cursor-pointer hover:text-gray-900 text-gray-500'>
                  {humanize(s)}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
