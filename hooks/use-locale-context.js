import { createContext } from 'react';
import { useContext } from 'react';

export const LocaleContext = createContext(null);

export function useLocaleContext() {
    const { locale, setBaseLocal } = useContext(LocaleContext);
    if (typeof window !== 'undefined') {
        if (localStorage.language === undefined) {
            localStorage.setItem('language', 'EN');
        } else {
            setBaseLocal(localStorage.getItem('language'));
        }
    }
    const setLocale = (loc) => {
        setBaseLocal(loc);
        localStorage.setItem('language', loc.toUpperCase());
    };
    return { locale, setLocale };
}
