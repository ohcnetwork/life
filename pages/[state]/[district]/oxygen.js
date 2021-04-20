import React from "react";
import { useRouter } from "next/router";
import { getOxygen } from "../../../lib/api";
import { statePaths } from "../../../lib/utils";
import OxygenCard from "../../../components/OxygenCard";

export default function Oxygen({ state, district, oxygenListing }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
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
