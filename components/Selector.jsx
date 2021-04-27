import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { districtWithState } from '@lib/api';
import { parametreize, humanize, activeStates } from '@lib/utils';
import TwitterResultCard from '@components/TwitterResult';

function useFetch(searchStr, resourceType='supply', maxResults=25) {
    const url = `/api/CovidConnect?city=${searchStr}&resource_type=${resourceType}&max_results=${maxResults}`;
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUrl() {
            if (!searchStr.length ) {
                return;
            }
            const response = await fetch(url);
            const json = await response.json();
            if (!json || !json.res || !json.res.response || !json.res.response.api_response  || !json.res.response.api_response.data) {
                setData([]);
            }
            else {
                setData(json.res.response.api_response.data);
            }
            setLoading(false);
        }
        fetchUrl();
    }, [url]);
    return [data, loading];
}
export { useFetch };

const Selector = ({ data, page, placeholder, localeState, localeDistrict }) => {

    const [searchStr, setSearchStr] = useState('');
    const [editing, setEditing] = useState(false);
    const [covidConnectResults, loading] = useFetch(searchStr);
    
    const filterTests = (_data, field = null) => {
        return _data
            .filter((i) => {
                const result = !(
                    String(field ? i[field] : i)
                        .toLowerCase()
                        .search(searchStr.toLowerCase()) === -1
                );
                return result;
            })
            .splice(0, 5);
    };

    useEffect(() => {
        let curriedFn = () => {
            setEditing(false);
        };
        window.addEventListener('click', curriedFn, true);
        return () => {
            window.removeEventListener('click', curriedFn, true);
        };
    }, []);

    return (
        <>
          <input
            key="search-bar"
            type="text"
            className="mt-6 w-full h-12 rounded mb-2 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg dark:bg-gray-1200 dark:placeholder-gray-500 dark:text-gray-200"
            placeholder={placeholder}
            value={searchStr}
            onChange={(e) => {
                setEditing(false);
                setSearchStr(e.target.value);
            }}
            onClick={(e) => {
                setEditing(true);
                e.stopPropagation();
            }}
          />
          {(searchStr || editing) && (
              <div
                key="result"
                className="p-4 bg-white  dark:bg-gray-1200 dark:text-gray-400 mt-1 rounded-lg shadow-lg flex">
                {filterTests(activeStates(districtWithState(page))).length !== 0 && (
                    <div className="w-1/2 p-4">
                      <h1 className="font-semibold text-lg dark:text-gray-200">
                        {localeState}
                      </h1>
                      {filterTests(activeStates(districtWithState(page))).map((i) => {
                          return (
                              <div key={i} className="md">
                                <Link href={parametreize(i)}>{i}</Link>
                              </div>
                          );
                      })}
                    </div>
                )}
                {filterTests(districtWithState(page), 'district').length !== 0 && (
                    <div className="w-1/2 p-4">
                      <h1 className="font-semibold text-lg dark:text-gray-200">
                        {localeDistrict}
                      </h1>
                      {filterTests(districtWithState(page), 'district').map((i) => {
                          const url = `/${parametreize(i.state)}/${parametreize(
                                    i.district
                                )}/${page}`;
                          return (
                              <div key={i.district} className="md">
                                <Link href={url}>{humanize(i.district)}</Link>
                              </div>
                          );
                      })}
                    </div>
                )}
              </div>
          )}

          {
              loading ? (<></>) : (
              (searchStr || editing) && (
                  <TwitterResultCard covidConnectResults={covidConnectResults} />
              )
              )
          }
        </>
    );
};

export default Selector;
