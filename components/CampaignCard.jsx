import React, { useEffect, useState } from 'react';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampaignCard = ({ name, text, logoUrl, donate, open }) => {
    const [state, setState] = useState(open);

    const textLen = () => {
        if (state) {
            return text;
        } else {
            return `${text.substr(0, 300)}...`;
        }
    };
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300 p-4 my-3">
            <div className="flex justify-between flex-wrap mb-4">
                <div className="font-bold text-3xl dark:text-white">{name}</div>
                <div>
                    <img src={logoUrl} alt="logo" className="h-8" />
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: textLen() }}></div>
            <div onClick={() => setState(!state)} className="underline cursor-pointer">
                {state ? 'Read less' : 'Read more'}
            </div>

            <a
                href={donate}
                className="w-full mt-2 rounded flex cursor-pointer my-4 mx-auto justify-center text-white py-2 bg-indigo-600 hover:bg-indigo-700"
                target="_blank">
                <text className="ml-3">Donate Now</text>
            </a>
        </div>
    );
};
export default CampaignCard;
