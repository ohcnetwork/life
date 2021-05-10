import React from 'react';
import TimeAgo from 'timeago-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialSharing from '@components/SocialSharing';
import { faBed, faEnvelope, faHeartbeat, faLink, faMapMarkerAlt, faDirections, faMedkit, faMobileAlt, faPhoneAlt, faProcedures } from '@fortawesome/free-solid-svg-icons';
import { copyTextGenerator, getGoogleMapsDirectionLink } from '@lib/utils';
import { useRouter } from 'next/router';
import { getHaversineDistance } from '@lib/utils';
import Badge from './Badge';
import Description from './Description';

import FeedbackCounter from './FeedbackCounter';

const ResourceCard = ({ data, type: filterType, currentLocation }) => {

    // General Data
    const { title, district } = data;
    const { comment, description, address } = data;
    const { phone_1, phone_2, email } = data;
    const { type, resource_type, source_link } = data;

    // Metadata
    const { external_id: id, last_verified_on, verification_status } = data;
    const { upvotes, downvotes } = data;

    // Oxygen Related Data
    const { quantity_available, price } = data;

    // coordinates Data
    const { latitude, longitude } = data;

    // Hospital Related Data
    const {
        hospital_available_normal_beds,
        hospital_available_oxygen_beds,
        hospital_available_ventilator_beds,
        hospital_available_icu_beds
    } = data;

    const { asPath } = useRouter();
    const pageUrl = `https://liferesources.in${asPath}`;
    const copyText = copyTextGenerator({ name: title, id, phone: (phone_1 || phone_2 || "No Phone"), type: type }, pageUrl);

    const category = `${type}` + (resource_type ? ` - ${resource_type}` : '')

    const directions = getGoogleMapsDirectionLink(latitude, longitude);

    return (
        <div id={id} className="max-w-3xl bg-white hover:bg-gray-100 dark:hover:bg-gray-1000 dark:bg-gray-1200 dark:text-gray-300 shadow-md rounded-md mx-2 md:mx-auto my-5 px-3 py-4">
            <div className="flex items-center justify-between mb-2 px-2">
                <span className="text-xs py-1 px-2 bg-gray-200 dark:bg-gray-900 rounded-full">{category}</span>
                <Badge status={verification_status} />
            </div>
            <div className="flex items-center justify-around xs:justify-between px-2 flex-wrap">
                <div className="flex items-center flex-wrap justify-around">
                    <h1 className="font-bold text-lg md:text-xl capitalize text-center">{(title && title.toLowerCase()) || type}</h1>
                </div>
                <div className="my-2 md:my-0 md:ml-auto">
                    <SocialSharing copyText={copyText} url={pageUrl} />
                </div>
            </div>
            <div className="flex items-stretch flex-col xs:flex-row justify-between px-2 py-2 dark:text-gray-200">
                <div className="flex flex-col items-stretch justify-center w-full xs:w-3/4 xs:pr-10">
                    <div className="flex items-center dark:text-gray-500">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5" />
                        <span className="ml-2 text-base xs:text-lg font-semibold">{district}</span>
                        {directions.length > 0 &&
                            <a className="ml-2" target="_blank" href={directions}>
                                <button
                                    type="button"
                                    className="ml-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none">
                                    <FontAwesomeIcon
                                        className="text-white-400 w-4 mr-4"
                                        title="Get directions"
                                        icon={faDirections}
                                    />
                                    Get Directions
                                </button>
                            </a>
                        }
                    </div>
                    <div className="flex flex-col items-start justify-center my-2 text-sm xs:text-base space-y-1">
                        <span className="text-sm xs:text-base font-normal capitalize">{(address && address.toLowerCase()) || comment}</span>
                        {
                            description && <Description text={description} />
                        }
                        {
                            type === "Oxygen" &&
                            <div className="flex flex-col">
                                <div>
                                    <div className="text-sm xs:text-base font-medium flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 dark:text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                                        </svg>
                                        <span className="mx-1">Quantity Available: </span>
                                        <span className="dark:text-gray-300">
                                            {quantity_available || "NA"}
                                        </span>
                                    </div>
                                    <div className="text-sm xs:text-base font-medium flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 dark:text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clipRule="evenodd" />
                                        </svg>
                                        <span className="mx-1">Price: </span>
                                        <span className="dark:text-gray-300">
                                            ₹ {price || "NA"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            (type === "Hospital") &&
                            <div className="grid grid-cols-2 w-full py-2">
                                <div className="text-sm xs:text-base font-medium flex items-center">
                                    <FontAwesomeIcon icon={faBed} className="w-5 dark:text-primary-500" />
                                    <span className="mx-2">Normal Beds: </span>
                                    <span className="dark:text-gray-300">
                                        {hospital_available_normal_beds || "NA"}
                                    </span>
                                </div>
                                <div className="text-sm xs:text-base font-medium flex items-center ml-auto">
                                    <FontAwesomeIcon icon={faHeartbeat} className="w-5 dark:text-primary-500" />
                                    <span className="mx-2">Oxygen Beds: </span>
                                    <span className="dark:text-gray-300">
                                        {hospital_available_oxygen_beds || "NA"}
                                    </span>
                                </div>
                                <div className="text-sm xs:text-base font-medium flex items-center">
                                    <FontAwesomeIcon icon={faMedkit} className="w-5 dark:text-primary-500" />
                                    <span className="mx-2">ICU Beds: </span>
                                    <span className="dark:text-gray-300">
                                        {hospital_available_icu_beds || "NA"}
                                    </span>
                                </div>
                                <div className="text-sm xs:text-base font-medium flex items-center ml-auto">
                                    <FontAwesomeIcon icon={faProcedures} className="w-5 dark:text-primary-500" />
                                    <span className="mx-2">Ventilator Beds: </span>
                                    <span className="dark:text-gray-300">
                                        {hospital_available_ventilator_beds || "NA"}
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex flex-row flex-wrap xs:flex-col xs:items-end justify-start flex-1 font-semibold text-lg dark:text-gray-100">
                    {
                        phone_1 &&
                        <div className="flex items-center justify-start mt-1 w-1/2 xs:w-auto">
                            <FontAwesomeIcon icon={faPhoneAlt} className="w-5" />
                            <a href={`tel:${phone_1}`} className="ml-2 text-base xs:text-lg">{phone_1}</a>
                        </div>
                    }
                    {
                        phone_2 &&
                        <div className="flex items-center justify-end mt-1 w-1/2 xs:w-auto">
                            <FontAwesomeIcon icon={faMobileAlt} className="w-5" />
                            <a href={`tel:${phone_1}`} className="ml-2 text-base xs:text-lg">{phone_2}</a>
                        </div>
                    }
                    {
                        email &&
                        <div className="flex items-center justify-start mt-1 w-1/2 xs:w-auto">
                            <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                            <a href={`mailto:${email}`} className="ml-2 text-base xs:text-lg">Email</a>
                        </div>
                    }
                    {
                        source_link &&
                        <div className="flex items-center justify-end mt-1 w-1/2 xs:w-auto">
                            <FontAwesomeIcon icon={faLink} className="w-5" />
                            <a href={source_link} className="ml-1 text-base xs:text-lg">Source</a>
                        </div>
                    }
                </div>
            </div>
            <div className="flex items-center justify-between py-1 px-3 flex-wrap text-secondary-500 dark:text-primary-500">
                {last_verified_on && (
                    <span className="text-xs mt-2 xs:my-0">
                        <span className="text-secondary-400 dark:text-primary-300">Checked on: </span>
                        <span className="font-bold">
                            {
                                Date.parse(last_verified_on) ?
                                    <TimeAgo datetime={(new Date(last_verified_on))} />
                                    : last_verified_on
                            }
                        </span>
                    </span>
                )}
                <div className="flex items-center mx-1 mt-2 xs:my-0 xs:space-x-2">
                    {/* TODO: Waiting for Endpoint from Backend */}
                    {/* <FeedbackCounter upvotes={upvotes} downvotes={downvotes} /> */}
                </div>
                <div className="flex items-center mx-1 mt-2 xs:my-0 xs:space-x-2">
                    {currentLocation && latitude && longitude && (
                        <span className="text-xs mt-2 xs:my-0">
                            <span className="text-secondary-400 dark:text-primary-300">Approximately</span>
                            <span className="font-bold">
                                &nbsp;{getHaversineDistance(currentLocation, {
                                lat: latitude,
                                lng: longitude
                            })} Kms
                        </span>
                            <span className="text-secondary-400 dark:text-primary-300">&nbsp;from your location</span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;