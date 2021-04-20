import React from "react";
import { useRouter } from "next/router";
import { getDistricts } from "../lib/api";
import { statesStaticPaths } from "../lib/utils";
import { statesAndDistrict } from "../lib/api";
import { parametreize } from "../lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const tabsInfo = [
  {
    name: "Oxygen",
    icon: faLungsVirus,
    link: "/oxygen",
    color: "text-red-500",
  },
  {
    name: "Medicine",
    icon: faCapsules,
    link: "/medicines",
    color: "text-green-500",
  },
  {
    name: "Hospital",
    icon: faHospital,
    link: "/hospitals",
    color: "text-indigo-500",
  },
  {
    name: "Ambulance",
    icon: faAmbulance,
    link: "/ambulance",
    color: "text-blue-500",
  },
  {
    name: "Plasma",
    icon: faSyringe,
    link: "/plasma",
    color: "text-yellow-500",
  },
];

export default function State({ state }) {
  let districts = getDistricts(state);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="w-full">
        {districts &&
          districts.map(({ district }) => (
            <div className="p-4 flex itemms-center shadow-md rounded-md m-4 w-full">
              <span>{district}</span>
              <div className="ml-auto">
                {tabsInfo.map((tab) => (
                  <span
                    className={`cursor-pointer text-sm ml-3 py-1 px-2 text-white rounded shadow-md ${tab.color}`}
                  >
                    <Link
                      href={`[state]/[district]${tab.link}`}
                      as={`/${parametreize(state)}/${parametreize(district)}${
                        tab.link
                      }`}
                    >
                      <span>
                        <FontAwesomeIcon icon={tab.icon} /> {tab.name}
                      </span>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
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
