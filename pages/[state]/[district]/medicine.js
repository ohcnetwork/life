import React from 'react';
import { medicineByDistrict } from '../../../lib/api';
import { statePaths, humanize } from '../../../lib/utils';
import Head from 'next/head';
import Breadcumb from '../../../components/Breadcumb';
import MedicinesCard from '../../../components/MedicinesCard';

export const config = { amp: true };
export default function Medicine({ state, district, medicineByDistrict }) {
    return (
        <div>
            <section className="flex flex-col ml-2 md:pt-10">
                <Head>
                    <title>
                        Medicines in {humanize(district)} , {humanize(state)}
                    </title>
                    <script
                        async
                        custom-element="amp-bind"
                        src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
                    <script
                        async
                        custom-element="amp-list"
                        src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
                </Head>
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
                    <amp-state id="medicines">
                        <script type="application/json">
                            {{
                                items: medicineByDistrict
                            }}
                        </script>
                    </amp-state>
                    <amp-list
                        width="auto"
                        height="100"
                        layout="fixed-height"
                        src="amp-state:medicines">
                        <template type="amp-mustache">
                            <MedicinesCard
                                key={{ id }}
                                verificationStatus={{ verificationStatus }}
                                name={{ name }}
                                distributorName={{ distributorName }}
                                city={{ city }}
                                phone1={{ phone1 }}
                                address={{ address }}
                                description={{ description }}
                                createdTime={{ createdTime }}
                                slink={{ source_link }}
                                email={{ emailId }}
                                lastVerifiedOn={{ lastVerifiedOn }}
                            />
                        </template>
                    </amp-list>
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
