import { createContext } from 'react';
import { useContext } from 'react';

let localeStore = {
    locale: 'EN',

    setLocale: (locale) => (this.locale = locale)
};

export const LocaleContext = createContext(localeStore);

export function useLocaleContext() {
    return useContext(LocaleContext);
}
