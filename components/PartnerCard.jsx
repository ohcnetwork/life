import React from 'react';

const PartnerCard = ({ name, logoURL, url }) => {
    return (
        <div className="inline-block">
            <a href={url} target="_blank">
                <span
                    className=" max-w-md shadow my-3 inline-block mx-6 border border-gray-300
        dark:border-gray-900 cursor-pointer">
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
        </div>
    );
};

export default PartnerCard;
