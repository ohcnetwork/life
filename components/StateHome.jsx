import { faCheckCircle, faFire, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { statesAndDistrict } from '@lib/api';
import { getStatsByState } from '@lib/search';
import React, { useState } from 'react';
import { resources } from './search/SearchIntro';
import StateSearchField from './search/StateSearchField';

const StateHome = ({ state, type }) => {

    const [resource, setResource] = useState(type || "All")

    const statesWithDistricts = statesAndDistrict();
    const states = Object.keys(statesWithDistricts);
    state = states.find((e) => e.toLowerCase() === state?.toLowerCase());

    const stats = getStatsByState(state)

    const resourceListing = [
        { name: "All", icon: faGlobeAsia, count: stats["total"], verified: stats["verified"] },
        ...resources.map(e => ({ ...e, count: stats[e.name.toLowerCase()], verified: stats[`${e.name.toLowerCase()}_verified`] }))
    ];

    return (
        <main className="max-w-6xl mx-auto py-5">
            <h1 className="font-semibold text-xl flex justify-center sm:justify-start pl-2">
                <span>Resources in {state}</span>
            </h1>
            <div className="my-5 w-full">
                <StateSearchField
                    state={state}
                    resource={resource}
                    setResource={setResource}
                />
            </div>
            <h1 className="font-semibold text-xl flex justify-center sm:justify-start pl-2 mb-3">
                <span>Overview</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {
                    resourceListing.map(({ name, icon, verified, count }) => {
                        return (
                            <div key={name} className="shadow-md rounded-md px-5 py-3 flex justify-around mx-2">
                                <header className="flex flex-col justify-center items-center text-indigo-800">
                                    <span className="mr-1 h-12 w-12 rounded-full justify-center flex items-center bg-gray-100 text-indigo-600">
                                        <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                                    </span>
                                    <span className="text-sm font-semibold">{name}</span>
                                </header>
                                <main className="flex flex-col my-2 ml-5 flex-1">
                                    <div className="flex items-center py-1 justify-end">
                                        <span className="mr-2 text-yellow-600">
                                            <FontAwesomeIcon icon={faFire} className="w-3 h-3" />
                                        </span>
                                        <span>Available: </span>
                                        <span className="ml-1 font-bold">{count}</span>
                                    </div>
                                    <div className="flex items-center py-1 justify-end">
                                        <span className="mr-2 text-yellow-700">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3" />
                                        </span>
                                        <span>Verified: </span>
                                        <span className="ml-1 font-bold">{verified}</span>
                                    </div>
                                </main>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
}

export default StateHome;