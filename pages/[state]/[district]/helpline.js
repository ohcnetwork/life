import React from 'react';
import { helplineByDistrict } from '../../../lib/api';
import { statePaths, humanize, parseDateString } from '../../../lib/utils';
import Head from 'next/head';
import Breadcumb from '../../../components/Breadcumb';
import HelplineCard from '../../../components/HelplineCard';

export default function Helpline({ state, district, helplines }) {
    return (
        <div>
            <section className="flex flex-col ml-2 md:pt-10">
                <Head>
                    <title>
                        Helpline in {humanize(district)} , {humanize(state)}
                    </title>
                </Head>
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'Helplines' }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-black text-4xl sm:text-5xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full space-y-4 mt-4 max-w-3xl w-full">
                    {helplines.map((p) => {
                        return (
                            <HelplineCard
                                key={p.id}
                                category={p.category}
                                createdTime={p.createdTime}
                                description={p.description}
                                district={p.district}
                                phone1={p.phone1}
                                source={p.source}
                                slink={p.sourceUrl}
                                state={p.state}
                                subCategory={p.subCategory}
                                lastVerifiedOn={p.lastVerifiedOn}
                                verificationStatus={p.verificationStatus}
                                name={p.name}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: params.state,
            district: params.district,
            helplines: helplineByDistrict(params.state, params.district)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('helpline'),
        fallback: false
    };
}
