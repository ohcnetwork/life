import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { parametreize } from '../lib/utils';

const TabSingle = ({ tab, state, district }) => {
  const bgColorVal = district[tab.value]
    ? tab.bgColor + ' cursor-pointer'
    : ' cursor-not-allowed';

  const colorVal = district[tab.value] ? `${tab.color}` : 'text-gray-500';

  const divClass1 = `w-5/12 overflow-hidden mr-auto my-1 ${bgColorVal}`;

  const divClass2 = `w-min border-transparent flex items-center justify-center px-4 py-2 text-center group border-b-2 font-medium ${colorVal}`;

  return (
    <Link
      href={`/[state]/[district]${tab.link}`}
      as={`/${parametreize(state)}/${parametreize(district.district)}${
        tab.link
      }`}
      key={tab.link}
    >
      <div className={divClass1}>
        <div className={divClass2}>
          <FontAwesomeIcon icon={tab.icon} className='w-5' />
          <span className='ml-2'>{tab.name}</span>
        </div>
      </div>
    </Link>
  );
};

export default TabSingle;
