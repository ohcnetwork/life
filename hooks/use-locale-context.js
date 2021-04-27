import { createContext, useContext } from 'react';

export const LocaleContext = createContext({
    locale: "EN",
    setLocale: (_) => {}
});

export const useLocaleContext = () => {
    return useContext(LocaleContext);
}