import React from 'react';
import { humanize, statePaths } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function All({ state, district }) {
    const SEO = {
        title: `All Resources in ${humanize(district)} , ${humanize(state)}`,
        description: `All COVID-19 Resources in ${humanize(district)} , ${humanize(
            state
        )} `,
        openGraph: {
            title: `All Resources in ${humanize(district)} , ${humanize(state)}`,
            description: `All COVID-19 Resources in ${humanize(district)} , ${humanize(
                state
            )}  `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},all,resources,oxygen,medicine,hospital,helpline`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                state={humanize(state)}
                district={humanize(district)}
                type="All"
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
        paths: statePaths('all'),
        fallback: false
    };
}
