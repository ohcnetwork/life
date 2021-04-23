import React from 'react';
import Footer from '../components/Footer';
import ThemeButton from '../components/ThemeButton';

const MainLayout = ({ children }) => {
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
