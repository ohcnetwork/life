import React from 'react';
import {
    faCheckCircle,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const badgeData = {
    'verified': {
        icon: faCheckCircle,
        title: 'Verified',
        className: "text-green-600 w-6",
        textClassName: 'text-lg'
    },
    'unresponsive': {
        icon: faExclamationTriangle,
        title: 'Not Verified',
        className: 'text-yellow-400 w-6',
        textClassName: 'text-lg'
    },
    'unverified': {
        icon: faExclamationTriangle,
        title: 'Not Verified',
        className: 'text-yellow-400 w-6',
        textClassName: 'text-lg'
    }
};

const Badge = ({
    badgeType,
}) => {
    if (!badgeType || (badgeType && !badgeData[badgeType.toLowerCase()])) {
        return null;
    }
    const badge = badgeData[badgeType.toLowerCase()];
    return (
        <div
            className="flex items-center"
        >
            <FontAwesomeIcon
                className={badge.className}
                title={badge.title}
                icon={badge.icon}
            />
            <span className={`ml-2 ${badge.textClassName}`}>{badge.title}</span>
        </div>
    );
}

export default Badge;