import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <a
          href='http://coronasafe.network/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by Coronasafe
        </a>
      </footer>
    </div>
  );
};

export default MainLayout;
