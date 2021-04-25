import React from 'react';
import Breadcumb from '@components/Breadcumb';
import { getOxygenRequirements } from '@lib/api';
import { NextSeo } from 'next-seo';

function OxygenRequirements({ oxygenReqData }) {
    const SEO = {
        title: `Oxygen Requirements Across India`,
        description: `Oxygen Concentrator Requirement Across Indian Organisations`,
        openGraph: {
            title: `Oxygen Requirements Across India`,
            description: `Oxygen Concentrator Requirement Across Indian Organisations`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi, need oxygen ,oxygen`
            }
        ]
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb list={[{ href: null, name: 'Oxygen Requirement' }]} />
            </section>
            <section className="flex flex-col items-center">
                {JSON.stringify(oxygenReqData)}
            </section>
        </div>
    );
}

export default OxygenRequirements;

export async function getStaticProps({ params }) {
    return {
        props: {
            oxygenReqData: getOxygenRequirements()
        }
    };
}

// export async function getStaticPaths() {
//     return {
//         paths: statePaths('medicine'),
//         fallback: false
//     };
// }
