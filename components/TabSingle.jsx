import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { parametreize } from '@lib/utils';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

const TabSingle = ({ tab, state, district }) => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale).home;
    const bgColorVal = district[tab.value]
        ? ' cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-1100'
        : ' cursor-not-allowed';

    const colorVal = district[tab.value] ? `${tab.color}` : 'text-gray-400 dark:text-gray-900';

    const divClass1 = `rounded shadow w-5/12 overflow-hidden flex justify-center hover:rounded-md mx-auto my-1 ${bgColorVal}`;

    const divClass2 = `w-min border-transparent flex items-center justify-center px-4 py-2 text-center group border-b-2 font-medium ${colorVal}`;

    const renderLink = (
        <div className={divClass2}>
            <FontAwesomeIcon icon={tab.icon} className="w-5" />
            <span className="ml-2">{t[tab.name.toLowerCase()]}</span>
        </div>
    );

    return district[tab.value] ? (
        <Link
            href={`/[state]/[district]${tab.link}`}
            as={`/${parametreize(state)}/${parametreize(district.district)}${tab.link}`}
            key={tab.link}>
            <a className={divClass1}>{renderLink}</a>
        </Link>
    ) : (
        <div className={divClass1}>{renderLink}</div>
    );
};

export default TabSingle;
