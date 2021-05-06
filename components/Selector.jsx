import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { districtWithState } from '@lib/api';
import { parametreize, humanize, activeStates } from '@lib/utils';
import TwitterResultCard from '@components/TwitterResult';

import PulseSvg from '@components/icons/PulseIcon';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PulseSvg from '@components/PulseSvg';
import useFetch from '@hooks/use-fetch';

const Selector = ({ data, page, placeholder, localeState, localeDistrict }) => {
    const [searchStr, setSearchStr] = useState('');
    const [editing, setEditing] = useState(false);
    const [covidConnectResults, loading] = useFetch({ city: searchStr });

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
            <div className="mb-2 shadow-lg">
                <input
                    key="search-bar"
                    type="text"
                    className="mt-6 w-full h-12 rounded-t  focus:outline-none focus:shadow-outline text-xl px-8  dark:bg-gray-1200  dark:placeholder-gray-500 dark:text-gray-200"
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
                <div className="px-8 py-2  text-black-500 bg-gray-100 dark:bg-gray-1200 opacity-80 rounded-b text">
                    <FontAwesomeIcon
                        className="text-blue-500 mr-2"
                        title="Share on Twitter"
                        icon={faTwitter}
                    />
                  <span>Type a city name to see Real Time Tweets Below</span>
                    <span className="ml-2">
                        <PulseSvg className="inline stroke-current text-blue-600" width={25} />
                    </span>
                </div>
            </div>
            {(searchStr || editing) && (
                <div
                    key="result"
                    className="p-4 bg-white  dark:bg-gray-1200 dark:text-gray-400 mt-1 rounded-lg rounded-b-none shadow-lg flex">
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
                                )}/${page === 'all' ? '' : page}`;
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
            {loading ? (
                <></>
            ) : (
                (searchStr || editing) && (
                    <TwitterResultCard
                        searchStr={searchStr}
                        covidConnectResults={covidConnectResults}
                    />
                )
            )}
        </>
    );
};

export default Selector;
