import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';
const Breadcumb = ({ list }) => {
    const NavLinks = ({ href, name }) => {
        return (
            <li>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 w-3" />
                    {href ? (
                        <Link href={href}>
                            <span className="ml-4 text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 cursor-pointer">
                                {name}
                            </span>
                        </Link>
                    ) : (
                        <span className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {name}
                        </span>
                    )}
                </div>
            </li>
        );
    };
    return (
        <nav className="py-6 pl-10 md:py-8 w-full " aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
                <li>
                    <div>
                        <Link href="/">
                            <span className="text-gray-600 hover:text-gray-700 dark:text-gray-100 cursor-pointer">
                                <FontAwesomeIcon icon={faHome} className="w-6" />
                                <span className="sr-only">Home</span>
                            </span>
                        </Link>
                    </div>
                </li>
                {list.map((l, i) => (
                    <NavLinks href={l.href} name={l.name || 'Link'} key={i} />
                ))}
            </ol>
        </nav>
    );
};

export default Breadcumb;
