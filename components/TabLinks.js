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
      <nav className="flex flex-wrap" aria-label="Tabs">
        <div className="flex flex-wrap overflow-hidden">
          {tabsInfo.map((tab) => {
            const render = (
              <div
                className={`w-1/2 overflow-hidden ${
                  district[tab.value]
                    ? "bg-" + tab.color.split("-")[1] + "-200 cursor-pointer"
                    : " cursor-not-allowed"
                }`}
              >
                <div
                  className={`w-min border-transparent flex items-center justify-center px-4 py-2 text-center ${
                    district[tab.value]
                      ? "text-" + tab.color.split("-")[1] + "-900"
                      : "text-gray-500"
                  } group border-b-2 font-medium`}
                >
                  <FontAwesomeIcon icon={tab.icon} />
                  <span className="ml-2">{tab.name}</span>
                </div>
              </div>
            );

            return district[tab.value] ? (
              <Link
                href={`/[state]/[district]${tab.link}`}
                as={`/${parametreize(state)}/${parametreize(
                  district.district
                )}${tab.link}`}
                key={tab.link}
              >
                {render}
              </Link>
            ) : (
              render
            );
          })}
        </div>
      </nav>
    </div>
  );
}
