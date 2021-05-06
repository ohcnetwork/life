import React from 'react';
import { humanize, statePaths } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function Food({ state, district }) {
    const SEO = {
        title: `Foods in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Food Resources in ${humanize(district)} , ${humanize(
            state
        )} `,
        openGraph: {
            title: `Foods in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Food Resources in ${humanize(district)} , ${humanize(
                state
            )}  `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},food`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                state={humanize(state)}
                district={humanize(district)}
                type="Food"
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
        paths: statePaths('Food'),
        fallback: false
    };
}
