import React, { useState } from 'react';
import Linkify from 'react-linkify';
import { linkifyDecorator } from '@lib/utils';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampaignCard = ({ name, text, logoUrl, donate, open }) => {
    const [isReadMore, setIsReadMore] = useState(open);

    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300 p-4 my-3">
            <div className="flex justify-between flex-wrap mb-4">
                <div className="font-bold text-3xl dark:text-white">{name}</div>
                <div>
                    <img src={logoUrl} alt="logo" className="h-8" />
                </div>
            </div>
            <div className="w-full">
                <Linkify
                    componentDecorator={linkifyDecorator}>
                    {isReadMore ? text : text.substr(0, 300)}
                </Linkify>
            </div>
            <div onClick={() => setIsReadMore(prev => !prev)} className="underline cursor-pointer">
                {isReadMore ? 'Read less' : 'Read more'}
            </div>
            <a
                href={donate}
                className="w-full mt-2 rounded flex cursor-pointer my-4 mx-auto justify-center text-white py-2 bg-indigo-600 hover:bg-indigo-700"
                target="_blank">
                <FontAwesomeIcon icon={faDonate} className="w-4 mr-2" />
                <span className="ml-2">
                    Donate Now
                </span>
            </a>
        </div>
    );
};
export default CampaignCard;