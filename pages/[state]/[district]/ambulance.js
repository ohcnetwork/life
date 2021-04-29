import React from 'react';
import { humanize, statePaths } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function Ambulance({ state, district }) {
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
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                state={humanize(state)}
                district={humanize(district)}
                type="Ambulance"
            />
        </>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: params.state,
            district: params.district,
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('ambulance'),
        fallback: false
    };
}
