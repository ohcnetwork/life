import React from 'react';
import { plasmaByDistrict } from '../../../lib/api';
import { humanize, statePaths } from '../../../lib/utils';
import Breadcumb from '../../../components/Breadcumb';
import PlasmaCard from '../../../components/PlasmaCard';
import { NextSeo } from 'next-seo';
export default function Plasma({ state, district, plasmaListing }) {
    const SEO = {
        title: `Plasma in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Plasma in ${humanize(district)} , ${humanize(
            state
        )} } `,
        openGraph: {
            title: `Plasma in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Plasma in ${humanize(district)} , ${humanize(
                state
            )} } `
        }
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'Plasma' }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-black text-6xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full space-y-4 mt-4 max-w-3xl w-full">
                    {plasmaListing.map((p) => {
                        return (
                            <PlasmaCard
                                city={p.city}
                                createdTime={p.createdTime}
                                description={p.description}
                                district={p.district}
                                name={p.name}
                                phone1={p.phone1}
                                sourceLink={p.sourceLink}
                                state={p.state}
                                lastVerifiedOn={p.lastVerifiedOn}
                                verificationStatus={p.verificationStatus}
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
            plasmaListing: plasmaByDistrict(params.state, params.district)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('plasma'),
        fallback: false
    };
}
