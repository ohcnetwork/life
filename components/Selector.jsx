import Link from "next/link";
import React, { useState } from "react";
import reqData from "../data/states.json";
import { districtWithState } from "../lib/api";

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
        className="p-4 w-full focus:border-gray-50"
        placeholder="Search"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
      {searchStr && (
        <div className="p-4 bg-gray-300 flex">
          <div className="w-1/2">
            <h1>State</h1>
            {filterTests(state).map((i) => {
              return (
                <h1>
                  <Link href={i.toLowerCase()}>{i}</Link>
                </h1>
              );
            })}
          </div>
          <div className="w-1/2">
            <h1>Dis</h1>
            {filterTests(district, "district").map((i) => {
              const url = `/${i.state}/${i.district}`.toLowerCase();
              return (
                <h1>
                  <Link href={url}>{i.district}</Link>
                </h1>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Selector;
