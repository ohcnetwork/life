import React, { useEffect, useState } from 'react';
import TwitterResultCard from '@components/TwitterResult';

function useFetch(searchStr, resourceType = 'supply', maxResults = 25) {
    const url = `https://covidconnect.vercel.app/api/data?city=${searchStr}&resource_type=${resourceType}&max_results=${maxResults}`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUrl() {
            if (!searchStr.length) {
                return;
            }
            const response = await fetch(url);
            const temp = await response.json();
            const json = {
                res: temp
            };
            if (
                !json ||
                !json.res ||
                !json.res.response ||
                !json.res.response.api_response ||
                !json.res.response.api_response.data
            ) {
                setData([]);
            } else {
                setData(json.res.response.api_response.data);
            }
            setLoading(false);
        }
        fetchUrl();
    }, [url]);
    return [data, loading];
}
export { useFetch };

const Selector = ({ searchStr, noRes, noResText }) => {
    const [covidConnectResults, loading] = useFetch(searchStr);

    return (
        <div className="mb-2 h-full shadow-lg max-w-3xl mx-auto">
            {noRes && (
                <div className="my-6 pl-4 dark:text-gray-600 font-medium">
                    <p>No Results Found For "{noResText}"</p>
                    <p>Trying to Search Via Twitter</p>
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
