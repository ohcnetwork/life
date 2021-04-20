import React from "react";
import { useRouter } from "next/router";
import { getAmbulances } from "../../../lib/api";
import { statePaths } from "../../../lib/utils";
import AmbulanceCard from "../../../components/AmbulanceCard";

export default function Ambulance({ state, district, ambulancesListing }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {ambulancesListing.map(({ name, phone1, phone2, area, source, id }) => (
        <AmbulanceCard
          key={id}
          name={name}
          phone1={phone1}
          phone2={phone2}
          area={area}
          source={source}
        />
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: params.state,
      district: params.district,
      ambulancesListing: getAmbulances(params.state, params.district),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statePaths(),
    fallback: false,
  };
}
