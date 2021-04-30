import React from 'react';

const PartnerCard = ({ name, logoURL, url }) => {
    return (
        <div className="inline-block w-full overflow:hidden md:w-1/4">
            <a href={url} target="_blank">
                <div
                    className=" max-w-md shadow my-3 mx-2 border rounded border-gray-300
        dark:border-gray-900 cursor-pointer px-2 py-2">
                    <div className="bg-white">
                        <img
                            src={logoURL}
                            alt={`${name} logo`}
                            className="sm:h-24 md:h-36 object-contain py-4"
                        />
                    </div>
                    <div className="text-center text-md py-2 border-t-2 w-full border-gray-300 dark:border-gray-900">
                        {name}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PartnerCard;
