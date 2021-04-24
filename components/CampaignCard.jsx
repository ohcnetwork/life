import React, { useEffect, useState } from 'react';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampaignCard = ({ name, text, logoUrl, donate }) => {
    const [state, setstate] = useState(false);
    const [details, setDetails] = useState('');

    useEffect(() => {
        setDetails(`${text.substr(0, 300)}...`);
    }, [text]);

    const textLen = () => {
        setstate(!state);
        if (state) {
            setDetails(text);
        } else {
            setDetails(`${text.substr(0, 300)}...`);
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
            <div dangerouslySetInnerHTML={{ __html: details }}></div>
            <div onClick={() => textLen(text)} className="underline cursor-pointer">
                {!state ? 'Read less' : 'Read more'}
            </div>

            <a
                href={donate}
                className="w-full rounded flex cursor-pointer my-4 mx-auto justify-center text-white py-2 bg-indigo-600 hover:bg-indigo-700"
                target="_blank">
                <FontAwesomeIcon
                    className="text-white w-5 mr-3"
                    title="Donate"
                    icon={faDonate}
                />
                Donate Now
            </a>
        </div>
    );
};
export default CampaignCard;
