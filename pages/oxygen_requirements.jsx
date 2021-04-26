import React from 'react';
import Breadcumb from '@components/Breadcumb';
import { getOxygenRequirements } from '@lib/api';
import { NextSeo } from 'next-seo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import OxygenCard from '@components/OxygenCard';

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
            <section className="flex flex-col items-center space-y-4">
                {oxygenReqData.map((dt) => (
                    // TODO: replace key with a valid id
                    <OxygenCard key={dt.name + dt.district} data={dt} />
                ))}
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
