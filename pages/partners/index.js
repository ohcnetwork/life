import Breadcumb from '@components/Breadcumb';
import PartnerCard from '@components/PartnerCard';
import React from 'react';

const partners = [
    {
        id: '1',
        name: 'Covid India Campaign',
        logoURL: 'https://covidindiacampaign.org/wp-content/uploads/2020/05/logo-2-1.png',
        url: 'http://www.covidindiacampaign.org/'
    }
];

const Partners = () => {
    return (
        <section className="md:pt-10">
            <Breadcumb list={[{ href: null, name: 'Partners' }]} />
            <section className="flex flex-col items-center">
                <div className="flex flex-row">
                    <div>
                        <h1 className="mt-4 mr-4 font-black text-4xl sm:text-5xl text-gray-900 dark:text-gray-200 md:text-left text-center">
                            Partners
                        </h1>
                    </div>
                </div>
                <div className="space-y-6 mt-12 dark:text-white mt-6 w-full" align="center">
                    <ul>
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
