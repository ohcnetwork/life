import React from "react";
import {
  statePaths,
  parametreize,
  humanize,
  activeDistricts,
} from "../../../lib/utils";
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faAmbulance,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
import TabLinks from "../../../components/TabLinks";
import Head from "next/head";
import Breadcumb from "../../../components/Breadcumb";

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
    link: "/medicine",
    color: "text-green-500",
    value: "medicine",
  },
  {
    name: "Hospital",
    icon: faHospital,
    link: "/hospitals",
    color: "text-indigo-500",
    value: "hospitals",
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
    <section className="md:pt-10">
      <Head>
        <title>
          {humanize(district.district)} , {humanize(state)} | Coronasafe network
        </title>
      </Head>
      <Breadcumb
        list={[
          { href: `/${state}`, name: humanize(state) },
          { href: null, name: humanize(district.district) },
        ]}
      />
      <div className="w-full mt-2 px-2">
        <div className="w-full">
          <div className="mt-4 font-black text-5xl text-gray-900 py-4">
            {humanize(district.district)}
            <span className="text-3xl font-semibold text-gray-700">
              {" "}
              , {humanize(state)}
            </span>
          </div>
        </div>
        <div className="my-8 bg-gray-200 inline-block">
          <TabLinks tabsInfo={tabsInfo} state={state} district={district} />
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
