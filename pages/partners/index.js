import Breadcumb from '@components/Breadcumb';
import PartnerCard from '@components/PartnerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const partners = [
    {
        id: '1',
        name: 'Covid India Campaign',
        logoURL: 'https://covidindiacampaign.org/wp-content/uploads/2020/05/logo-2-1.png',
        url: 'http://www.covidindiacampaign.org/'
    },
    {
        id: '2',
        name: 'PARLIAMENTARIANS WITH INNOVATORS FOR INDIA',
        logoURL: 'https://ik.imagekit.io/img1991/PIINDIA/shared/pi_india_logo_yellow_8eQILlgiD.svg',
        url: 'https://piindia.org/index-web.html'
    },
    {
        id: '3',
        name: 'Step one',
        logoURL: 'https://projectstepone.org/wp-content/uploads/2020/10/StepOne-logo-300x83.png',
        url: 'https://projectstepone.org/'
    },
    {
        id: '4',
        name: 'Swasth',
        logoURL: 'https://www.swasth.app/static/media/logo.9c8319e6.svg',
        url: 'https://www.swasth.app/home'
    },
    {
        id: '5',
        name: 'Coronasafe',
        logoURL: 'https://assets.zyrosite.com//Yyve4DOKXjcZ8bJ0/coronasafe-logo-m5KOkkg54nIzwx6x.svg',
        url: 'https://piindia.org/index-web.html'
    },
    {
        id: '6',
        name: 'India covid resources',
        logoURL: 'https://res.cloudinary.com/glide/image/fetch/f_auto,w_150,h_150,c_lfill/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fglide-prod.appspot.com%2Fo%2Ficon-images%252Fanonymous-845cd98e-e571-483a-984b-daebd749be79.png%3Falt%3Dmedia%26token%3Db8da4311-19b4-49c5-868c-dc46d73b1e0f',
        url: 'https://indiacovidresources.in/'
    },
    {
        id: '7',
        name: 'The product folks',
        logoURL: 'https://static.wixstatic.com/media/7c7963_a199f541090c4734a25b732b94f1ad3a~mv2.png/v1/fill/w_135,h_79,al_c,q_85,usm_0.66_1.00_0.01/TPF_Logo.webp',
        url: 'https://www.theproductfolks.com/'
    }
];

const Partners = () => {
    return (
        <section className="md:pt-10">
            <Breadcumb list={[{ href: null, name: 'Partner with us' }]} />

            <section className = "py-10 dark:text-gray-500 text-gray-900 px-2 md:mx-10">
                <h1 className = "mt-4 text-gray-900 dark:text-gray-200 mr-4 text-4xl font-bold">
                    Partner with us
                </h1>

                <div className = "flex justify-between items-center w-full">
                    <div className="space-y-4 w-full my-4 dark:text-white">
                        Citizen's groups and civil society organisations providing Covid Relief have formed 
                        'Covid Relief India Alliance'. The goal is to consolidate our efforts and provide relief to 
                        the remotest region of India with equal rigour. The group has 15+ projects collaborating 
                        already. If you know a citizen or an organisation running Covid Relief Projects, ask them to 
                        join forces! Fill up&nbsp;
                        <a href = "https://forms.gle/mipGNhsuVFXWiTGG6/"
                        className = "underline text-primary-600 hover:text-primary-800">this form</a> 
                        &nbsp;and one of our volunteers will reach out to you soon!
                    </div>
                </div>

                <div className = "flex justify-center items-center">
                    <a href="https://github.com/coronasafe/life/files/6388145/Unified.Backend.Partnership_Covid19.Citizens.Alliance.5.pdf">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border-2 border-gray-700 shadow-sm
                                text-sm leading-4 font-medium rounded-md dark:text-white text-black
                                dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none"
                            >
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-2"
                                title="Covid 19 Statistics"
                                icon={faFileDownload}
                            />
                            Unified backend partnership
                        </button>
                    </a>
                </div>

            </section>

            <section className="pb-10 dark:text-gray-500 text-gray-900 px-2 md:mx-10">
                <div className="flex flex-row">
                    <div>
                        <h1 className="text-gray-900 dark:text-gray-200 mr-4 text-4xl font-bold">
                            Partners
                        </h1>
                    </div>
                </div>
                <div className="flex flex-warp justify-stretch space-y-6 dark:text-white mt-6 w-full" align="center">
                    <ul className = "flex flex-wrap items-stretch">
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
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default Partners;
