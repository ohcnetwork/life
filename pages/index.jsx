import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { stateJsonData } from '../data/states';

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
  const router = useRouter();
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
      <section></section>
      <section>
        <select
          name='state'
          id='state'
          value={geoState}
          onChange={(e) => setGeoState(e.target.value)}
        >
          <option value='' disabled>
            Select State
          </option>
          {Object.keys(stateJsonData).map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
        <select
          name='district'
          id='district'
          value={geoDistrict}
          onChange={(e) => setGeoDistrict(e.target.value)}
        >
          {Object.values(stateJsonData).map((disArr) =>
            disArr.map((dis) => (
              <option key={dis} value={dis}>
                {dis}
              </option>
            ))
          )}
        </select>
        <button
          onClick={() => router.push(`/medicine/${geoState}/${geoDistrict}`)}
        >
          Search
        </button>
      </section>
    </div>
  );
}
