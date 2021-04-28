import React from 'react';
import CampaignCard from '@components/CampaignCard';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

const campaign = [
    {
        id: 1,
        name: 'Swasth',
        logoUrl: 'https://www.swasth.app/static/media/logo.9c8319e6.svg',
        donateAt: 'https://www.impactguru.com/fundraiser/oxygen',
        text: `As of today, India is undergoing a severe second wave with the world’s highest daily cases. Hospitals and healthcare providers are running out of resources in the fight against COVID-19 and the situation on the ground is dire. Oxygen is critically required to treat patients affected with COVID, many of whom require hospitalization due to fluctuating oxygen levels. However, there is a severe shortage of oxygen availability across hospitals in India. Oxygen concentrators are alternate devices to oxygen cylinders – while cylinders contain a finite amount of oxygen supply, a concentrator recycles oxygen from the air and delivers it to the patient. They can be used to manage patient requirements without looking for external sources of oxygen.

        Swasth Digital Health Foundation (Swasth.app) along with ACT Grants is looking to procure oxygen concentrators and channel them to hospitals across levels of care in remote areas for COVID response and long-term health-system strengthening. These oxygen concentrators can save many thousands of lives and bolster much-needed resources for hospitals. They can also be used to treat outpatients, reducing the load on hospital beds and easing the stress faced by patients.
        • A high flow concentrator costs Rs.85000 and treat up to 550 patients with a severe or critical illness.
        • A low flow concentrator costs Rs.45000 and can treat up to 900 patients with mild to moderate illness

        Swasth is raising funds to support this effort. Please contribute by donating at: https://www.impactguru.com/fundraiser/oxygen
        The distribution and allocation of concentrators will be a transparent process with the method and impact metrics published openly so you can be assured of your contributions saving lives.
        If you are a company looking to deploy a CSR budget or an individual donor willing to contribute, please email us at shubha@swasthapp.com. We look forward to your support.`
    }
];

const Campaigns = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'campaigns');
    return (
        <section className="mt-10 md:pt-10 bg-gray-200 dark:bg-gray-1200">
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
                                Swasth
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="py-10 px-0 space-y-4 md:px-10 bg-gray-100 dark:text-white mt-6 w-full  dark:bg-gray-1100" >
                    {campaign.map((camp) => {
                        return (
                            <CampaignCard
                                key={camp.id}
                                name={camp.name}
                                text={t.text}
                                logoUrl={camp.logoUrl}
                                donate={camp.donateAt}
                                open={campaign.length === 1}
                            />
                        );
                    })}
                </div>
            </section>
        </section>
    );
};
export default Campaigns;
