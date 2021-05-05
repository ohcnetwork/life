import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

const HomeTabs = ({ tabVal, onChange, resources }) => {
    return (
        <div className="dark:text-gray-200 mx-auto max-w-xs text-base flex font-bold justify-around my-6 cursor-pointer">
            { resources.length > 0 ? 
                (
                    <div
                        className={`w-3/6 flex justify-center items-center pb-2  ${(tabVal === 'result' ) ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                            }`}
                        onClick={() => onChange('result')}>
                        <FontAwesomeIcon
                            className="text-primary-500 w-5 mr-2"
                            title="View Search Results"
                            icon={faHeartbeat}
                        />
                        Results
                    </div>
                ) : null
            }
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${(tabVal === 'twitter' || tabVal === "twitter_on_no_data") ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                    }`}
                onClick={() => onChange('twitter')}>
                <FontAwesomeIcon
                    className="text-secondary-400 w-5 mr-2"
                    title="View Twitter Results"
                    icon={faTwitter}
                />
                Twitter
            </div>
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${tabVal === 'maps' ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                    }`}
                onClick={() => onChange('maps')}>
                <FontAwesomeIcon
                    className="text-secondary-400 w-5 mr-2"
                    title="View Nearby results"
                    icon={faGoogle}
                />
                Map
            </div>
        </div>
    );
};

export default HomeTabs;
