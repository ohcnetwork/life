import React from "react";
import { useRouter } from "next/router";
import { getDistricts } from "../lib/api";
import { statesStaticPaths } from "../lib/utils";

export default function State({ state }) {
  let districts = getDistricts(state);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="w-full">
        {districts.map((d) => {
          return (
            <div
              key={d.district}
              className="p-4 shadow-md rounded-md m-4 w-full"
            >
              <span>{d.district}</span>
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
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}
