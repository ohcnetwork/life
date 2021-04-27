import React from 'react';
import { useLocaleContext } from '@hooks/use-locale-context';
import Logo from './Logo';
import NavLink from './NavLink';
import LanguageSelector from './LanguageSelector';
import ThemeButton from './ThemeButton';
import useLocale from '@hooks/use-locale';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {

    const { locale } = useLocaleContext()
    const t = useLocale(locale, 'home');

    const navLinks = [
        { title: "COVID-19 Statistics", link: "https://www.covid19india.org/" },
        { title: "Contribute Verified Data", link: "/data" },
        { title: "Partner with Us", link: "/about#partner" },
        { title: "Campaigns", link: "/campaigns" },
    ]

    return (
        <section className="mb-20">
            <nav className="flex bg-gray-200 dark:bg-gray-1000 items-center justify-between px-5 fixed top-0 left-0 w-full">
                <a href="/" className="flex items-center m-3">
                    <Logo width={65} />
                    <h1 className="ml-1 uppercase font-black text-3xl text-gray-900 dark:text-gray-100">
                        {t.title}
                    </h1>
                </a>
                <div className="flex-1 flex items-center justify-end">
                    <div className="items-center justify-end hidden md:flex">
                        {
                            navLinks.map((navItem, id) =>
                                <NavLink key={id} title={navItem.title} link={navItem.link} />
                            )
                        }
                    </div>
                    <div className="flex items-center mx-4">
                        <LanguageSelector />
                    </div>
                    <div className="flex items-center mx-4">
                        <ThemeButton />
                    </div>
                </div>
            </nav>
            <div className='flex bg-gray-200 dark:bg-gray-1000 py-3 flex-wrap justify-between md:hidden px-4 mt-20'>
                {
                    navLinks.map((navItem, id) =>
                        <NavLink key={id} title={navItem.title} link={navItem.link} />
                    )
                }
            </div>
        </section>
    );
}

export default NavBar;