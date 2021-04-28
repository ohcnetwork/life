import React from 'react';

const tabs = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div>
                    <div className="sm:hidden">
                        <label for="tabs" className="sr-only">
                            Select a tab
                        </label>
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                            <option>My Account</option>
                            <option>Company</option>
                            <option selected="">Team Members</option>
                            <option>Billing</option>
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
                                    <svg
                                        className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
                                        x-description="Heroicon name: solid/user"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>My Account</span>
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
                                    <svg
                                        className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
                                        x-description="Heroicon name: solid/office-building"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"></svg>
                                    <span>Company</span>
                                </a>

                                <a
                                    href="#"
                                    className="border-indigo-500 text-indigo-600 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                                    aria-current="page">
                                    <svg
                                        className="text-indigo-500 -ml-0.5 mr-2 h-5 w-5"
                                        x-description="Heroicon name: solid/users"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                    </svg>
                                    <span>Team Members</span>
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm">
                                    <svg
                                        className="text-gray-400 group-hover:text-gray-500 -ml-0.5 mr-2 h-5 w-5"
                                        x-description="Heroicon name: solid/credit-card"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span>Billing</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default tabs;
