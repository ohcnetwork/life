import { faPhoneAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isVerified, parseDateString } from '@lib/utils';
import React from 'react';
import Badge from './Badge';
import SocialSharing from '@components/SocialSharing';
import { useRouter } from 'next/router';

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
    const { asPath } = useRouter();
    const pageUrl = `https://liferesources.in${asPath}`;
    const copyText = `Name: ${name ? name : 'Ambulance'} \n Contact: ${phone1}`;
    return (
        <>
            <div className="w-full">
                <div className="bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300">
                    <div className="w-full flex items-center pt-2">
                        <div className="ml-auto">
                            <SocialSharing
                                url={pageUrl}
                                twitterText={`${copyText} More Info: ${pageUrl}`}
                                copyText={copyText}
                            />
                        </div>
                    </div>
                    <div className="p-4 flex justify-between flex-wrap">
                        <div>
                            <div className="font-bold text-2xl">
                                <h1 className="flex items-center justify-start dark:text-white">
                                    {name ? name : 'Ambulance'}
                                </h1>
                                <div className="text-sm text-gray-700 font-semibold"></div>
                            </div>
                            <div className="w-11/12 max-w-3xl mt-2">
                                <div className="text-sm">{area}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            {phone1 && (
                                <a
                                    className="flex items-center text-gray-800 hover:text-gray-900 text-lg font-bold dark:text-white"
                                    href={`tel:${phone1}`}>
                                    <FontAwesomeIcon
                                        title={phone1}
                                        className="w-4"
                                        icon={faPhoneAlt}
                                    />
                                    <span className="ml-2">{phone1}</span>
                                </a>
                            )}
                            {phone2 && (
                                <a
                                    className="flex items-center font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                                    href={`tel:${phone2}`}>
                                    <FontAwesomeIcon
                                        title={phone2}
                                        className="w-4"
                                        icon={faPhoneAlt}
                                    />
                                    <span className="ml-2">{phone2}</span>
                                </a>
                            )}
                            {source && (
                                <a
                                    className="flex items-center font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                                    href={source}>
                                    <FontAwesomeIcon
                                        title={`${source}`}
                                        className="text-md w-4"
                                        icon={faLink}
                                    />
                                    <span className="ml-2 text-lg mt-1">Source Link</span>
                                </a>
                            )}
                            <Badge badgeType={verificationStatus || 'unverified'} />
                        </div>
                    </div>
                    <hr className="dark:border-gray-900" />
                    <div className="flex justify-between items-center mx-4 mt-2 pb-3">
                        <div className="text-gray-700 text-sm dark:text-white">
                            {lastVerifiedOn && (
                                <div className="text-gray-700 text-xs dark:text-white">
                                    <div>
                                        <span>
                                            {isVerified(verificationStatus)
                                                ? 'Verified on: '
                                                : 'Checked on: '}
                                        </span>
                                        <span className="font-bold">
                                            {`${parseDateString(lastVerifiedOn)}`}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AmbulanceCard;
