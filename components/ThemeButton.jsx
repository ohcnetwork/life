import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { isDarkMode } from '../lib/utils';

const ThemeButton = () => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(isDarkMode());

    const toggleTheme = (_) => {
        if (typeof window !== 'undefined') {
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                localStorage.theme = 'light';
                document.documentElement.classList.remove('dark');
                setIsDarkModeEnabled(false);
            } else {
                localStorage.theme = 'dark';
                document.documentElement.classList.add('dark');
                setIsDarkModeEnabled(true);
            }
        }
    };

    return (
        <span
            onClick={toggleTheme}
            className="cursor-pointer fixed top-3 right-3 flex items-center justify-center h-10 w-10 bg-gray-200 text-gray-800 rounded-full">
            <FontAwesomeIcon icon={isDarkModeEnabled ? faSun : faMoon} className="w-6" />
        </span>
    );
};

export default ThemeButton;
