import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const tabsArr = [
  'Oxygen',
  'Medicine',
  'Ambulance',
  'Plasma',
  'Helpline',
  'Hospital',
];

export default function Home() {
  const [geoState, setGeoState] = useState('');
  const [geoDistrict, setGeoDistrict] = useState('');
  return (
    <div>
      <Head>
        <title>Life | Coronasafe network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='py-4 flex items-center justify-around'>
        {tabsArr.map((tb) => (
          <Link href={`/${tb}`}>
            <p>{tb}</p>
          </Link>
        ))}
      </div>
      <section>
        <select
          name='state'
          id='state'
          value={geoState}
          onChange={(e) => setGeoState(e.target.value)}
        >
          <option value='KR'>Kerela</option>
          <option value='MH'>Maharashtra</option>
          <option value='KR'>Kerela</option>
          <option value='MH'>Maharashtra</option>
          <option value='KR'>Kerela</option>
          <option value='MH'>Maharashtra</option>
        </select>
      </section>
      <section>
        <select
          name='district'
          id='district'
          value={geoDistrict}
          onChange={(e) => setGeoDistrict(e.target.value)}
        >
          <option value='Raigad'>Raigad</option>
          <option value='Pune'>Pune</option>
          <option value='Raigad'>Raigad</option>
          <option value='Pune'>Pune</option>
        </select>
        <button
          onClick={() => console.log(`Searching: ${geoState} ${geoDistrict}`)}
        >
          Search
        </button>
      </section>
    </div>
  );
}
