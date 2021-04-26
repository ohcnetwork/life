import React from 'react';
import { getVaccine } from '@lib/api';
import { statePaths, humanize } from '@lib/utils';
import EntityCard from '@components/EntityCard';
import Breadcumb from '@components/Breadcumb';
import { NextSeo } from 'next-seo';

export default function Vaccine({ state, district, vaccineListing }) {
    const SEO = {
        title: `Vaccine in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Vaccine in ${humanize(district)} , ${humanize(state)}`,
        openGraph: {
            title: `Vaccine in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Vaccine in ${humanize(district)} , ${humanize(
                state
            )}`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},vaccine`
            }
        ]
    };
    return (
        <div className="pt-10">
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'Vaccine' }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-black text-6xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full mt-4 p-4 space-y-4">
                    {vaccineListing.map((v) => {
                        return (
                            <EntityCard
                                key={v.id}
                                id={v.id}
                                name={v.name}
                                address={v.address}
                                state={state}
                                status={status}
                                district={district}
                                createdTime={v.createdTime}
                                verificationStatus={v.verificationStatus}
                                lastVerifiedOn={v.lastVerifiedOn}
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
            vaccineListing: getVaccine(params.state, params.district, true)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('oxygen'),
        fallback: false
    };
}
