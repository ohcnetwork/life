import { totalResources } from '@lib/api';
import React from 'react';

const StartSearching = ({ text, res }) => {

    // This is unused for now!
    // Maybe in futute we need this in an edge case.

    return (
        <div className="flex flex-col items-center justify-center dark:text-gray-300 mt-6">
            <img src="/icons/startSearching.svg" className="w-1/5" alt="Start Searching" />
            <span className="font-semibold">
                {text} {totalResources().total}+ {res}
            </span>
        </div>
    );
};

export default StartSearching;
