import React from 'react';
import Badge from './Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { appendPhoneNumbers, copyTextGenerator, isVerified, parseDateString } from '@lib/utils';
import SocialSharing from '@components/SocialSharing';
import { useRouter } from 'next/router';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Phone from '@components/Phone';
import { faEnvelope, faLink, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const EntityCard = ({
    id,
    name,
    pointOfContact,
    city,
    phone1,
    phone2,
    area,
    source,
    address,
    description,
    sourceLink,
    state,
    district,
    email1,
    email2,
    lastVerifiedOn,
    verificationStatus,
    comment,
    availability,
    totalBedsAvailable,
    typeOfBedAvailable
}) => {
    const { asPath } = useRouter();
    const pageUrl = `https://liferesources.in${asPath}`;
    const resourceType = asPath.split('/').pop();
    const copyText = copyTextGenerator({ name, id, phone: phone1, type: resourceType }, pageUrl);
    return (
        <div
            id={id}
            className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
            <div className="w-full flex items-center pt-2">
                <div className="ml-auto">
                    <SocialSharing url={pageUrl} twitterText={copyText} copyText={copyText} />
                </div>
            </div>
            <div className="p-4 flex justify-between flex-wrap">
                <div>
                    <div className="font-bold text-2xl">
                        <h1 className="flex capitalize dark:text-white items-center justify-start">
                            {name || resourceType}
                        </h1>
                        <div className="w-11/12 max-w-3xl mt-2">
                            <div className="text-sm">{area}</div>
                        </div>
                        {state && district && (
                            <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold dark:text-white">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mr-2" />
                                <span className="mr-2">{district}</span>|
                                <span className="ml-2">{state}</span>
                            </div>
                        )}
                        <div className="w-11/12 mt-2">
                            <div className="text-sm">{source}</div>
                        </div>
                        {city && (
                            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                                <span> {city} </span>
                            </div>
                        )}
                        {availability && (
                            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                                <span> {availability} </span>
                            </div>
                        )}
                        {totalBedsAvailable && (
                            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                                <span>Total Available Beds: {totalBedsAvailable} </span>
                            </div>
                        )}
                        {typeOfBedAvailable && (
                            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                                <span>Available bed type: {typeOfBedAvailable.join(', ')} </span>
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
                    <Phone phones={appendPhoneNumbers(phone1, phone2)}></Phone>

                    {email1 && (
                        <span
                            className="flex items-center font-bold text-lg text-gray-700 dark:text-white mt-0 hover:text-gray-900"
                            target="_blank">
                            <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                            <a className="ml-2 text-lg" href={`mailto:${email1}`}>
                                {email2 ? 'Email1' : 'Email'}
                            </a>
                            {email2 && (
                                <a className="ml-2 text-lg" href={`mailto:${email2}`}>
                                    Email2
                                </a>
                            )}
                        </span>
                    )}
                    {!email1 && email2 && (
                        <a
                            className="flex items-center font-bold text-lg text-gray-700 dark:text-white mt-0 hover:text-gray-900"
                            target="_blank"
                            href={`mailto:${email}`}>
                            <FontAwesomeIcon className="w-4" icon={faEnvelope} />
                            <a className="ml-2 text-lg" href={`mailto:${email2}`}>
                                Email
                            </a>
                        </a>
                    )}
                    {sourceLink && (
                        <a
                            href={sourceLink}
                            className="font-bold text-xl text-gray-700 mt-0 hover:text-gray-900 dark:text-white">
                            <FontAwesomeIcon
                                title={`${sourceLink}`}
                                className="text-xl w-6"
                                icon={faLink}
                            />
                            <span className="ml-2 text-lg mt-1">Source Link</span>
                        </a>
                    )}
                    <Badge badgeType={verificationStatus || 'unverified'} />
                </div>
            </div>
            <hr className="dark:border-gray-900" />
            <div className="flex justify-between items-center mx-4 mt-2 pb-3 flex-wrap">
                {pointOfContact && (
                    <div className="font-semibold dark:text-gray-400">{pointOfContact}</div>
                )}
                {description && (
                    <div className="font-semibold dark:text-gray-400">{description}</div>
                )}
                {comment && <div className="font-semibold dark:text-gray-400">{comment}</div>}
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

export default EntityCard;
