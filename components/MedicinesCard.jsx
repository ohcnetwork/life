import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faPhoneAlt, faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import Badge from './Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString, copyToClipboard } from '../lib/utils';
import SocialSharing from '../components/SocialSharing';

const MedicinesCard = ({
    verificationStatus,
    name,
    city,
    phone1,
    address,
    description,
    createdTime,
    slink,
    email,
    lastVerifiedOn
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="w-full flex items-center pt-2">
                <div className="ml-auto">
                    <SocialSharing twitterText="test" url="test" />
                </div>
            </div>
            <div className="p-4 flex justify-between flex-wrap">
                <div>
                    <div className="font-bold text-2xl">
                        <h1 className="flex dark:text-white items-center justify-start">{name}</h1>
                        {city && (
                            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                                <span> {city} </span>
                            </div>
                        )}
                    </div>
                    {address && (
                        <div className="w-11/12 max-w-3xl mt-2">
                            <div className="text-sm">{address}</div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col sm:items-end items-start">
                    {phone1 && (
                        <a
                            className="flex items-center text-gray-800 hover:text-gray-900 dark:text-white text-lg font-bold"
                            href={`tel:${phone1}`}>
                            <FontAwesomeIcon title={phone1} className="w-4" icon={faPhoneAlt} />
                            <span className="ml-2">{phone1}</span>
                        </a>
                    )}
                    {email && (
                        <a
                            className="flex items-center font-bold text-lg text-gray-700 dark:text-white mt-0 hover:text-gray-900"
                            target="_blank"
                            href={`mailto:${email}`}>
                            <FontAwesomeIcon title={`${email}`} className="w-4" icon={faEnvelope} />
                            <span className="ml-2 text-lg">Email</span>
                        </a>
                    )}
                    {slink && (
                        <a href={slink} className="dark:text-white">
                            <FontAwesomeIcon title={`${slink}`} className="w-4" icon={faLink} />
                            <span className="ml-2 text-lg">Source Link</span>
                        </a>
                    )}
                    <Badge badgeType={verificationStatus || 'unverified'} />
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center mx-4 mt-2 pb-3 flex-wrap">
                <div className="font-semibold dark:text-gray-400">{description}</div>
                <div className="text-gray-700 dark:text-gray-400 text-sm">
                    {lastVerifiedOn && (
                        <div className="text-gray-700 text-xs dark:text-white">
                            <div>
                                <span>
                                    {isVerified(verificationStatus)
                                        ? 'Verified on: '
                                        : 'Checked on: '}
                                </span>
                                <span className="font-bold">{parseDateString(lastVerifiedOn)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicinesCard;
