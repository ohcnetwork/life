import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-1200 absolute top-full left-0 w-full py-10">
            <section className="flex justify-center">
                <Link href="/data">
                    <a>
                        <button
                            type="button"
                            className="flex mx-2 items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Contribute Verified Data
                        </button>
                    </a>
                </Link>

                <Link href="/campaigns">
                    <a>
                        <button
                            type="button"
                            className="flex mx-2 items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Support
                        </button>
                    </a>
                </Link>

                <Link href="/about#partner">
                    <a>
                        <button
                            type="button"
                            className="flex mx-2 items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Partner with Us
                        </button>
                    </a>
                </Link>
            </section>
            <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8 sm:flex items-center justify-between">
                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    Curated by{' '}
                    <a href="https://covidfyi.in/">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Covid FYI
                        </span>
                    </a>
                </p>
                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    Supported by{' '}
                    <a href="https://www.swasth.app">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Swasth Alliance
                        </span>
                    </a>{' '}
                    |{' '}
                    <a href="https://vercel.com?utm_source=life&utm_campaign=oss">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            Vercel
                        </span>
                    </a>
                </p>

                <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
                    Powered By{' '}
                    <a href="https://coronasafe.network/">
                        <span className="underline cursor-pointer text-indigo-600 dark:text-primary-500">
                            CoronaSafe Network
                        </span>
                    </a>
                </p>
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <a href="https://github.com/coronasafe/life">
                            <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer dark:text-primary-200">
                                GitHub
                            </span>
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="https://github.com/coronasafe/life">
                            <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer dark:text-primary-200">
                                Database
                            </span>
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/about">
                            <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer dark:text-primary-200">
                                About
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
