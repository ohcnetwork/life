import React from 'react';
import { useRouter } from 'next/router';

const NavLink = ({ title, link, icon }) => {
    const router = useRouter();
    const defaultStyle =
        'flex items-center text-right text-gray-900 dark:text-gray-300 px-2 py-2 md:p-0 mx-5 md:mx-6 md:pb-1 hover:text-gray-700 ';
    const activeStyle =
        defaultStyle +
        'font-semibold text-indigo-800 dark:text-white border-b-2 border-primary-600';

    const defaultStyleIcon = 'fill-current text-gray-900 dark:text-gray-300 mr-2 ml-auto ';
    const activeStyleIcon = defaultStyleIcon + 'text-indigo-800 dark:text-white';
    return (
        <a
            href={link}
            className={router.pathname.startsWith(link.split('#')[0]) ? activeStyle : defaultStyle}>
            <span
                className={
                    router.pathname.startsWith(link.split('#')[0])
                        ? activeStyleIcon
                        : defaultStyleIcon
                }>
                {icon}
            </span>
            <span>{title}</span>
        </a>
    );
};

export default NavLink;
