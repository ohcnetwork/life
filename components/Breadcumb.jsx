import React from "react";
import Link from "next/link";
const Breadcumb = ({ list }) => {
  const NavLinks = ({ href, name }) => {
    return (
      <li>
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-600"
            x-description="Heroicon name: solid/chevron-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {href ? (
            <Link href={href}>
              <span className="ml-4 text-sm font-medium text-gray-700 hover:text-indigo-600 cursor-pointer">
                {name}
              </span>
            </Link>
          ) : (
            <span className="ml-4 text-sm font-medium text-gray-700">
              {name}
            </span>
          )}
        </div>
      </li>
    );
  };
  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-700 cursor-pointer">
                <svg
                  className="flex-shrink-0 h-5 w-5"
                  x-description="Heroicon name: solid/home"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <span className="sr-only">Home</span>
              </span>
            </Link>
          </div>
        </li>
        {list.map((l, i) => (
          <NavLinks href={l.href} name={l.name || "Link"} key={i} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcumb;
