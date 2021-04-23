import React from 'react';
import TabSingle from './TabSingle';

export default function TabLinks({ state, district, tabsInfo }) {
  return (
    <div className='border-b border-gray-200'>
      <nav className='flex flex-wrap' aria-label='Tabs'>
        <div className='flex flex-wrap overflow-hidden justify-around'>
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
