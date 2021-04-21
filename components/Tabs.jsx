import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

const Tabs = ({ tabsInfo }) => {
  const router = useRouter();

  // const defaultStyle =
  //   'border-transparent text-gray-500 hover:text-yellow-700 hover:border-gray-300 group flex items-center py-4 px-1 border-b-2 font-medium text-sm';
  // const activeStyle = defaultStyle + 'border-indigo-500 text-indigo-600';

  return (
    <div className='border-b border-gray-200'>
      <nav className='flex flex-wrap justify-between px-2' ariaLabel='Tabs'>
        {tabsInfo.map((tab) => (
          <div
            key={tab.link}
            className="md:w-min w-1/3 border-transparent flex items-center justify-center px-2 py-2 text-center text-gray-700 group border-b-2 font-medium text-sm"
          >
            <FontAwesomeIcon icon={tab.icon} />
            <span className='ml-2'>{tab.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
