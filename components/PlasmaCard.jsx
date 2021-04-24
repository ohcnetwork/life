import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faLink,
    faPhoneAlt,
    faCheckCircle,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseDateString } from '../lib/utils';

const PlasmaCard = ({
    city,
    createdTime,
    description,
    district,
    name,
    phone1,
    sourceLink,
    state,
    verificationStatus,
    lastVerifiedOn
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="p-4 flex justify-between flex-wrap">
                <div>
                    <div className="font-bold text-2xl">
                        <h1>
                            {name}
                            <span>
                                {verificationStatus &&
                                    verificationStatus.toLocaleLowerCase() == 'verified' ? (
                                    <FontAwesomeIcon
                                        className="text-green-600 w-5 ml-4"
                                        title="Verified"
                                        icon={faCheckCircle}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        className="text-yellow-400 w-4 ml-4"
                                        title="Not verified"
                                        icon={faExclamationTriangle}
                                    />
                                )}
                            </span>
                        </h1>
                        <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold dark:text-white">
                            <span className="mr-2">{district}</span>|
                            <span className="ml-2">{state}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    {phone1 && (
                        <a
                            className="font-mono text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white"
                            href={`tel:${phone1}`}>
                            <FontAwesomeIcon
                                title={`${phone1}`}
                                className="text-xl w-6"
                                icon={faPhoneAlt}
                            />
                            <span className="ml-2">{phone1}</span>
                        </a>
                    )}
                    {sourceLink && (
                        <a
                            className="font-bold text-xl text-gray-700 mt-0 hover:text-gray-900 dark:text-white"
                            target="_blank"
                            href={sourceLink}>
                            <FontAwesomeIcon
                                title={`${sourceLink}`}
                                className="text-xl w-6"
                                icon={faLink}
                            />
                            <span className="ml-2 text-lg mt-1">Source Link</span>
                        </a>
                    )}
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center mx-2 mt-2 pb-3">
                <div className="font-semibold">{description}</div>
                <div className="font-mono text-gray-700 text-sm dark:text-white">
                    {
                        lastVerifiedOn ? (
                            verifiedStatus && verifiedStatus.toLocaleLowerCase() == 'verified' ?
                                `Verified @ ${parseDateString(lastVerifiedOn)}` :
                                `Last Checked @ ${parseDateString(lastVerifiedOn)}`
                        ) : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default PlasmaCard;
