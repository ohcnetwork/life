import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { stateJsonData } from '../data/states';
import Tabs from '../components/Tabs';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules
} from "@fortawesome/free-solid-svg-icons";

const tabsInfo = [
  { name: "Oxygen", icon: faLungsVirus, link: "/" },
  { name: "Medicine", icon: faCapsules, link: "/medicines" },
  { name: "Hospital", icon: faHospital, link: "/hospitals" },
  { name: "Ambulance", icon: faAmbulance, link: "/ambulance" },
  { name: "Helpline", icon: faPhoneAlt, link: "/helpline" },
  { name: "Plasma", icon: faSyringe, link: "/plasma" }
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
      <Tabs tabsInfo={tabsInfo} />
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
