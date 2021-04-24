import React from 'react';
import { hospitalByDistrict } from '../../../lib/api';
import { statePaths, humanize } from '../../../lib/utils';
import Head from 'next/head';
import Breadcumb from '../../../components/Breadcumb';
import HospitalCard from '../../../components/HospitalCard';
import { NextSeo } from 'next-seo';

export default function Hospitals({ state, district, hospitalByDistrict }) {
    const SEO = {
        title: `Hospitals in ${humanize(district)} , ${humanize(state)}`,
        description: `Covid19 Resources for Hospitals in ${humanize(district)} , ${humanize(
            state
        )} } `,
        openGraph: {
            title: `Hospitals in ${humanize(district)} , ${humanize(state)}`,
            description: `Covid19 Resources for Hospitals in ${humanize(district)} , ${humanize(
                state
            )} } `
        }
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10 ">
                <Head>
                    <title>
                        Hospitals in {humanize(district)} , {humanize(state)}
                    </title>
                </Head>
                <Breadcumb
                    list={[
                        { href: `/${state}`, name: humanize(state) },
                        { href: `/${state}/${district}`, name: humanize(district) },
                        { href: null, name: 'Hospitals' }
                    ]}
                />
            </section>
            <section className="flex flex-col items-center">
                <h1 className="mt-4 font-black text-6xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                    {humanize(district)}
                </h1>
                <div className="w-full space-y-4 mt-4 max-w-3xl w-full">
                    {hospitalByDistrict.map((p) => {
                        return (
                            <HospitalCard
                                key={p.id}
                                name={p.name}
                                pointOfContact={p.pointOfContact}
                                createdTime={p.createdTime}
                                phone1={p.phone1}
                                district={p.district}
                                state={p.state}
                                verificationStatus={p.verificationStatus}
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
            hospitalByDistrict: hospitalByDistrict(params.state, params.district, true)
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: statePaths('hospitals'),
        fallback: false
    };
}
