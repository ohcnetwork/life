import React from 'react';
import Breadcumb from '@components/Breadcumb';
import { getOxygenRequirements } from '@lib/api';
import { NextSeo } from 'next-seo';
import SocialSharing from '@components/SocialSharing';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
                        <div className="w-full flex items-center pt-2">
                            <div className="ml-auto">
                                <SocialSharing
                                    url={'pageUrl'}
                                    twitterText={` More Info: ${'pageUrl'}`}
                                    copyText={'copyText'}
                                />
                            </div>
                        </div>
                        <div className="p-4 flex justify-between flex-wrap">
                            <div>
                                <div className="font-bold text-2xl">
                                    <h1 className="flex dark:text-white items-center justify-start">
                                        {dt.name}
                                    </h1>
                                    <p>{dt.govtOrNonGovt}</p>
                                    {dt.state && dt.district && (
                                        <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold dark:text-white">
                                            <FontAwesomeIcon
                                                icon={faMapMarkerAlt}
                                                className="w-3 mr-2"
                                            />
                                            <span className="mr-2">{dt.villageTownCity}</span>
                                            <span className="mr-2">{dt.district}</span>|
                                            <span className="ml-2">
                                                {dt.state} {dt.pincode}
                                            </span>
                                        </div>
                                    )}
                                    <div className="w-11/12 mt-2">
                                        <div className="text-sm">{dt.type}</div>
                                        <div className="text-sm">{dt.beds} Beds</div>
                                        <div className="text-sm">
                                            {dt.covidBeds} - Covid Beds Beds
                                        </div>
                                    </div>
                                    {dt.approximatePatientsServedPerDay && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                {dt.approximatePatientsServedPerDay} ~Patients
                                                Served/Day
                                            </div>
                                        </div>
                                    )}
                                    {dt.crateringToPeople && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                {dt.crateringToPeople} - Cratering
                                            </div>
                                        </div>
                                    )}
                                    {dt.highFlowOxygenConcentratorsRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                High Oxygen Conc Needed -{' '}
                                                {dt.highFlowOxygenConcentratorsRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.lowFlowOxygenConcentratorsRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Low Oxygen Conc Needed -{' '}
                                                {dt.lowFlowOxygenConcentratorsRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.oxygenRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Oxygen Required - {dt.oxygenRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.favipiravirRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Favipiravir Required - {dt.favipiravirRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.ppeKitsRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                PPE Kits Required - {dt.ppeKitsRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.remdesivirRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Remdesivir Required - {dt.remdesivirRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.otherItemsRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Others Required - {dt.otherItemsRequired}
                                            </div>
                                        </div>
                                    )}
                                    {dt.tocilizumabRequired && (
                                        <div className=" mt-2">
                                            <div className="text-sm">
                                                Tocilizumab Required {dt.tocilizumabRequired}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
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

// export async function getStaticPaths() {
//     return {
//         paths: statePaths('medicine'),
//         fallback: false
//     };
// }
