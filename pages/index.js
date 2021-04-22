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

const tabsInfo = [
  { name: 'Oxygen', icon: faLungsVirus, link: '/oxygen', value: 'oxygen' },
  { name: 'Medicine', icon: faCapsules, link: '/medicine', value: 'medicine' },
  {
    name: 'Hospital',
    icon: faHospital,
    link: '/hospitals',
    value: 'hospitals',
  },
  {
    name: 'Ambulance',
    icon: faAmbulance,
    link: '/ambulance',
    value: 'ambulance',
  },
  { name: 'Helpline', icon: faPhoneAlt, link: '/helpline', value: 'helpline' },
  { name: 'Plasma', icon: faSyringe, link: '/plasma', value: 'plasma' },
];

let updateFilter = (setSelectedFilter, selection) =>
  setSelectedFilter(selection);

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('oxygen');

  return (
    <div>
      <section className='flex flex-col items-center md:pt-20'>
        <Logo width={100} />
        <h1 className='mt-1 font-black text-6xl text-gray-900'>LIFE</h1>
        <h2 className='mt-4 font-semibold text-xl text-gray-900 text-center'>
          Verified Crowd Sourced Emergency Services Directory
        </h2>
        <div className='mt-4 '>
          <Tabs
            tabsInfo={tabsInfo}
            selectedFilter={selectedFilter}
            updateFilterCB={(e) => updateFilter(setSelectedFilter, e)}
          />
        </div>
        <div className='w-full md:w-3/4 px-2'>
          <Selector page={selectedFilter} />
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
