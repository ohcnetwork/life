import React from 'react';

const NoResultFound = ({ type, text }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 dark:text-gray-300">
            <img src="/icons/noResults.svg" className="w-1/4 md:w-1/6 my-2" alt="No Data Found!" />
            <span>No {type} Found for</span>
            <span className="font-semibold">{text}</span>
        </div>
    );
};

export default NoResultFound;
