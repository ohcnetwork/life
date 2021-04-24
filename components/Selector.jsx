import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { districtWithState, getStates } from '../lib/api';
import { parametreize, humanize, activeStates } from '../lib/utils';

const Selector = ({ data, page }) => {
    const [searchStr, setSearchStr] = useState('');
    const [editing, setEditing] = useState(false);

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
                placeholder={`Search for ${page} availability in a State or District`}
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
                            <h1 className="font-semibold text-lg dark:text-gray-200">State</h1>
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
                            <h1 className="font-semibold text-lg dark:text-gray-200">District</h1>
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
        </>
    );
};

export default Selector;
