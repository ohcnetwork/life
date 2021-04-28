import React from 'react';

const NoResultFound = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-6 dark:text-gray-300">
            <img src="/icons/noResults.svg" className="w-1/5" alt="No Data Found!"/>
            <span className="font-semibold">No Data Found!</span>
        </div>
    );
}

export default NoResultFound;