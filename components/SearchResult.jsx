import { filterResourcesBy } from '@lib/utils';
import React, { useState } from 'react';
import NoResultFound from './NoResultFound';
import ResourceCard from './ResourceCard';
import TwitterContainer from '@components/TwitterContainer';
const SearchResult = ({ resources, type, district, state, searchStr }) => {
    const [selectedFilter, setSelectedFilter] = useState('show_all');

    const resourcesListing = filterResourcesBy(resources, selectedFilter);
    const noData = resourcesListing.length === 0 && selectedFilter === 'show_all';

    return (
        <section>
            <div className="mt-8 px-5 flex flex-wrap justify-around items-center dark:text-gray-300">
                {noData || (
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
                    resourcesListing.map((resource, id) => (
                        <ResourceCard key={resource.id + id} type={type} data={resource} />
                    ))
                ) : (
                    <div className="my-5">
                        <TwitterContainer
                            noRes
                            noResText={`${type} in ${district}`}
                            searchStr={searchStr}
                        />
                    </div>
                )}
            </main>
        </section>
    );
};

export default SearchResult;
