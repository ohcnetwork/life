import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import { parametreize, humanize } from "../lib/utils";

export default function TabLinks({ state, district, tabsInfo }) {
  const router = useRouter();

  // const defaultStyle =
  //   "border-transparent text-gray-500 hover:text-yellow-700 hover:border-gray-300 group flex items-center py-4 px-1 border-b-2 font-medium text-sm";
  // const activeStyle = defaultStyle + "border-indigo-500 text-indigo-600";

  return (
    <div className="border-b border-gray-200">
      <nav className="flex flex-wrap justify-evenly px-2" ariaLabel="Tabs">
        {tabsInfo.map((tab) => (
          <Link
            href={`/[state]/[district]${tab.link}`}
            as={`/${parametreize(state)}/${parametreize(district)}${tab.link}`}
          >
            <div
              key={tab.link}
              href={tab.link}
              className={
                "cursor-pointer w-min border-transparent flex items-center justify-center px-4 py-2 text-center text-gray-700 group border-b-2 font-medium hover:" +
                tab.color
              }
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span className="ml-2">{tab.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
