import React from 'react';
import { useLocaleContext } from '@hooks/use-locale-context';

const LanguageSelector = () => {
    const { locale, setLocale } = useLocaleContext();
    return (
        <select
            className="cursor-pointer fixed top-3 left-3 font-semibold py-2 px-4  text-md"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}>
            <option value="EN">English</option>
            <option value="MR">Marathi</option>
        </select>
    );
};

export default LanguageSelector;
