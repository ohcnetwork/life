import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-200 absolute top-full left-0 w-full py-10">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8 sm:flex items-center justify-between">
      <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
              Curated by{" "}
          <Link href="http://covidfyi.in/">
            <span className="underline cursor-pointer text-indigo-600">
              Covid FYI
            </span>
          </Link>
        </p>
        <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
              Supported by{" "}
          <Link href="Swasth.app">
            <span className="underline cursor-pointer text-indigo-600">
              Swasth Alliance
            </span>
          </Link>
        </p>
        <p className="mb-5 sm:mb-0 text-center text-base text-gray-500">
          Powered By{" "}
          <Link href="http://coronasafe.network/">
            <span className="underline cursor-pointer text-indigo-600">
              CoronaSafe Network
            </span>
          </Link>
        </p>
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link href="https://github.com/coronasafe/life">
              <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer">
                GitHub
              </span>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="https://github.com/coronasafe/life">
              <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer">
                Database
              </span>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="https://github.com/coronasafe/life">
              <span className="text-base text-gray-700 hover:text-indigo-600 cursor-pointer">
                About
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
