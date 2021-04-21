import Link from "next/link";
import React, { useState } from "react";
import reqData from "../data/states.json";
import { districtWithState } from "../lib/api";
import { parametreize, humanize } from "../lib/utils";

const state = Object.keys(reqData);
const district = districtWithState();

const Selector = ({ data }) => {
  const [searchStr, setSearchStr] = useState("");

  const filterTests = (_data, field = null) => {
    return _data
      .filter((i) => {
        const result = !(
          String(field ? i[field] : i)
            .toLowerCase()
            .search(searchStr.toLowerCase()) === -1
        );
        return result;
      })
      .splice(0, 5);
  };

  return (
    <>
      <input
        type="text"
        className="mt-6 w-full h-12 px-3 rounded mb-2 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
        placeholder="Search for State or District"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
      {searchStr && (
        <div className="p-4 border border-gray-400 bg-white mt-1 rounded-lg shadow-lg flex">
          {filterTests(state).length !== 0 &&<div className="w-1/2 p-4">
            <h1 className="font-semibold text-lg">State</h1>
            {filterTests(state).map((i) => {
              return (
                <div className="md">
                  <Link href={parametreize(i)}>{i}</Link>
                </div>
              );
            })}
          </div>}
          {filterTests(district, "district").length !== 0 &&<div className="w-1/2 p-4">
            <h1 className="font-semibold text-lg">District</h1>
            {filterTests(district, "district").map((i) => {
              const url =`/${parametreize(i.state)}/${parametreize(i.district)}/oxygen`;
              return (
                <div className="md">
                  <Link href={url}>{humanize(i.district)}</Link>
                </div>
              );
            })}
          </div>}
        </div>
      )}
    </>
  );
};

export default Selector;
