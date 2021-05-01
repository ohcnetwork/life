import React, { useEffect, useState } from 'react';
import TwitterResultCard from '@components/TwitterResult';
import { useFetch } from '@components/Selector'

const Selector = ({ searchStr, noRes, noResText }) => {
    const [covidConnectResults, loading] = useFetch(searchStr);

    return (
        <div className="mb-2 h-full shadow-lg max-w-3xl mx-auto">
            {noRes && (
                <div className="my-6 pl-4 dark:text-gray-600 font-medium">
                    <p>No Results Found For "{noResText}"</p>
                    <p>Showing the results from twitter</p>
                </div>
            )}
            {searchStr && (
                <TwitterResultCard
                    searchStr={searchStr}
                    loading={loading}
                    covidConnectResults={covidConnectResults}
                />
            )}
        </div>
    );
};

export default Selector;
