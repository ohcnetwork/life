import React, { useEffect } from 'react';
import { useLocaleContext } from '@hooks/use-locale-context';
import langArr from '@locales/index';

const LanguageSelector = () => {

    const { locale, setLocale } = useLocaleContext();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem("language")
            if (storedLanguage) {
                setLocale(storedLanguage.toUpperCase());
            } else {
                localStorage.setItem('language', 'EN');
            }
        }
    }, []);

    const handleChangeLocale = ({ target: { value } }) => {
        setLocale(value);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', value);
        }
    }

    return (
        <select
            className="cursor-pointer font-semibold text-sm rounded shadow h-8 dark:bg-gray-1000 px-3 text-center dark:text-white appearance-none "
            value={locale}
            onChange={handleChangeLocale}>
            {langArr.map((el) => (
                <option key={el.code} value={el.code}>
                    {el.name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
