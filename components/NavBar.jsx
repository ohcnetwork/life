import React, { useState, useRef } from 'react';
import { useLocaleContext } from '@hooks/use-locale-context';
import Logo from './Logo';
import NavLink from './NavLink';
import LanguageSelector from './LanguageSelector';
import ThemeButton from './ThemeButton';
import useLocale from '@hooks/use-locale';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import LearnIcon from './icons/LearnIcon';
import DonateIcon from './icons/DonateIcon';
import ContribIcon from './icons/ContribIcon';
import PartnerIcon from './icons/PartnerIcon';

const NavBar = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');

    const [isOpen, setIsOpen] = useState(false);

    const menuNode = useRef();
    useOnClickOutside(menuNode, () => setIsOpen(false));

    const navLinks = [
        {
            icon: <LearnIcon />,
            title: `${t.learn}`,
            link: '/learn'
        },
        {
            icon: <DonateIcon />,
            title: `${t.campaigns}`,
            link: '/campaigns'
        },
        {
            icon: <PartnerIcon />,
            title: `${t.partnerWithUs}`,
            link: '/partners'
        },
        {
            icon: <ContribIcon />,
            title: `${t.contributeData}`,
            link: '/data'
        }
    ];

    return (
        <section className="mb-20 mx-auto">
            <nav className="flex bg-gray-200 dark:bg-gray-1200 items-center justify-between px-5 py-2 fixed top-0 left-0  w-full  z-50">
                <div ref={menuNode} className="flex items-center m-3 cursor-pointer md:hidden">
                    <div className="w-5 h-5">
                        {isOpen ? (
                            <FontAwesomeIcon
                                onClick={() => setIsOpen(false)}
                                icon={faTimes}
                                className="w-3 text-gray-600"
                            />
                        ) : (
                            <FontAwesomeIcon
                                onClick={() => setIsOpen(true)}
                                icon={faBars}
                                className="w-3 text-gray-600"
                            />
                        )}
                    </div>
                    {isOpen && (
                        <div className="flex bg-gray-200 dark:bg-gray-1200 py-2 flex-col items-center justify-center md:hidden px-4 fixed top-20 left-0 w-full z-50">
                            {navLinks.map(({ icon, title, link }, id) => (
                                <NavLink key={id} title={title} link={link} icon={icon} />
                            ))}
                        </div>
                    )}
                </div>
                <a href="/" className="flex items-center my-2 mx-1 xs:m-3">
                    <Logo height={40} />
                    <h1 className="ml-1 uppercase font-black text-3xl text-gray-900 dark:text-gray-100 hidden xs:block">
                        {t.title}
                    </h1>
                </a>
                <div className="flex-1 flex items-center justify-end">
                    <div className="items-center justify-end hidden md:flex">
                        {navLinks.map(({ icon, title, link }, id) => (
                            <NavLink key={id} title={title} link={link} icon={icon} />
                        ))}
                    </div>
                    <div className="flex items-center mx-4 mb-1">
                        <LanguageSelector />
                    </div>
                    <div className="flex items-center mx-4 mb-1">
                        <ThemeButton />
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;
