import React from 'react';
import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHandshake, faInfo, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { NextSeo } from 'next-seo';

const HowToIntegrateData = () => {
    const data = [
        {
            icon: faDatabase,
            link:
                'https://github.com/coronasafe/life/wiki/Life-Data-Structure#sample-output-from-the-master-database',
            title: 'Sample Data',
            description: 'API Response Structures'
        },
        {
            icon: faInfo,
            link: 'https://www.loom.com/share/25d3607a99d748d6940ebc10b6acb23f',
            title: 'Instructions',
            description: 'Quick tutorial on how to integrate'
        },
        {
            icon: faPaperPlane,
            link: 'https://life-api.coronasafe.network/',
            title: 'Data APIs',
            description: 'for people making front-ends'
        }
    ];
    const SEO = {
        title: `How to Integrate Data ? `,
        openGraph: {
            title: `How to Integrate Data ? `
        }
    };
    return (
        <section className="max-w-5xl mx-auto px-2">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: 'How to Integrate Data' }]} />
            <Header title="How to Integrate Data" />
            <div className="flex justify-around flex-wrap">
                {data.map((e, i) => (
                    <a
                        href={e.link}
                        key={i}
                        target="_blank"
                        className="w-full mx-2 mt-2 md:w-auto shadow-lg rounded-md bg-white dark:bg-gray-1000 dark:text-gray-200 dark:hover:bg-gray-1200 dark:hover:text-primary-500 hover:bg-gray-100 hover:text-secondary-600 cursor-pointer py-5 px-3 flex items-center flex-row">
                        <div className="bg-gray-200 dark:bg-gray-1200 w-15 h-15 p-5 rounded-full">
                            <FontAwesomeIcon icon={e.icon} className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col px-5 mx-auto mt-3 md:mt-0 items-center">
                            <span className="font-semibold text-lg md:mr-auto">{e.title}</span>
                            <span className="text-sm font-extralight">{e.description}</span>
                        </div>
                    </a>
                ))}
            </div>
            <section className="dark:text-gray-300">
                <div className="mt-6 px-2">
                    <span className="font-bold">For all collaboration related enquiries: </span>
                    <span>
                        If you are another initiative wanting to join hands, we are a part of Covid
                        India Relief alliance, where 10+ initiatives have agreed to work on ONE
                        backend - consolidation of database to prevent redundancy and duplicacy of
                        volunteer efforts in data addition, verification, updation.
                    </span>
                </div>
                <div className="flex justify-center my-2">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FontAwesomeIcon icon={faHandshake} className="w-5 h-5 mr-2" />
                        <a href="https://bit.ly/JoinForces-CovidReliefIndiaAlliance">
                            Fill this Form
                        </a>
                    </button>
                </div>
                <div className="mt-5 px-2">
                    Feel free to share this form with other initiatives to integrate with the
                    alliance, in case they are doing the same thing as - database addition
                    verification updation. It is being coordinated by Aakriti, Prajakta, Nameet,
                    Ashish over a whatsapp group.
                    <span className="font-bold">
                        {' '}
                        The first step would be to fill the form above.{' '}
                    </span>
                    Thanks!
                </div>
            </section>
        </section>
    );
};

export default HowToIntegrateData;
