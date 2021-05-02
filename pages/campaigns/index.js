import React, { useState } from 'react';
import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import Header from '@components/Header';
import remark from 'remark';
import html from 'remark-html';
import { NextSeo } from 'next-seo';

const markdownText = `As of today, India is undergoing a severe second wave of COVID-19 with the world’s highest daily new cases. Hospitals and healthcare providers are running out of resources in the fight against COVID-19 and the situation on the ground is dire. Oxygen is critically required to treat patients affected with COVID-19, many of whom require hospitalization. However, there is a severe shortage of oxygen across hospitals in India.

We are raising funds to help procure and distribute oxygen concentrators across hospitals in need. These oxygen concentrators can save many thousands of lives and bolster much-needed resources for hospitals. They can also be used to treat outpatients, reducing the load on hospital beds and easing the stress faced by patients.

## How you can contribute:

Please donate at the links below.

### Individuals in India:

These contributions are eligible for tax benefits for Indian citizens under Sec 80G

1. [Donate on Impactguru](https://www.impactguru.com/fundraiser/oxygen)

2. [Donate on Milaap](https://milaap.org/fundraisers/Donate-for-Oxygen)

### Individuals in other countries:

US citizens contributing >$1000 can avail tax exemptions for donations made on Milaap

1. [Donate on Milaap](https://milaap.org/fundraisers/Donate-for-Oxygen)


#### [Create a supporting sub-campaign](https://www.ketto.org/fundraiser/Donateforoxygen)

### Organisations / CSR Funding

**Individual large grants from India or other countries:** For grants > Rs.7,50,000 or $10000, please write to us directly at shubha@swasthapp.org

**Organization based or CSR Funding:** To contribute as an organization from India or other countries, please write to us directly at shubha@swasthapp.org

**Long term partners:** You can also partner with Swasth.app on its longer term mission in accelerating digital health tool adoption across India through open source products. Please write to shubha@swasthapp.org to learn more.`;

const Campaigns = () => {
    const [htmlStr, setHtmlStr] = useState('');
    const { locale } = useLocaleContext();
    remark()
        .use(html)
        .process(markdownText)
        .then((t) => setHtmlStr(t.contents));
    const t = useLocale(locale, 'campaigns');
    const SEO = {
        title: `Campaigns`,
        description: `We are raising funds to help procure and distribute oxygen concentrators across hospitals in need. These oxygen concentrators can save many thousands of lives and bolster much-needed resources for hospitals. They can also be used to treat outpatients, reducing the load on hospital beds and easing the stress faced by patients`,
        openGraph: {
            title: `Campaigns`,
            description: `We are raising funds to help procure and distribute oxygen concentrators across hospitals in need. These oxygen concentrators can save many thousands of lives and bolster much-needed resources for hospitals. They can also be used to treat outpatients, reducing the load on hospital beds and easing the stress faced by patients`
        }
    };
    return (
        <section className="max-w-5xl mx-auto px-2">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: 'Campaigns' }]} />
            <Header title="Campaigns" />
            <section className="flex flex-col mx-2 md:mx-10 pt-2 px-2">
                <article className="lg:prose-xl dark:text-gray-100 text-gray-900 prose-indigo">
                    <div dangerouslySetInnerHTML={{ __html: htmlStr }}></div>
                </article>
            </section>
        </section>
    );
};
export default Campaigns;
