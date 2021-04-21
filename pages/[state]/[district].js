import React from "react";
import { useRouter } from "next/router";
import { getDistricts } from "../../lib/api";
import {
  statePaths,
  parametreize,
  humanize,
  activeDistricts,
} from "../../lib/utils";
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
import TabLinks from "../../components/TabLinks";
import Link from "next/link";

const tabsInfo = [
  {
    name: "Oxygen",
    icon: faLungsVirus,
    link: "/oxygen",
    color: "text-red-500",
    value: "oxygen",
  },
  {
    name: "Medicine",
    icon: faCapsules,
    link: "/medicines",
    color: "text-green-500",
    value: "medicine",
  },
  {
    name: "Hospital",
    icon: faHospital,
    link: "/hospitals",
    color: "text-indigo-500",
    value: "hospital",
  },
  {
    name: "Ambulance",
    icon: faAmbulance,
    link: "/ambulance",
    color: "text-blue-500",
    value: "ambulance",
  },
  {
    name: "Plasma",
    icon: faSyringe,
    link: "/plasma",
    color: "text-yellow-500",
    value: "plasma",
  },
];

export default function State({ state, district }) {
  return (
    <section className="flex flex-col items-center md:pt-10">
      <h1 className="font-semibold text-2xl text-gray-700 md:text-4xl text-center">
        {humanize(state)}
      </h1>
      <div className="w-full mt-2 px-2">
        <div
          key={district.district}
          className="pt-3 md:p-5 items-center justify-between mt-4 w-full"
        >
          <div className="w-full mx-auto">
            <div className="mt-4 font-black text-6xl text-gray-900 text-center">
              {humanize(district.district)}
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-4">
            <TabLinks tabsInfo={tabsInfo} state={state} district={district} />
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: activeDistricts().find(
        ({ district, state }) =>
          parametreize(state) === params.state &&
          parametreize(district) === params.district
      ),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths("all"),
    fallback: false,
  };
}
