import React from 'react';
import { medicineByDistrict } from '@lib/api';
import { statePaths, humanize } from '@lib/utils';
import Breadcumb from '@components/Breadcumb';
import EntityCard from '@components/EntityCard';
import { NextSeo } from 'next-seo';

export default function Medicine({ state, district, medicineByDistrict }) {
    const SEO = {
        title: `Medicines in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Medicines in ${humanize(district)} , ${humanize(
            state
        )}  `,
        openGraph: {
            title: `Medicines in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Medicines in ${humanize(district)} , ${humanize(
                state
            )} `
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,${humanize(
                    district
                )},${humanize(state)},medicines`
            }
        ]
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'Medicines' }
                    ]}
                />
            </section>
            <section className="w-full flex flex-col items-center ">
                <h1 className="mt-4 font-black text-6xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full space-y-4 mt-4 mb-4">
                    {medicineByDistrict.map((p) => {
                        return (
                            <EntityCard
                                key={p.id}
                                id={p.id}
                                verificationStatus={p.verificationStatus}
                                name={p.name}
                                city={p.city}
                                phone1={p.phone1}
                                phone2={p.phone2}
                                address={p.address}
                                description={p.description}
                                createdTime={p.createdTime}
                                sourceLink={p.source_link}
                                email1={p.emailId}
                                lastVerifiedOn={p.lastVerifiedOn}
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
            medicineByDistrict: medicineByDistrict(params.state, params.district, true)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('medicine'),
        fallback: false
    };
}
