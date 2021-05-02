import Breadcumb from '@components/Breadcumb';
import PartnerCard from '@components/PartnerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { NextSeo } from 'next-seo';
import React from 'react';
import Header from '@components/Header';

const partners = [
    {
        id: '1',
        name: 'Covid India Campaign',
        logoURL: '/static/partners/covid_india_campaign_org.png',
        url: 'http://www.covidindiacampaign.org/'
    },
    {
        id: '2',
        name: 'PI India',
        logoURL: '/static/partners/pi_india.svg',
        url: 'https://piindia.org/index-web.html'
    },
    {
        id: '3',
        name: 'Step One',
        logoURL: '/static/partners/step_one.png',
        url: 'https://projectstepone.org/'
    },
    {
        id: '4',
        name: 'Swasth',
        logoURL: '/static/partners/swasth_app.svg',
        url: 'https://www.swasth.app/home'
    },
    {
        id: '5',
        name: 'Coronasafe',
        logoURL: '/static/partners/coronasafe.svg',
        url: 'https://coronasafe.network/'
    },
    {
        id: '6',
        name: 'India Covid Resources',
        logoURL: '/static/partners/india_covid_resources.png',
        url: 'https://indiacovidresources.in/'
    },
    {
        id: '7',
        name: 'The Product Folks',
        logoURL: '/static/partners/the_product_folks.webp',
        url: 'https://www.theproductfolks.com/'
    }
];

const Partners = () => {
    const SEO = {
        title: 'Life | Partners',
        description: `Citizen's groups and civil society organisations providing Covid Relief have formed
        'Covid Relief India Alliance'. The goal is to consolidate our efforts and provide relief to
        the remotest region of India with equal rigour. The group has 15+ projects collaborating
        already`,
        openGraph: {
            title: 'Life | Partners',
            description: `Citizen's groups and civil society organisations providing Covid Relief have formed
            'Covid Relief India Alliance'. The goal is to consolidate our efforts and provide relief to
            the remotest region of India with equal rigour. The group has 15+ projects collaborating
            already`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `life, partners, covid19, coronasafe, covid india campaign, the product folks,
                PARLIAMENTARIANS WITH INNOVATORS FOR INDIA, Step one, swasth, india covid resources`
            }
        ]
    };

    return (
        <section className="max-w-5xl mx-auto px-2">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: 'Partner with us' }]} />
            <Header title="Partner with Us" />
            <section className="dark:text-gray-500 text-gray-900 px-2 md:mx-10">
                <div className="flex flex-col justify-between items-center w-full">
                    <div className="w-full my-4 dark:text-white">
                        Citizen's groups and civil society organisations providing Covid Relief have
                        formed 'Covid Relief India Alliance'. The goal is to consolidate our efforts
                        and provide relief to the remotest region of India with equal rigour. The
                        group has 15+ projects collaborating already. If you know a citizen or an
                        organisation running Covid Relief Projects, ask them to join forces!
                    </div>
                    <div className="flex items-center flex-wrap justify-center w-full my-4 dark:text-white">
                        <button
                            type="button"
                            className="inline-flex mr-2 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 mr-2" />
                            <a href="https://bit.ly/JoinForces-CovidReliefIndiaAlliance">
                                Fill this Form
                            </a>
                        </button>
                        <span> and one of our volunteers will reach out to you soon!</span>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <a href="https://github.com/coronasafe/life/files/6388145/Unified.Backend.Partnership_Covid19.Citizens.Alliance.5.pdf">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-gray-900 shadow-sm
                                text-sm leading-4 font-medium rounded-md dark:text-white text-black
                                dark:bg-gray-1200 bg-white hover:opacity-60 focus:outline-none my-5">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-2"
                                title="Covid 19 Statistics"
                                icon={faFileDownload}
                            />
                            Unified Backend Partnership
                        </button>
                    </a>
                </div>
            </section>

            <section className="pb-10 dark:text-gray-500 text-gray-900  md:mx-10" id="partner">
                <div className="flex flex-row">
                    <div>
                        <h1 className="text-gray-900 dark:text-gray-200 mr-4 text-4xl font-bold">
                            Partners
                        </h1>
                    </div>
                </div>
                <div
                    className="flex flex-warp justify-center space-y-6 dark:text-white mt-6 w-full"
                    align="center">
                    <div className="flex flex-wrap justify-around md:justify-center">
                        {partners.map((p) => {
                            return (
                                <PartnerCard
                                    key={p.id}
                                    name={p.name}
                                    logoURL={p.logoURL}
                                    url={p.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Partners;
