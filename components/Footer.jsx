import React from 'react';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

const Footer = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');
    const socialArr = [
        {
            text: `${t.github}`,
            link: 'https://github.com/coronasafe/life'
        },
        {
            text: `${t.api}`,
            link: 'https://life-api.coronasafe.network/'
        },
        {
            text: `${t.about}`,
            link: '/about'
        },
        {
            text: `${t.infoOnCovid}`,
            link: '/videos'
        }
    ];
    return (
        <footer className="bg-gray-200 dark:bg-gray-1200 w-full flex-shrink-0 pt-6 pb-2">
            <section className="flex flex-wrap justify-center my-3 text-sm">
                <div className="flex items-center mr-2 text-gray-900 dark:text-gray-500">
                    <span className="font-semibold mr-2">{t.disclaimer}: </span>
                    <span className="">{t.dataNotOwned}</span>
                </div>
                <div>
                    <a href="/disclaimer" className="font-semibold text-indigo-500 underline">
                        {t.knowMore}
                    </a>
                </div>
            </section>
            <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8 sm:flex items-center justify-between">
                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    {`${t.curatedBy} `}
                    <a href="https://covidfyi.in/">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Covid FYI
                        </span>
                    </a>
                </p>
                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    {`${t.supportedBy} `}
                    <a href="https://www.swasth.app">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Swasth Alliance
                        </span>
                    </a>{' '}
                    |{' '}
                    <a href="https://vercel.com?utm_source=life&utm_campaign=oss">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Vercel
                        </span>
                    </a>
                </p>

                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    {`${t.poweredBy} `}
                    <a href="https://coronasafe.network/">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            CoronaSafe Network
                        </span>
                    </a>
                </p>
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {socialArr.map((el) => (
                        <div className="px-5 py-2" key={el.text + el.link}>
                            <a href={el.link}>
                                <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer dark:text-primary-200">
                                    {el.text}
                                </span>
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
