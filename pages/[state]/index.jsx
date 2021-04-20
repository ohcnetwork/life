import React from 'react';
import { useRouter } from "next/router";
import { statesAndDistrict } from "../../lib/api";
import { parametreize } from "../../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const tabsInfo = [
  { name: "Oxygen", icon: faLungsVirus, link: "/", color: "bg-red-600" },
  { name: "Medicine", icon: faCapsules, link: "/medicines", color: "bg-green-600" },
  { name: "Hospital", icon: faHospital, link: "/hospitals", color: "bg-indigo-600" },
  { name: "Ambulance", icon: faAmbulance, link: "/ambulance", color: "bg-blue-600" },
  { name: "Plasma", icon: faSyringe, link: "/plasma", color: "bg-yellow-600" },
];

function State() {
  const router = useRouter();
  const districts = statesAndDistrict()[router.query.state];
  return (
    <div className="mx-auto max-w-5xl">
    <div className="w-full">
      {districts && districts.map((dist) => <div className="p-4 flex itemms-center shadow-md rounded-md m-4 w-full">
          <span>{dist}</span>
          <div className="ml-auto">
            {
              tabsInfo.map(tab => <span className={`text-sm ml-3 py-1 px-2 text-white rounded shadow-md ${tab.color}`}>
                <Link href={`/${parametreize(router.query.state)}/${parametreize(dist)}${tab.link}`}>
                  <><FontAwesomeIcon icon={tab.icon} /> {tab.name}</>
                </Link>
                </span>)
            }
          </div>
      </div>)}
    </div>
    </div>
  )
}

export default State;
