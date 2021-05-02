import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import { NextSeo } from 'next-seo';

export default function DataForm() {
    const { locale } = useLocaleContext();
    const th = useLocale(locale, 'home');
    const t = useLocale(locale, 'data');
    const formsInfo = [
        {
            name: `${th.oxygen}`,
            description: `${t.sourceType}`,
            link: 'https://airtable.com/shrjYwvwPhPY6h6Hw'
        },
        {
            name: `${t.medicineInjection}`,
            description: `${t.medicineDes}`,
            link: 'https://airtable.com/shrCNfkEdSTxeWAGg'
        },
        {
            name: `${th.hospital}`,
            description: `${t.hospitalDes}`,
            link: 'https://airtable.com/shrfZV2enmY9wge0F'
        },
        {
            name: `${th.ambulance}`,
            description: `${t.hospitalDes}`,
            link: 'https://airtable.com/shrAO7oA9qwh1OABJ'
        },
        {
            name: `${th.helpline}`,
            description: `${t.helplineDes}`,
            link: 'https://airtable.com/shruCmaVNNXt1q1Uj'
        },
        {
            name: `${t.doctorTele}`,
            description: `${t.doctorDes}`,
            link: 'https://airtable.com/shrg0KEI0qRfLRPRP'
        },
        {
            name: `${t.supportGroup}`,
            description: `${t.supportDes}`,
            link: 'https://airtable.com/shrf64QSuwSrzWPxo'
        },
        {
            name: `${t.applyVol}`,
            description: `${t.applyDes}`,
            link: 'https://airtable.com/shrDiUIg7e1IWj6mz'
        },
        {
            name: `${t.govtContact}`,
            description: `${t.govtDes}`,
            link: 'https://airtable.com/shr5IdHRDcFrOKLcg'
        }
    ];

    const SEO = {
        title: `Contribute Verified Data | Coronasafe network`,
        description: `Contribute Verified Data to Coronasafe Life`,
        openGraph: {
            title: `Contribute Verified Data | Coronasafe network`,
            description: `Contribute Verified Data to Coronasafe Life`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi,hospital,ambulance,helpline,oxygen,medicine`
            }
        ]
    };

    return (
        <div className="max-w-5xl mx-auto px-2">
            <NextSeo {...SEO} />
            <Breadcumb list={[{ href: null, name: 'Contribute Data' }]} />
            <Header title="Contribute Verified Data" />
            <section className="w-full max-w-sm mx-auto text-center text-2xl font-bold my-3 pb-3 dark:text-gray-400">
                {t.question}
            </section>
            <section className="w-full max-w-xl mx-auto">
                <ul className="space-y-4">
                    {formsInfo.map((form, id) => {
                        return (
                            <li
                                key={id}
                                className="group relative bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
                                <div className="rounded-lg border dark:bg-gray-1200 border-gray-300 bg-white px-6 py-4 hover:border-gray-400 flex justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <p className="font-medium text-base text-gray-900 dark:text-gray-200">
                                                {form.name}
                                            </p>
                                            <div className="text-gray-500">
                                                <p className="sm:inline dark:text-gray-300">
                                                    {form.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                                        <a
                                            href={form.link}
                                            target="_blank"
                                            rel="noopener"
                                            className=" inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-600">
                                            <svg
                                                className="mr-1"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M27.6133 22.28L24.3867 19.0534C24.2627 18.9284 24.1152 18.8292 23.9528 18.7615C23.7903 18.6938 23.616 18.659 23.44 18.659C23.264 18.659 23.0897 18.6938 22.9272 18.7615C22.7648 18.8292 22.6173 18.9284 22.4933 19.0534L17.72 23.8267C17.5964 23.9513 17.4987 24.099 17.4323 24.2615C17.366 24.4239 17.3323 24.5979 17.3333 24.7734V28C17.3333 28.3536 17.4738 28.6928 17.7239 28.9428C17.9739 29.1929 18.313 29.3334 18.6667 29.3334H21.8933C22.0688 29.3344 22.2428 29.3007 22.4052 29.2344C22.5677 29.168 22.7154 29.0703 22.84 28.9467L27.6133 24.1734C27.7383 24.0494 27.8375 23.9019 27.9052 23.7395C27.9729 23.577 28.0077 23.4027 28.0077 23.2267C28.0077 23.0507 27.9729 22.8764 27.9052 22.7139C27.8375 22.5514 27.7383 22.404 27.6133 22.28ZM21.3333 26.6667H20V25.3334L23.44 21.8934L24.7733 23.2267L21.3333 26.6667ZM13.3333 26.6667H8C7.64638 26.6667 7.30724 26.5262 7.05719 26.2762C6.80714 26.0261 6.66667 25.687 6.66667 25.3334V6.66669C6.66667 6.31307 6.80714 5.97393 7.05719 5.72388C7.30724 5.47383 7.64638 5.33335 8 5.33335H14.6667V9.33335C14.6667 10.3942 15.0881 11.4116 15.8382 12.1618C16.5884 12.9119 17.6058 13.3334 18.6667 13.3334H22.6667V14.6667C22.6667 15.0203 22.8071 15.3594 23.0572 15.6095C23.3072 15.8595 23.6464 16 24 16C24.3536 16 24.6928 15.8595 24.9428 15.6095C25.1929 15.3594 25.3333 15.0203 25.3333 14.6667V12C25.3333 12 25.3333 12 25.3333 11.92C25.3194 11.7975 25.2926 11.6769 25.2533 11.56V11.44C25.1892 11.3029 25.1037 11.1769 25 11.0667L17 3.06669C16.8898 2.96298 16.7638 2.87746 16.6267 2.81335C16.5869 2.8077 16.5465 2.8077 16.5067 2.81335L16.08 2.66669H8C6.93913 2.66669 5.92172 3.08811 5.17157 3.83826C4.42143 4.58841 4 5.60582 4 6.66669V25.3334C4 26.3942 4.42143 27.4116 5.17157 28.1618C5.92172 28.9119 6.93913 29.3334 8 29.3334H13.3333C13.687 29.3334 14.0261 29.1929 14.2761 28.9428C14.5262 28.6928 14.6667 28.3536 14.6667 28C14.6667 27.6464 14.5262 27.3073 14.2761 27.0572C14.0261 26.8072 13.687 26.6667 13.3333 26.6667ZM17.3333 7.21335L20.7867 10.6667H18.6667C18.313 10.6667 17.9739 10.5262 17.7239 10.2762C17.4738 10.0261 17.3333 9.68698 17.3333 9.33335V7.21335ZM10.6667 18.6667H18.6667C19.0203 18.6667 19.3594 18.5262 19.6095 18.2762C19.8595 18.0261 20 17.687 20 17.3334C20 16.9797 19.8595 16.6406 19.6095 16.3905C19.3594 16.1405 19.0203 16 18.6667 16H10.6667C10.313 16 9.97391 16.1405 9.72386 16.3905C9.47381 16.6406 9.33333 16.9797 9.33333 17.3334C9.33333 17.687 9.47381 18.0261 9.72386 18.2762C9.97391 18.5262 10.313 18.6667 10.6667 18.6667ZM10.6667 13.3334H12C12.3536 13.3334 12.6928 13.1929 12.9428 12.9428C13.1929 12.6928 13.3333 12.3536 13.3333 12C13.3333 11.6464 13.1929 11.3073 12.9428 11.0572C12.6928 10.8072 12.3536 10.6667 12 10.6667H10.6667C10.313 10.6667 9.97391 10.8072 9.72386 11.0572C9.47381 11.3073 9.33333 11.6464 9.33333 12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.313 13.3334 10.6667 13.3334ZM13.3333 21.3334H10.6667C10.313 21.3334 9.97391 21.4738 9.72386 21.7239C9.47381 21.9739 9.33333 22.3131 9.33333 22.6667C9.33333 23.0203 9.47381 23.3594 9.72386 23.6095C9.97391 23.8595 10.313 24 10.6667 24H13.3333C13.687 24 14.0261 23.8595 14.2761 23.6095C14.5262 23.3594 14.6667 23.0203 14.6667 22.6667C14.6667 22.3131 14.5262 21.9739 14.2761 21.7239C14.0261 21.4738 13.687 21.3334 13.3333 21.3334Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            Add Data
                                        </a>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
