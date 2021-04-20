import React from 'react';
import { useRouter } from "next/router";
import { statesAndDistrict } from "../../lib/api";

function State() {
  const router = useRouter();
  const districts = statesAndDistrict()[router.query.state];
  return (
    <div className="mx-auto max-w-5xl">
    <div className="w-full">
      {districts && districts.map((dist) => <div className="p-4 shadow-md rounded-md m-4 w-full">
          <span>{dist}</span>

      </div>)}
    </div>
    </div>
  )
}

export default State
