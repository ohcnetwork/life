import React from "react";
// import Link from "next/link";
import { medicineByDistrict } from "../../../lib/api";
import { statePaths, humanize, parseDateString } from "../../../lib/utils";
import Head from "next/head";
import Breadcumb from "../../../components/Breadcumb";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Medicine({ state, district, medicineByDistrict }) {
  return (
    <section className="flex flex-col items-center md:pt-10">
      <Head>
        <title>
          Medicines in {humanize(district)} , {humanize(state)}
        </title>
      </Head>
      <Breadcumb
        list={[
          { href: `/${state}`, name: humanize(state) },
          { href: `/${state}/${district}`, name: humanize(district) },
          { href: null, name: "Medicines" },
        ]}
      />
      <h1 className="mt-4 font-black text-6xl text-gray-900 md:text-left text-center">
        {humanize(district)}
      </h1>
      <div className="space-y-4 mt-4 mb-4">
        {medicineByDistrict.map((p) => {
          return (
            <div className="bg-white rounded-lg shadow">
              <div key={p.id} className="p-4 flex justify-between">
                <div>
                  <div className="font-bold text-2xl">
                    {p.name}
                    <div className="text-sm text-gray-700 font-semibold">
                      <span className="mr-2">{p.distributorName}</span>|
                      <span className="ml-2">{p.city}</span>
                    </div>
                  </div>
                  <div className="w-11/12 max-w-3xl mt-2">
                    <div className="text-sm">{p.address}</div>
                  </div>
                </div>
                <div className="flex space-x-2 items-start">
                  {p.phone1 && (
                    <a
                      className="font-mono text-gray-800 hover:text-gray-900 text-sm font-bold"
                      href={`tel:${p.phone1}`}
                    >
                      <FontAwesomeIcon
                        title={p.phone1}
                        className="text-xl w-6"
                        icon={faPhoneAlt}
                      />
                    </a>
                  )}
                  {p.emailId && (
                    <a
                      className="font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                      target="_blank"
                      href="mailto:callmatkarna@gmail.com"
                    >
                      <FontAwesomeIcon
                        title={p.email}
                        className="text-xl w-6"
                        icon={faEnvelope}
                      />
                    </a>
                  )}
                  {p.source_link && <a href={p.source_link}>source</a>}
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center mx-2 mt-2 pb-3">
                <div className="font-semibold">{p.description}</div>
                <div className="font-mono text-gray-700 text-sm">
                  {parseDateString(p.createdTime)}
                </div>
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
      medicineByDistrict: medicineByDistrict(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths("medicine"),
    fallback: false,
  };
}
