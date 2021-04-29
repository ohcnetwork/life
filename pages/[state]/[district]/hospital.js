import React from 'react';
import { statePaths, humanize } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function Hospitals({ state, district }) {
    const SEO = {
        title: `Hospitals in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Hospitals in ${humanize(district)} , ${humanize(
            state
        )} `,
        openGraph: {
            title: `Hospitals in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Hospitals in ${humanize(district)} , ${humanize(
                state
            )} `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},hospitals`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                state={humanize(state)}
                district={humanize(district)}
                type="Hospital"
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
        paths: statePaths('hospitals'),
        fallback: false
    };
}
