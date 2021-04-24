import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faPhoneAlt,
    faCheckCircle,
    faExclamationTriangle,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '../lib/utils';

const HospitalCard = ({
    name,
    pointOfContact,
    createdTime,
    phone1,
    district,
    state,
    verificationStatus,
    lastVerifiedOn
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="p-4 flex justify-between flex-wrap">
                <div>
                    <div className="font-bold text-2xl dark:text-white">
                        {name}
                        <span>
                            {isVerified(verificationStatus) ? (
                                <FontAwesomeIcon
                                    className="text-green-600 w-2 md:w-4 ml-4"
                                    title="Verified"
                                    icon={faCheckCircle}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    className="text-yellow-400 w-2 md:w-4 ml-4"
                                    title="Not verified"
                                    icon={faExclamationTriangle}
                                />
                            )}
                        </span>
                        <div className="text-sm uppercase mt-3 text-gray-700 dark:text-gray-400  font-semibold">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mr-2" />
                            <span className="mr-2">{district}</span>|
                            <span className="ml-2">{state}</span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-7 items-start mt-1">
                    {phone1 && (
                        <a
                            className="text-gray-800 hover:text-gray-900 dark:text-white text-lg font-bold"
                            href={`tel:${phone1}`}>
                            <FontAwesomeIcon
                                title={`${phone1}`}
                                className="text-xl w-6"
                                icon={faPhoneAlt}
                            />
                            <span className="ml-2">{phone1}</span>
                        </a>
                    )}
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center px-2  mx-3 mt-2 pb-3 flex-wrap">
                <div className="font-semibold dark:text-gray-400">{pointOfContact}</div>
                <div className="text-gray-700 dark:text-gray-400 text-sm">
                    {
                        lastVerifiedOn &&
                        <div className="text-gray-700 text-xs dark:text-white">
                            <div>
                                <span>{isVerified(verificationStatus) ? "Verified on: " : "Checked on: "}</span>
                                <span className="font-bold">
                                    {parseDateString(lastVerifiedOn)}
                                </span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default HospitalCard;
