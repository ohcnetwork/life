import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tabs = ({ tabsInfo, selectedFilter, updateFilterCB }) => {
    const defaultStyle =
        'md:w-min w-1/3 border-transparent flex items-center justify-center px-2 py-2 text-center text-gray-700 dark:text-gray-200 group border-b-2 font-medium text-sm cursor-pointer ';
    const activeStyle =
        defaultStyle +
        'border-indigo-500 dark:border-indigo-300 text-indigo-600 dark:text-primary-400';

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <nav className="flex flex-wrap justify-between px-2" aria-label="Tabs">
                {tabsInfo.map((tab) => (
                    <div
                        key={tab.value}
                        onClick={(_) => updateFilterCB(tab.value)}
                        className={selectedFilter === tab.value ? activeStyle : defaultStyle}>
                        <FontAwesomeIcon icon={tab.icon} />
                        <span className="ml-2 whitespace-nowrap">{tab.name}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Tabs;
