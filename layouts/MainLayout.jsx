import React, { useEffect, useState } from 'react';
import Footer from '@components/Footer';
import ThemeButton from '@components/ThemeButton';
import { LocaleContext } from '@hooks/use-locale-context';
import LanguageSelector from '@components/LanguageSelector';

const MainLayout = ({ children }) => {
    const [locale, setBaseLocal] = useState('EN');
    const value = { locale, setBaseLocal };
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
        <LocaleContext.Provider value={value}>
            <div
                className="flex-grow bg-gray-100 dark:bg-gray-1100 relative"
                style={{ minHeight: '85vh' }}>
                <ThemeButton />
                <LanguageSelector />
                <div className="max-w-5xl mx-auto container px-2 pb-6">{children}</div>
                <Footer />
            </div>
        </LocaleContext.Provider>
    );
};

export default MainLayout;
