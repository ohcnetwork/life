import { filterResourcesBy } from '@lib/utils';
import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import NoResultFound from './NoResultFound';
import Pagination from "react-js-pagination";

const SearchResult = ({ resources, type, district, changeTabs, currentLocation }) => {
    const [selectedFilter, setSelectedFilter] = useState('show_all');
    const resourcesListing = filterResourcesBy(resources, selectedFilter);
    const noData = resourcesListing.length === 0 && selectedFilter === 'show_all';
    if (noData) {
        changeTabs('twitter_on_no_data');
    }

    const itemsPerPage = 25;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => setCurrentPage(1), [selectedFilter])

    return (
        <section>
            <div className="mt-8 px-5 flex flex-wrap justify-around items-center dark:text-gray-300">
                {!noData && (
                    <>
                        <h1 className="font-semibold pr-6">
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{((currentPage-1)*itemsPerPage)+1}</span> to <span className="font-medium">{currentPage*itemsPerPage < resourcesListing.length ? currentPage*itemsPerPage : resourcesListing.length}</span> of{' '}
                                <span className="font-medium">{resourcesListing.length}</span> results
                            </p>
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
            <main>
                {resourcesListing.length > 0 ? (
                    <>
                        {resourcesListing.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((resource) => {
                            return (
                                <ResourceCard key={resource.external_id} type={type} data={resource} currentLocation={currentLocation} />
                            );
                        })}

                        <div className="mt-14 text-center">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={itemsPerPage}
                                totalItemsCount={resourcesListing.length}
                                pageRangeDisplayed={5}
                                onChange={(pageNumber) => setCurrentPage(pageNumber)}
                                className="bg-red"
                                innerClass="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                itemClass="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-white text-sm font-medium text-gray-900 hover:bg-gray-400"
                                activeClass="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-gray-400 text-sm font-extrabold text-black"
                                itemClassFirst="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-white text-sm font-medium text-gray-700 hover:bg-gray-400 rounded-l"
                                itemClassLast="relative inline-flex items-center px-4 py-2 border border-gray-600 bg-white text-sm font-medium text-gray-700 hover:bg-gray-400 rounded-r"
                            />
                        </div>
                    </>
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
