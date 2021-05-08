import React from 'react';
import { statePaths, humanize } from '@lib/utils';
import { NextSeo } from 'next-seo';
import DetailedHome from '@components/DetailedHome';

export default function State({ state, district }) {
    const SEO = {
        title: `${humanize(district)} , ${humanize(state)} | Coronasafe network`,
        description: `Covid19 Resources for ${humanize(district)} , ${humanize(state)} `,
        openGraph: {
            title: `${humanize(district)} , ${humanize(state)} | Coronasafe network`,
            description: `Covid19 Resources for ${humanize(district)} , ${humanize(state)} `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},hospital,ambulance,helpline,oxygen,medicine`
            }
        ]
    };
    return (
        <>
            <NextSeo {...SEO} />
            <DetailedHome
                key={state + district}
                state={humanize(state)}
                district={humanize(district)}
            />
        </>
    );
}

export async function getStaticProps({ params }) {
    return {
        props: {
            state: params.state,
            district: params.district
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('all'),
        fallback: false
    };
}
