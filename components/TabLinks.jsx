import React from 'react';
import TabSingle from './TabSingle';

export default function TabLinks({ state, district, tabsInfo }) {
  return (
    <div className='border-b border-gray-300 dark:border-gray-900'>
      <nav className='flex flex-wrap' aria-label='Tabs'>
        <div className='flex flex-wrap overflow-hidden justify-around py-2'>
          {tabsInfo.map((tab) => (
            <TabSingle
              key={tab.value}
              tab={tab}
              state={state}
              district={district}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
