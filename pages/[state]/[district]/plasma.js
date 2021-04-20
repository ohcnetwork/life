import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../layouts/MainLayout";
import { plasmaByDistrict } from "../../../lib/api";
import { statePaths } from "../../../lib/utils";

export default function Plasma({ state, district, plasmaListing }) {
  const router = useRouter();
  // if (!router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }

  // phone1: '9426871496',
  // source_link: 'https://docs.google.com/spreadsheets/d/18sdw0j4-mDr3T-nlBROl3hIwJQta88h16OVbl-zCpQ4/edit#gid=823633222',

  console.log(plasmaListing);
  return (
    <div>
      <div className="text-3xl mt-4 font-bold">
        {state} / {district}
      </div>

      <div className="space-y-4 mt-4">
        {plasmaListing.map((p) => {
          return (
            <div
              key={p.id}
              className="bg-white p-4 flex shadow rounded-lg justify-between"
            >
              <div>
                <div className="font-bold">{p.name}</div>
                <div>{p.description}</div>
                <div>{p.createdTime}</div>
              </div>
              <div>
                <a href="tel:${p.phone1}">{p.phone1}</a>
                <a href={p.source_link}>source</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
      plasmaListing: plasmaByDistrict(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths(),
    fallback: false,
  };
}
