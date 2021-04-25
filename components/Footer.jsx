import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faHandsHelping, faHeart } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

const Footer = () => {
    const { locale, setLocale } = useLocaleContext();
    const t = useLocale(locale);
    const buttonArr = [
        {
            icon: faDatabase,
            text: `${t.contributeData}`,
            link: '/data'
        },
        {
            icon: faHeart,
            text: `${t.campaigns}`,
            link: '/campaigns'
        },
        {
            icon: faHandsHelping,
            text: `${t.partnerWithUs}`,
            link: '/about#partner'
        }
    ];
    const socialArr = [
        {
            text: `${t.github}`,
            link: 'https://github.com/coronasafe/life'
        },
        {
            text: `${t.database}`,
            link: 'https://github.com/coronasafe/life'
        },
        {
            text: `${t.about}`,
            link: '/about'
        }
    ];
    return (
        <footer className="bg-gray-200 dark:bg-gray-1200 absolute top-full left-0 w-full py-10">
            <section className="flex flex-wrap justify-center">
                {buttonArr.map((el) => (
                    <a
                        key={el.link}
                        href={el.link}
                        className="flex mx-2 items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 md:my-0">
                        <FontAwesomeIcon icon={el.icon} className="w-3 mr-2" />
                        {el.text}
                    </a>
                ))}
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
                        <div className="px-5 py-2" key={el.link}>
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
