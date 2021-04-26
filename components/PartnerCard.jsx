import React from 'react';

const PartnerCard = ({ name, logoURL, url }) => {
    return (
        <a href={url} target="_blank">
            <span
                className=" max-w-md shadow my-3 inline-block mx-6 border-2 border-gray-300
        dark:border-gray-900 cursor-pointer hover:transform transition duration-300 ease-in-out hover:scale-105">
                <div className="bg-white">
                    <img
                        src={logoURL}
                        alt={`${name} logo`}
                        className="sm:h-24 md:h-36 object-contain mx-4 py-4"
                    />
                </div>
                <div className="text-center text-lg py-2 border-t-2 w-full border-gray-300 dark:border-gray-900">
                    {name}
                </div>
            </span>
        </a>
    );
};

export default PartnerCard;
