import React from 'react';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified } from '@lib/utils';

const Badge = ({ status }) => {
    if (isVerified(status)) {
        return (
            <span className="text-green-600 dark:bg-gray-900 flex items-center text-xs bg-gray-100 py-1 px-2 rounded-full mt-1 md:mt-0">
                <FontAwesomeIcon icon={faCheckCircle} className="w-5" />
                <span className="ml-1 dark:text-gray-400">Verified</span>
            </span>
        );
    }

    status = `${status}`.toLowerCase().includes('unresponsive')
        ? 'Unresponsive'
        : 'Not Verified';

    return (
        <span className="text-red-600 dark:bg-gray-900 dark:text-primary-500 flex items-center text-xs bg-gray-100 py-1 px-2 rounded-full mt-1 md:mt-0">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-5" />
            <span className="ml-1 dark:text-gray-400">{status}</span>
        </span>
    );
};

export default Badge;
