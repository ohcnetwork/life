import React from 'react';
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = ({ title, link, icon }) => {
    const router = useRouter();
    const defaultStyle = "flex items-center text-gray-900 dark:text-gray-300 px-2 py-2 md:p-0 mx-5 md:mx-6 md:pb-1 ";
    const activeStyle = defaultStyle + "font-semibold text-indigo-800 dark:text-white border-b-2 border-primary-600"

    link = link.split("#")[0]

    return (
        <a href={link}
            className={(router.pathname.startsWith(link) ? activeStyle : defaultStyle)}>
            <FontAwesomeIcon icon={icon} className="w-3 mr-2" />
            {title}
        </a>
    );
}

export default NavLink;