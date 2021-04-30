import React, { useState } from 'react';

function AboutQA({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full border text-gray-1200 dark:text-white  border-gray-500 dark:border-gray-900 shadow-md rounded-md py-4 md:px-8 px-2">
            <div className="flex justify-between items-center w-full">
                <div className="w-3/4 mr-1">{question}</div>
                <div className="w-1/4">
                    {!open ? (
                        <svg
                            width={24}
                            height={24}
                            onClick={() => setOpen(!open)}
                            className="ml-auto cursor-pointer fill-current text-gray-1000 dark:text-gray-400 "
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd">
                            <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z" />
                        </svg>
                    ) : (
                        <svg
                            width={24}
                            height={24}
                            onClick={() => setOpen(!open)}
                            className=" ml-auto cursor-pointer fill-current text-gray-1000 dark:text-gray-400 "
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd">
                            <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z" />
                        </svg>
                    )}
                </div>
            </div>
            {open && (
                <div className="text-sm dark:text-gray-500 text-gray-900 mt-3">
                    {answer.map((ans) => ans)}
                </div>
            )}
        </div>
    );
}

export default AboutQA;
