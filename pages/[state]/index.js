import React, { useState } from "react";
import { getDistricts } from "../../lib/api";
import { parametreize, statesStaticPaths } from "../../lib/utils";
import { humanize } from "../../lib/utils";
import TabLinks from "../../components/TabLinks";
import Head from "next/head";
import Breadcumb from "../../components/Breadcumb";
import Link from "next/link";
import { tabsInfo } from "../../lib/tabs";

export default function State({ state }) {
  // data.filter((el) => el.district.toLowerCase().includes(search));
  let districts = getDistricts(state);
  const [searchStr, setSearchStr] = useState("");
  const filterDistricts = districts.filter((el) =>
    el.district.toLowerCase().includes(searchStr.toLowerCase())
  );
  return (
    <section className="md:pt-10">
      <Head>
        <title>{humanize(state)} | Coronasafe network</title>
      </Head>
      <Breadcumb list={[{ href: null, name: humanize(state) }]} />
      <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-900 md:text-left">
        Search Result For{" "}
        <span className="mt-4 font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-200 md:text-left">
          "{humanize(state)}"
        </span>
      </h1>
      <div className="w-full mt-2">
        <div className="max-w-xl">
          <input
            type="text"
            className="mt-6 w-full h-12 border-2 border-gray-400 rounded mb-2 focus:outline-none focus:border-indigo-600 text-xl px-8 bg-white placeholder-gray-500"
            placeholder={`Search Districts of ${humanize(state)}`}
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap overflow-hidden mt-8">
          {filterDistricts.map((f) => (
            <div
              key={f.district}
              className="w-full rounded overflow-hidden md:w-1/2 mb-6 hover:bg-gray-200 dark:hover:bg-gray-1200"
            >
              <div className="p-4">
                <Link
                  href={`/${parametreize(state)}/${parametreize(f.district)}`}
                >
                  <span className="font-semibold text-2xl md:text-4xl py-6 hover:underline cursor-pointer">
                    {humanize(f.district)}
                  </span>
                </Link>
                <div className="max-w-3xl mx-auto mt-6">
                  <TabLinks tabsInfo={tabsInfo} state={state} district={f} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: parametreize(params.state),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}
