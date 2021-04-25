import React, { useState } from 'react';
import { getDistricts } from '../../lib/api';
import { parametreize, statesStaticPaths } from '../../lib/utils';
import { humanize } from '../../lib/utils';
import TabLinks from '../../components/TabLinks';
import Breadcumb from '../../components/Breadcumb';
import Link from 'next/link';
import { tabsInfo } from '../../lib/tabs';
import { NextSeo } from 'next-seo';

export default function State({ state }) {
    // data.filter((el) => el.district.toLowerCase().includes(search));
    let districts = getDistricts(state);
    const [searchStr, setSearchStr] = useState('');
    const filterDistricts = districts.filter((el) =>
        el.district.toLowerCase().includes(searchStr.toLowerCase())
    );
    const SEO = {
        title: `${humanize(state)} | Coronasafe network`,
        description: `Covid19 Resources for ${humanize(state)} `,
        openGraph: {
            title: `${humanize(state)} | Coronasafe network`,
            description: `Covid19 Resources for ${humanize(state)} `
        }
    };
    return (
        <section className="md:pt-10">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: humanize(state) }]} />
            <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl md:text-left text-gray-900 dark:text-gray-800">
                Search Result For{' '}
                <span className="mt-4 font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-200 md:text-left">
                    "{humanize(state)}"
                </span>
            </h1>
            <div className="w-full mt-2">
                <div className="max-w-xl">
                    <input
                        type="text"
                        className="mt-6 w-full h-12 border-2 border-gray-400 rounded mb-2 focus:outline-none focus:border-indigo-600 text-xl px-8 bg-gray-200 dark:bg-gray-1200 dark:border-gray-800 placeholder-gray-500 dark:text-white placeholder-gray-500"
                        placeholder={`Search Districts of ${humanize(state)}`}
                        value={searchStr}
                        onChange={(e) => setSearchStr(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap overflow-hidden mt-8">
                    {filterDistricts
                        .sort((ex, ey) =>
                            ex.district.toLowerCase() < ey.district.toLowerCase() ? -1 : 1
                        )
                        .map((f) => (
                            <div
                                key={f.district}
                                className="w-full rounded overflow-hidden md:w-1/2 mb-6 hover:bg-gray-200 dark:hover:bg-gray-1200">
                                <div className="p-4">
                                    <Link
                                        href={`/${parametreize(state)}/${parametreize(
                                            f.district
                                        )}`}>
                                        <span className="font-semibold text-2xl md:text-4xl py-6 hover:underline block text-center cursor-pointer dark:text-gray-200">
                                            {humanize(f.district)}
                                        </span>
                                    </Link>
                                    <div className="max-w-3xl mx-auto mt-6">
                                        <TabLinks tabsInfo={tabsInfo} state={state} district={f} />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: parametreize(params.state)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statesStaticPaths(),
        fallback: false
    };
}
