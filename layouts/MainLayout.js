import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import ThemeButton from '../components/ThemeButton';

const MainLayout = ({ children }) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  return (
    <div
      className='flex-grow bg-gray-100 dark:bg-gray-1100 relative'
      style={{ minHeight: '85vh' }}
    >
      <ThemeButton />
      <div className='max-w-5xl mx-auto container px-2'>{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
