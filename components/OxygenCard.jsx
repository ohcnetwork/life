import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    faLink,
    faPhoneAlt,
    faCheckCircle,
    faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '../lib/utils';

const OxygenCard = ({
    name,
    company,
    phone1,
    phone2,
    description,
    source,
    slink,
    fstate,
    fdistrict,
    createdTime,
    verificationStatus,
    lastVerifiedOn
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="p-4 flex justify-between flex-wrap">
                <div>
                    <div className="font-bold text-2xl dark:text-white">
                        <h1>
                            {name}
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
                        <div className="text-sm  uppercase mt-3 text-gray-700 dark:text-gray-400 font-semibold">
                            <span className="mr-2">{fdistrict}</span>|
                            <span className="ml-2">{fstate}</span>
                        </div>
                        <div className="w-11/12 mt-2">
                            <div className="text-sm">{source}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start ">
                    {phone1 && (
                        <a
                            className="font-mono text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white mt-2"
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
                            className="font-mono text-gray-700 font-bold text-xl hover:text-gray-900 dark:text-white"
                            target="_blank"
                            href={slink}>
                            <FontAwesomeIcon
                                title={`${slink}`}
                                className="text-xl w-6"
                                icon={faLink}
                            />
                            <span className="ml-2 text-lg mt-1">Source Link</span>
                        </a>
                    )}
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center mx-4 mt-2 pb-3 flex-wrap">
                <div className="font-semibold dark:text-gray-400">{description}</div>
                <div className="text-gray-700 text-sm dark:text-gray-400">
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

export default OxygenCard;
