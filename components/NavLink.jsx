import React from 'react';
import { useRouter } from "next/router";

const NavLink = ({ title, link }) => {
    const router = useRouter();
    const defaultStyle = "text-gray-1100 dark:text-gray-300 p-2 md:p-0 mx-0 md:mx-6 md:pb-2 ";
    const activeStyle = defaultStyle + "font-semibold text-indigo-800 dark:text-white border-b-2 border-primary-600"

    link = link.split("#")[0]

    return (
        <a href={link}
            className={(router.pathname.startsWith(link) ? activeStyle : defaultStyle)}>
            {title}
        </a>
    );
}

export default NavLink;