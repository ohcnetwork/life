import React from 'react';

const PartnerCard = ({ name, logoURL, url }) => {
    return (
        <div className="inline-block overflow:hidden">
            <a href={url} target="_blank">
                <div className="w-44 max-w-md shadow my-3 mx-4 border rounded border-gray-300 dark:border-gray-900 cursor-pointer">
                    <div className="bg-white w-full h-40 p-2">
                        <img src={logoURL} alt={`${name} Logo`} className="h-36 object-contain" />
                    </div>
                    <div className="text-center text-md px-2 py-2 border-t-2 w-full border-gray-300 dark:border-gray-900">
                        {name}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PartnerCard;
