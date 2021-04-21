import React from "react";
import { useRouter } from "next/router";
import { getOxygen } from "../../../lib/api";
import { statePaths, humanize } from "../../../lib/utils";
import OxygenCard from "../../../components/OxygenCard";

export default function Oxygen({ state, district, oxygenListing }) {
  return (
    <section className="flex flex-col items-center md:pt-10">
      <h1 className="mt-4 font-black text-6xl text-gray-900 md:text-left text-center">
        {humanize(district)}
      </h1>
      <div className="mt-4 w-full p-4">
        {oxygenListing.map((o) => {
          console.log(o);
          return (
            <OxygenCard
              key={o.id}
              name={o.name}
              company={o.companyName}
              phone1={o.phone1}
              phone2={o.phone2}
              description={o.description}
              source={o.sourceName}
              slink={o.sourceLink}
              fstate={state}
              fdistrict={district}
            />
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
      oxygenListing: getOxygen(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths(),
    fallback: false,
  };
}
