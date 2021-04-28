import React, { useEffect, useState } from 'react';
import Footer from '@components/Footer';
import { LocaleContext } from '@hooks/use-locale-context';
import NavBar from '@components/NavBar';

const MainLayout = ({ children }) => {
    const [locale, setLocale] = useState("EN");
    const localeValue = { locale, setLocale };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    return (
        <LocaleContext.Provider value={localeValue}>
            <div className="flex flex-col items-stretch min-h-screen bg-gray-100 dark:bg-gray-1100">
                <NavBar />                
                <div className="max-w-5xl mx-auto px-2 pb-6 flex-grow flex-shrink-0">
                    {children}
                </div>
                <Footer />
            </div>
        </LocaleContext.Provider>
    );
};

export default MainLayout;
