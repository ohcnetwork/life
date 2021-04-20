import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Tabs = ({ tabsInfo }) => {

    const router = useRouter();

    const defaultStyle = "border-transparent text-gray-500 hover:text-yellow-700 hover:border-gray-300 group flex items-center py-4 px-1 border-b-2 font-medium text-sm";
    const activeStyle = defaultStyle + "border-indigo-500 text-indigo-600"

    return (
        <div className="border-b border-gray-200 mb-2">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabsInfo.map(tab => (
                    <a
                        href={tab.link}
                        className={(router.pathname.startsWith(tab.link) ? activeStyle : defaultStyle)}
                    >
                        <FontAwesomeIcon icon={tab.icon} />
                        <span className="ml-2">{tab.name}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Tabs;
