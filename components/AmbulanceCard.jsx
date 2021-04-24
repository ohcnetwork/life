import {
    faPhoneAlt,
    faLink,
    faCheckCircle,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '../lib/utils';
import React from 'react';

const AmbulanceCard = ({
    name,
    phone1,
    phone2,
    area,
    source,
    createdTime,
    verificationStatus,
    lastVerifiedOn
}) => {
    return (
        <>
            <div className="w-full">
                <div className="bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
                    <div className="p-4 flex justify-between flex-wrap">
                        <div>
                            <div className="font-bold text-2xl">
                                <h1 className="flex items-center justify-start dark:text-white">
                                    {name ? name : 'Ambulance'}
                                    <span>
                                        {isVerified(verificationStatus) ? (
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
                                <div className="text-sm text-gray-700 font-semibold"></div>
                            </div>
                            <div className="w-11/12 max-w-3xl mt-2">
                                <div className="text-sm">{area}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start">
                            {phone1 && (
                                <a
                                    className="font-mono text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white"
                                    href={`tel:${phone1}`}>
                                    <FontAwesomeIcon
                                        title={phone1}
                                        className="text-xl w-6"
                                        icon={faPhoneAlt}
                                    />
                                    <span className="ml-4">{phone1}</span>
                                </a>
                            )}
                            {phone2 && (
                                <a
                                    className="font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                                    target="_blank"
                                    href={`tel:${phone2}`}>
                                    <FontAwesomeIcon
                                        title={phone2}
                                        className="text-xl w-6"
                                        icon={faPhoneAlt}
                                    />
                                    <span className="ml-2 text-lg mt-1">Source Link</span>
                                </a>
                            )}
                            {source && (
                                <a href={source}>
                                    <FontAwesomeIcon
                                        title={`${source}`}
                                        className="text-xl w-6"
                                        icon={faLink}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                    <hr className="dark:border-gray-900" />
                    <div className="flex justify-between items-center mx-4 mt-2 pb-3">
                        <div className="text-gray-700 text-sm dark:text-white">
                            {
                                lastVerifiedOn &&
                                <div className="text-gray-700 text-xs dark:text-white">
                                    <div>
                                        <span>{isVerified(verificationStatus) ? "Verified on: " : "Checked on: "}</span>
                                        <span className="font-bold">
                                            {`${parseDateString(lastVerifiedOn)}`}
                                        </span>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AmbulanceCard;
