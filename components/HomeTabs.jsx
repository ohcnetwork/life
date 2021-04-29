import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const HomeTabs = ({ tabVal, onChange }) => {
    return (
        <div className="dark:text-gray-200 mx-auto max-w-xs text-base flex font-bold justify-around my-5 cursor-pointer">
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${
                    tabVal === 'result' ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                }`}
                onClick={() => onChange('result')}>
                <FontAwesomeIcon
                    className="text-gray-900 dark:text-gray-300 mr-2"
                    title="Supplies"
                    icon={faMedkit}
                />
                Results
            </div>
            <div
                className={`w-3/6 flex justify-center items-center pb-2  ${
                    tabVal === 'twitter' ? `border-b-2 border-gray-900 dark:border-gray-300` : ``
                }`}
                onClick={() => onChange('twitter')}>
                <FontAwesomeIcon
                    className="text-blue-500 mr-2"
                    title="Share on Twitter"
                    icon={faTwitter}
                />
                Twitter Results
            </div>
        </div>
    );
};

export default HomeTabs;
