import React from 'react';
import Link from 'next/link';
import useLocale from '../hooks/use-locale';
const Footer = () => {
  let t = useLocale();
  return (
    <footer className='bg-gray-200 absolute top-full left-0 w-full py-10'>
      <div className='max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8 sm:flex items-center justify-between'>
        <p className='mb-5 sm:mb-0 text-center text-base text-gray-500'>
          {t.curatedBy}
          {`   `}
          <Link href='https://covidfyi.in/'>
            <span className='underline cursor-pointer text-indigo-600'>
              Covid FYI
            </span>
          </Link>
        </p>
        <p className='mb-5 sm:mb-0 text-center text-base text-gray-500'>
          {t.supportedBy}
          {`   `}
          <Link href='https://www.swasth.app'>
            <span className='underline cursor-pointer text-indigo-600'>
              Swasth Alliance
            </span>
          </Link>
        </p>
        <p className='mb-5 sm:mb-0 text-center text-base text-gray-500'>
          {t.poweredBy}
          {`   `}
          <Link href='https://coronasafe.network/'>
            <span className='underline cursor-pointer text-indigo-600'>
              CoronaSafe Network
            </span>
          </Link>
        </p>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          <div className='px-5 py-2'>
            <Link href='https://github.com/coronasafe/life'>
              <span className='text-base text-gray-700 hover:text-indigo-600 cursor-pointer'>
                {t.github}
              </span>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='https://github.com/coronasafe/life'>
              <span className='text-base text-gray-700 hover:text-indigo-600 cursor-pointer'>
                {t.database}
              </span>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='https://github.com/coronasafe/life'>
              <span className='text-base text-gray-700 hover:text-indigo-600 cursor-pointer'>
                {t.about}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
