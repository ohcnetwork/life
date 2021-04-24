import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faLink,
    faPhoneAlt,
    faCheckCircle,
    faExclamationTriangle,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '../lib/utils';

const HelplineCard = ({
    category,
    createdTime,
    description,
    district,
    phone1,
    source,
    slink,
    state,
    subCategory,
    lastVerifiedOn,
    verificationStatus,
    name
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="p-4 flex justify-between flex-col md:flex-row">
                <div>
                    <div className="font-bold text-2xl">
                        <div>
                            <h1 className="flex items-center justify-start dark:text-white">
                                {name ? name : 'Helpline'}
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

                        </div>
                        <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold dark:text-white">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mr-2" />
                            <span className="mr-2">{district}</span>|
                            <span className="ml-2">{state}</span>
                        </div>
                        <div className="w-11/12 max-w-3xl my-2">
                            <div className="text-sm">{source}</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row justify-between md:flex-col">
                    {phone1 && (
                        <a
                            className="text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white"
                            href={`tel:${phone1}`}>
                            <FontAwesomeIcon
                                title={`${phone1}`}
                                className="text-xl w-6"
                                icon={faPhoneAlt}
                            />
                            <span className="ml-2">{phone1}</span>
                        </a>
                    )}
                    {slink && (
                        <a
                            className="text-gray-700 font-bold text-xl hover:text-gray-900 dark:text-white"
                            target="_blank"
                            href={slink}>
                            <FontAwesomeIcon
                                title={`${slink}`}
                                className="text-xl w-6"
                                icon={faLink}
                            />
                            <span className="ml-2 text-base mt-1">Source Link</span>
                        </a>
                    )}
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mx-2 mt-2 pb-3">
                <div className="font-semibold">{description}</div>
                <div className="text-gray-700 text-sm dark:text-white">
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

export default HelplineCard;
