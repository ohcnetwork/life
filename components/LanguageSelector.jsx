import React from 'react';
import { useLocaleContext } from '@hooks/use-locale-context';
import langArr from '@locales/index';

const LanguageSelector = () => {
    const { locale, setLocale } = useLocaleContext();
    return (
        <select
            className="cursor-pointer fixed top-3 left-3 font-semibold text-sm rounded shadow h-8 dark:bg-gray-1000 px-2 dark:text-white"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}>
            {langArr.map((el) => (
                <option key={el.code} value={el.code}>
                    {el.name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
