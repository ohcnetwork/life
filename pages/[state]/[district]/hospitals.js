import React from "react";
import { hospitalByDistrict } from "../../../lib/api";
import { statePaths, humanize, parseDateString } from "../../../lib/utils";
import Head from "next/head";
import Breadcumb from "../../../components/Breadcumb";

export default function Medicine({ state, district, hospitalByDistrict }) {
  return (
    <section className="flex flex-col items-center md:pt-10">
      <Head>
        <title>
          Hospitals in {humanize(district)} , {humanize(state)}
        </title>
      </Head>
      <Breadcumb
        list={[
          { href: `/${state}`, name: humanize(state) },
          { href: `/${state}/${district}`, name: humanize(district) },
          { href: null, name: "Hospitals" },
        ]}
      />
      <h1 className="mt-4 font-black text-6xl text-gray-900 md:text-left text-center">
        {humanize(district)}
      </h1>
      <div className="space-y-4 mt-4 max-w-3xl w-full">
        {hospitalByDistrict.map((p) => {
          return (
            <div
              key={p.id}
              className="w-full bg-white p-4 flex shadow rounded-lg justify-between"
            >
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="font-bold">{p.email}</div>
                <div>{p.description}</div>
                <div>{p.address}</div>
                <div>{parseDateString(p.createdTime)}</div>
              </div>
              <div className="flex flex-col">
                <a href={`tel:${p.phone1}`}>{p.phone1}</a>
                {p.source_link && <a href={p.source_link}>source</a>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
      hospitalByDistrict: hospitalByDistrict(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths("hospitals"),
    fallback: false,
  };
}
