import React, { useState } from 'react';
import { getDistricts } from '../lib/api';
import { statesStaticPaths } from '../lib/utils';
import { humanize } from '../lib/utils';
import TabLinks from '../components/TabLinks';
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules,
} from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

const tabsInfo = [
  {
    name: 'Oxygen',
    icon: faLungsVirus,
    link: '/oxygen',
    color: 'text-red-500',
  },
  {
    name: 'Medicine',
    icon: faCapsules,
    link: '/medicine',
    color: 'text-green-500',
  },
  {
    name: 'Hospital',
    icon: faHospital,
    link: '/hospitals',
    color: 'text-indigo-500',
  },
  {
    name: 'Ambulance',
    icon: faAmbulance,
    link: '/ambulance',
    color: 'text-blue-500',
  },
  {
    name: 'Plasma',
    icon: faSyringe,
    link: '/plasma',
    color: 'text-yellow-500',
  },
  {
    name: 'Helpline',
    icon: faPhoneAlt,
    link: '/helplines',
    color: 'text-yellow-500',
  },
];

export default function State({ state }) {
  // data.filter((el) => el.district.toLowerCase().includes(search));
  let districts = getDistricts(state);
  const [searchStr, setSearchStr] = useState('');
  const filterDistricts = districts.filter((el) =>
    el.district.toLowerCase().includes(searchStr.toLowerCase())
  );
  return (
    <section className='flex flex-col items-center md:pt-10'>
      <Head>
        <title>{humanize(state)} | Coronasafe network</title>
      </Head>
      <h1 className='mt-4 font-black text-6xl text-gray-900 md:text-left text-center'>
        {humanize(state)}
      </h1>
      <div className='w-full mt-2 px-2'>
        <input
          type='text'
          className='mt-6 w-full h-12 px-3 rounded mb-2 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg'
          placeholder={`Search Districts of ${humanize(state)}`}
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
        {filterDistricts.map(({ district }) => (
          <div
            key={district}
            className='pt-3 md:p-5 items-center justify-between mt-4 w-full'
          >
            <div className='w-full mx-auto'>
              <div className='font-semibold text-2xl md:text-4xl text-center'>
                {humanize(district)}
              </div>
            </div>
            <div className='max-w-3xl mx-auto mt-4'>
              <TabLinks tabsInfo={tabsInfo} state={state} district={district} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}
