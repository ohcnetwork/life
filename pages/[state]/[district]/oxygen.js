import React from 'react';
import { statePaths, humanize } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function Oxygen({ state, district }) {
    const SEO = {
        title: `Oxygen in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Oxygen in ${humanize(district)} , ${humanize(state)}`,
        openGraph: {
            title: `Oxygen in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Oxygen in ${humanize(district)} , ${humanize(
                state
            )}`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},oxygen`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                state={humanize(state)}
                district={humanize(district)}
                type="Oxygen"
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
        paths: statePaths('oxygen'),
        fallback: false
    };
}
