import React from 'react';

const NoResultFound = ({ type, district, state }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 dark:text-gray-300">
            <img src="/icons/noResults.svg" className="w-1/4 md:w-1/6 my-2" alt="No Data Found!" />
            <span>No Data Found for</span>
            <span className="font-semibold">{type} in {district}, {state}</span>
        </div>
    );
}

export default NoResultFound;