import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialSharing from '@components/SocialSharing';
import { faEnvelope, faLink, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { copyTextGenerator, isVerified, parseDateString } from '@lib/utils';
import { useRouter } from 'next/router';
import Badge from './Badge';

const ResourceCard = ({ data, type: filterType }) => {

    const { id, name, district, comment, description, address } = data;
    const { lastVerifiedOn, verificationStatus } = data;
    const { phone1, phone2 } = data;
    const { resourceType } = data;
    const { availability, totalBedsAvailable, typeOfBedAvailable } = data;
    const source = data.source || data.sourceUrl || data.sourceLink;
    const email = data.emailId || data.email1 || data.email2;

    const { asPath } = useRouter();
    const pageUrl = `https://liferesources.in${asPath}`;
    const copyText = copyTextGenerator({ name, id, phone: (phone1 || phone2 || "No Phone"), type: resourceType }, pageUrl);

    const isAll = filterType === "All";

    return (
        <div id={id} className="max-w-3xl bg-white dark:bg-gray-1200 dark:text-gray-300 shadow-md rounded-md mx-2 md:mx-auto my-5 px-3 py-4">
            {isAll && <div className="mx-auto text-xs mb-2 md:ml-5 py-1 px-2 bg-gray-400 dark:bg-gray-900 w-min rounded-full">{resourceType}</div>}
            {/* Header */}
            <div className="flex items-center md:justify-between justify-around px-5 flex-wrap">
                <div className="flex items-center flex-wrap justify-around">
                    <h1 className="font-bold text-xl uppercase text-center">{name || resourceType}</h1>
                    {
                        <Badge verificationStatus={verificationStatus} />
                    }
                </div>
                <div className="my-2 md:my-0 md:ml-auto">
                    <SocialSharing copyText={copyText} url={pageUrl} />
                </div>
            </div>
            {/* Body 1 */}
            <div className="flex items-stretch justify-between px-5 py-2 dark:text-gray-200">
                <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5" />
                        <span className="ml-2 text-lg font-semibold">{district}</span>
                    </div>
                    <div className="flex flex-col items-start justify-items-center mt-2">
                        <span>{address || description || comment}</span>
                        {availability && (
                            <span><span className="font-bold">Availability:</span> {availability}</span>
                        )}
                        {totalBedsAvailable && (
                            <span><span className="font-bold">Total Available Beds:</span> {totalBedsAvailable}</span>
                        )}
                        {typeOfBedAvailable && (
                            <span><span className="font-bold">Available bed type:</span> {typeOfBedAvailable.join(', ')} </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-end justify-between flex-1 font-semibold text-lg dark:text-gray-100">
                    {
                        (phone1 || phone2) &&
                        <div className="flex items-center flex-wrap justify-end mt-1">
                            <FontAwesomeIcon icon={faPhoneAlt} className="w-5" />
                            {phone1 && <a href={`tel:${phone1}`} className="ml-2">{phone1}</a>}
                            {phone2 && <a href={`tel:${phone2}`} className="ml-2">{phone2}</a>}
                        </div>
                    }
                    {(email) &&
                        <div className="flex items-center mt-1">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                            <a href={`mailto:${email}`} className="ml-1">Email</a>
                        </div>
                    }
                    {(source) &&
                        <div className="flex items-center mt-1">
                            <FontAwesomeIcon icon={faLink} className="w-5" />
                            <a href={source} className="ml-1">Source</a>
                        </div>
                    }
                </div>
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between py-3 px-5 flex-wrap text-secondary-500 dark:text-primary-500">
                <span className="text-sm mr-5">{(address && description) || (address && comment) || verificationStatus}</span>
                <span className="text-xs">
                    <span>
                        {isVerified(verificationStatus) ? 'Verified on: ' : 'Checked on: '}
                    </span>
                    <span className="font-bold">{parseDateString(lastVerifiedOn)}</span>
                </span>
            </div>
        </div>
    );
}

export default ResourceCard;