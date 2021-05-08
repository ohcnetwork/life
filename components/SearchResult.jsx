import { filterResourcesBy } from '@lib/utils';
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import NoResultFound from './NoResultFound';
const SearchResult = ({ resources, type, district, changeTabs, currentLocation }) => {
    const [selectedFilter, setSelectedFilter] = useState('show_all');
    const resourcesListing = filterResourcesBy(resources, selectedFilter);
    const noData = resourcesListing.length === 0 && selectedFilter === 'show_all';
    if (noData) {
        changeTabs('twitter_on_no_data');
    }

    return (
        <section>
            <div className="mt-8 px-5 flex flex-wrap justify-around items-center dark:text-gray-300">
                {!noData && (
                    <>
                        <h1 className="font-semibold">
                            Search Results:{' '}
                            <span className="font-normal">{resourcesListing?.length}</span>
                        </h1>
                        <div className="flex items-center space-x-5 md:space-x-8">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="show_all"
                                    onChange={({ target: { value } }) => setSelectedFilter(value)}
                                    checked={selectedFilter === 'show_all'}
                                    name="status"
                                    id="show_all"
                                />
                                <label className="ml-2" htmlFor="show_all">
                                    Show All
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="verified"
                                    onChange={({ target: { value } }) => setSelectedFilter(value)}
                                    checked={selectedFilter === 'verified'}
                                    name="status"
                                    id="verified"
                                />
                                <label className="ml-2" htmlFor="verified">
                                    Verified
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="not_verified"
                                    onChange={({ target: { value } }) => setSelectedFilter(value)}
                                    checked={selectedFilter === 'not_verified'}
                                    name="status"
                                    id="not_verified"
                                />
                                <label className="ml-2" htmlFor="not_verified">
                                    Not Verified
                                </label>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <main className="pb-16">
                {resourcesListing.length > 0 ? (
                    resourcesListing.map((resource) => {
                        return (
                            <ResourceCard
                                key={resource.external_id}
                                type={type}
                                data={resource}
                                currentLocation={currentLocation}
                            />
                        );
                    })
                ) : (
                    <div className="my-5">
                        <NoResultFound type={type} text={district} />
                    </div>
                )}
            </main>
        </section>
    );
};

export default SearchResult;
