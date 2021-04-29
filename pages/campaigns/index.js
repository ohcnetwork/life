import React from 'react';
import CampaignCard from '@components/CampaignCard';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import Header from '@components/Header';

const campaign = {
    id: 1,
    name: 'Campaign',
    text: `As of today, India is undergoing a severe second wave of COVID-19 with the world’s highest daily new cases. Hospitals and healthcare providers are running out of resources in the fight against COVID-19 and the situation on the ground is dire. Oxygen is critically required to treat patients affected with COVID-19, many of whom require hospitalization. However, there is a severe shortage of oxygen across hospitals in India.

We are raising funds to help procure and distribute oxygen concentrators across hospitals in need. These oxygen concentrators can save many thousands of lives and bolster much-needed resources for hospitals. They can also be used to treat outpatients, reducing the load on hospital beds and easing the stress faced by patients.

## How you can contribute:

Please donate at the links below.

### Individuals in India:

These contributions are eligible for tax benefits for Indian citizens under Sec 80G

- *Donate on Impactguru:* https://www.impactguru.com/fundraiser/oxygen

- *Donate on Milaap:* https://milaap.org/fundraisers/Donate-for-Oxygen

### Individuals in other countries:

US citizens contributing >$1000 can avail tax exemptions for donations made on Milaap

- *Donate on Milaap:* https://milaap.org/fundraisers/Donate-for-Oxygen.


#### Create a supporting sub-campaign: https://www.ketto.org/fundraiser/Donateforoxygen

### Organisations / CSR Funding

**Individual large grants from India or other countries:** For grants > Rs.7,50,000 or $10000, please write to us directly at shubha@swasthapp.org

**Organization based or CSR Funding:** To contribute as an organization from India or other countries, please write to us directly at shubha@swasthapp.org

**Long term partners:** You can also partner with Swasth.app on its longer term mission in accelerating digital health tool adoption across India through open source products. Please write to shubha@swasthapp.org to learn more.`
};

const Campaigns = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'campaigns');
    return (
        <section className="max-w-5xl mx-auto px-2">
            <Breadcumb list={[{ href: null, name: 'Campaigns' }]} />
            <Header title="Campaigns" />
            <section className="flex flex-col items-center">
                <div className=" w-full ">
                    <div className="pt-5 w-3/4 mx-auto md:px-10">
                        <Breadcumb list={[{ href: null, name: 'Campaigns' }]} />
                        <div className="pt-3 mx-auto w-min flex flex-col items-center">
                            <FontAwesomeIcon
                                className="dark:text-white fa-3x w-3/4 min-w-5"
                                title="Support"
                                icon={faHandHoldingHeart}
                            />
                            <h1 className="mt-6 mx-auto font-black text-4xl sm:text-5xl text-gray-900 dark:text-gray-200 text-center">
                                {campaign.name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="py-10 px-0 space-y-4 md:px-10 bg-gray-100 dark:text-white mt-6 w-full  dark:bg-gray-1100">
                    <CampaignCard
                        key={campaign.id}
                        text={campaign.text}
                        open={campaign.length === 1}
                    />
                </div>
            </section>
        </section>
    );
};
export default Campaigns;
