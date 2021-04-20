import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen bg-gray-100 '>
        <div className='max-w-5xl mx-auto container'>{children}</div>
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
