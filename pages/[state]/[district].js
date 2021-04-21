import React from "react";
import { useRouter } from "next/router";
import { getDistricts } from "../../lib/api";
import { statePaths, parametreize, humanize } from "../../lib/utils";
import { statesAndDistrict } from "../../lib/api";
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

export default function State({ state, district }) {

  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="w-full mt-4 px-2">
          <div
            key={district}
            className="bg-white p-3 md:p-5 items-center justify-between shadow-md rounded-md mt-4 w-full"
          >
            <div className="w-full md:w-1/2 pl-4">
              <span className="font-semibold text-2xl md:text-4xl">
                {humanize(district)}
              </span>
            </div>
            <div className="flex flex-wrap mt-2 items-center">
              {tabsInfo.map((tab) => (
                <div className="p-2 w-1/2 md:w-1/3" key={tab.link}>
                  <Link
                    href={`/[state]/[district]${tab.link}`}
                    as={`/${parametreize(state)}/${parametreize(district)}${
                      tab.link
                    }`}
                  >
                    <span
                      className={`text-center items-center justify-center flex md:flex-row flex-col cursor-pointer text-sm p-4 text-white rounded shadow-md hover:bg-gray-100 ${tab.color}`}
                    >
                      <FontAwesomeIcon icon={tab.icon} />{" "}
                      <div className="pl-2">{tab.name}</div>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths(),
    fallback: false,
  };
}
