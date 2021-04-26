import React from 'react';
import { getAmbulances } from '@lib/api';
import { humanize, statePaths } from '@lib/utils';
import EntityCard from '@components/EntityCard';
import Breadcumb from '@components/Breadcumb';
import { NextSeo } from 'next-seo';

export default function Ambulance({ state, district, ambulancesListing }) {
    const SEO = {
        title: `Ambulance in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Ambulance in ${humanize(district)} , ${humanize(
            state
        )} `,
        openGraph: {
            title: `Ambulance in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Ambulance in ${humanize(district)} , ${humanize(
                state
            )}  `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},ambulance`
            }
        ]
    };
    return (
        <div className="pt-10">
            <NextSeo {...SEO} />
            <Breadcumb
                list={[
                    { href: `/${state}`, name: humanize(state) },
                    { href: `/${state}/${district}`, name: humanize(district) },
                    { href: null, name: 'Ambulance' }
                ]}
            />
            <div className="w-full space-y-4 mt-4 mb-4">
                {ambulancesListing.map((a) => (
                    <EntityCard
                        key={a.id}
                        id={a.id}
                        name={a.name || 'Ambulance'}
                        phone1={a.phone1}
                        phone2={a.phone2}
                        area={a.area}
                        source={a.source}
                        createdTime={a.createdTime}
                        verificationStatus={a.verificationStatus}
                        lastVerifiedOn={a.lastVerifiedOn}
                    />
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: params.state,
            district: params.district,
            ambulancesListing: getAmbulances(params.state, params.district, true)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('ambulance'),
        fallback: false
    };
}
